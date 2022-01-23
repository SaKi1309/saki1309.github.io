//JavaScript to fetch from GitHub API. Code inspired by: https://stackoverflow.com/a/18395248/17905764 
// TODO: Add Programming Languages and pagination
//function updateGithubFields(){
//	var responseObj = JSON.parse(this.responseText);
//	let user_info_string = ""
//	user_info_string += "<div class=\"box\">"  
//	user_info_string += "<div class=\"columns is-vcentered is-mobile\">"
//    user_info_string += "<div class=\"column is-one-third\">"
//	user_info_string += "<figure class=\"image is-64x64\"><img src=\""+responseObj.avatar_url+"\"></figure>"
//	user_info_string += "</div>"
//	user_info_string += "<div class=\"column is-two-thirds\">"
//	user_info_string += "<div>"
//	user_info_string += "<i class=\"fas fa-book\"></i>"
//	user_info_string += "<span>Public repos: <a href=\"https://github.com/SaKi1309?tab=repositories\">" +  responseObj.public_repos +"</a></span>"
//	user_info_string += "</div>"
//	user_info_string += "<div>"
//	user_info_string += "<i class=\"fas fa-code\"<></i>"
//	user_info_string += "<span>Public gists: <a href=\"https://gist.github.com/SaKi1309\">" +  responseObj.public_gists +"</a></span>"
//	user_info_string += "</div>"
//	user_info_string += "<div>"
//	user_info_string += "<i class=\"fas fa-users\"></i>"
//	user_info_string += "<span>Followers: <a href=\"https://github.com/SaKi1309?tab=followers\">" + responseObj.followers +"</a></span>"
//	user_info_string += "<span>Following: <a href=\"https://github.com/SaKi1309?tab=following\">" +  responseObj.following +"</a></span>"
//	user_info_string += "</div>"
//	user_info_string += "</div>"
//	user_info_string += "</div>"
//	user_info_string += "</div>"
//	
//	document.getElementById("github_user").innerHTML = user_info_string
//}

function updateGithubFields(){
	var responseObj = JSON.parse(this.responseText);
	let user_info_string = ""
	user_info_string += "<div class=\"box\">"  
	user_info_string += "<article class=\"media\">"
    user_info_string += "<div class=\"media-left\">"
	user_info_string += "<figure class=\"image is-64x64\"><img src=\""+responseObj.avatar_url+"\"/></figure>"
	user_info_string += "</div>"
	user_info_string += "<div class=\"media-content\">"
	user_info_string += "<div class=\"content\">"
	user_info_string += "<div>"
	user_info_string += "<i class=\"fas fa-book\"></i>"
	user_info_string += "<span> Public repos: <a href=\"https://github.com/SaKi1309?tab=repositories\">" +  responseObj.public_repos +"</a></span>"
	user_info_string += "</div>"
	user_info_string += "<div>"
	user_info_string += "<i class=\"fas fa-code\"></i>"
	user_info_string += "<span> Public gists: <a href=\"https://gist.github.com/SaKi1309\">" +  responseObj.public_gists +"</a></span>"
	user_info_string += "</div>"
	user_info_string += "<div>"
	user_info_string += "<i class=\"fas fa-users\"></i>"
	user_info_string += "<span> Followers: <a href=\"https://github.com/SaKi1309?tab=followers\">" + responseObj.followers +"</a></span>"
	user_info_string += "<span> Following: <a href=\"https://github.com/SaKi1309?tab=following\">" +  responseObj.following +"</a></span>"
	user_info_string += "</div>"  //div
	user_info_string += "</div>"  //content
	user_info_string += "</div>"  //media-content
	user_info_string += "</article>"  //media
	user_info_string += "</div>"  //box
	
	document.getElementById("github_user").innerHTML = user_info_string
	console.log(user_info_string)
}

function updateGithubRepos() {
	var responseObj = JSON.parse(this.responseText);
	for (const element of responseObj) {
		
		let topic_string = ""
		//Get topic of each public repo and represent as tag
		for (const topic of element.topics){
			topic_string += "<span class=\"tag is-rounded is-small is-info is-light\" >"+topic+"</span>"
		}
		//Get Infor of each public Repo
		let repo_info_string = ""
		repo_info_string += "<div class=\"box\">"  
		repo_info_string +=	"<a class=\"is-size-4\" href=\""+element.html_url+"\">"+element.name+" </a>"
		repo_info_string +=	"<div class=\"columns is-multiline\">"
		repo_info_string +=	"<div class=\"column is-one-third\"><i class=\"fas fa-eye\"></i> " + element.watchers_count + " watching</div>"
		repo_info_string +=	"<div class=\"column is-one-third\"><i class=\"far fa-star\"></i> " + element.stargazers_count + " stars</div>"
		repo_info_string +=	"<div class=\"column is-one-third\"><i class=\"fas fa-code-branch\"></i> " + element.forks_count + " forks</div>"
		//empty container for languages. If element.languages is null, the API also does not return languages. e.g. Githubpage or only markdown repos
		if (element.language != null){
			repo_info_string +=	"<div id=\"github_repo_"+element.name+"\" class=\"column is-full\"></div>" 
		}
		repo_info_string +=	"<div class=\"column is-full\">" + topic_string + "</div>"
		repo_info_string +=	"<div class=\"column is-full\">" + element.description + "</div>"
		repo_info_string +=	"</div>"
		repo_info_string +=	"</div>"
		document.getElementById("github_repos").innerHTML += repo_info_string
		
		//Update languages by performing HTTP Request, that have been created with a certain id. I execute after the div has been created, to ensure, the async call finds the element.
		if (element.language != null){
			var request_repos = new XMLHttpRequest();
			request_repos.onload = function updateGithubLanguages(){
				var responseObj = JSON.parse(this.responseText);
				let languages_string = ""
				for (const [key, value] of Object.entries(responseObj)) {
				  languages_string += "<span class=\"tag is-rounded is-small is-success is-light\">"+key+"</span>"
				}
				document.getElementById("github_repo_"+element.name).innerHTML += languages_string
			}
			request_repos.open('get', element.languages_url, true)
			request_repos.send()
		}
	}
}

var request_basics = new XMLHttpRequest();
request_basics.onload = updateGithubFields;
request_basics.open('get', 'https://api.github.com/users/saki1309', true)
request_basics.send()

var request_repos = new XMLHttpRequest();
request_repos.onload = updateGithubRepos;
request_repos.open('get', 'https://api.github.com/users/saki1309/repos', true)
request_repos.send()
