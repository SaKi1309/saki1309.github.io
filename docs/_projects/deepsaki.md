---
title: DeepSaki TensorFlow Add-On
order: 4
image: deepsaki.png
---

[DeepSaki](https://sascha-kirch.github.io/DeepSaki/latest/) is an add-on to [TensorFlow](https://github.com/tensorflow/tensorflow). It provides a variaty of custom classes ranging from activation functions to entire models, helper functions to facilitate connectiong to your compute HW and many more!
The project started as fun project to learn and to collect the code snippets I was using in my projects. Now it has been transformed into a modern SW package featuring CI/CD and a documentation. 

![Python](https://img.shields.io/badge/python-3.10+-blue)
![GitHub](https://img.shields.io/github/license/sascha-kirch/deepsaki)

**Main-Branch:**<br>
[![Build](https://github.com/sascha-kirch/DeepSaki/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/sascha-kirch/DeepSaki/actions/workflows/test.yml)
[![codecov](https://codecov.io/gh/sascha-kirch/DeepSaki/branch/main/graph/badge.svg?token=FD7IE1T9EO)](https://codecov.io/gh/sascha-kirch/DeepSaki)
[![Documentation](https://img.shields.io/badge/ref-Documentation-blue)](https://sascha-kirch.github.io/DeepSaki/latest/)

**Develop-Branch:**<br>
[![Build](https://github.com/sascha-kirch/DeepSaki/actions/workflows/test.yml/badge.svg?branch=develop)](https://github.com/sascha-kirch/DeepSaki/actions/workflows/test.yml)
[![codecov](https://codecov.io/gh/sascha-kirch/DeepSaki/branch/develop/graph/badge.svg?token=FD7IE1T9EO)](https://codecov.io/gh/sascha-kirch/DeepSaki)
[![Documentation](https://img.shields.io/badge/ref-Documentation-blue)](https://sascha-kirch.github.io/DeepSaki/develop/)

**Some highlights:**

- Layers to transform data into the frequency domain using FFTs, like [FFT2D](https://sascha-kirch.github.io/DeepSaki/latest/reference/DeepSaki/layers/#DeepSaki.layers.fourier_layer.FFT2D) and [FFT3D](https://sascha-kirch.github.io/DeepSaki/latest/reference/DeepSaki/layers/#DeepSaki.layers.fourier_layer.FFT3D).
- Layers to perform calculations in the frequency domain supporting complex values like [FourierPooling2D](https://sascha-kirch.github.io/DeepSaki/latest/reference/DeepSaki/layers/#DeepSaki.layers.fourier_layer.FourierPooling2D).
- Wrapper to make [initializer](https://sascha-kirch.github.io/DeepSaki/latest/reference/DeepSaki/initializers/#DeepSaki.initializers.initializer_helper.make_initializer_complex) and [activation functions](https://sascha-kirch.github.io/DeepSaki/latest/reference/DeepSaki/activations/#DeepSaki.activations.complex_valued_activations.ComplexActivation) complex-valued.
- Utilities to [auto-detect your compute hardware](https://sascha-kirch.github.io/DeepSaki/latest/reference/DeepSaki/utils/#DeepSaki.utils.environment.detect_accelerator).
- autoencoder like models like the [UNet](https://sascha-kirch.github.io/DeepSaki/latest/reference/DeepSaki/models/#DeepSaki.models.autoencoders.UNet) and discriminator models like a [Layout-Content-Discriminator](https://sascha-kirch.github.io/DeepSaki/latest/reference/DeepSaki/models/#DeepSaki.models.discriminators.LayoutContentDiscriminator).
- [Augmentations](https://sascha-kirch.github.io/DeepSaki/latest/reference/DeepSaki/augmentations/) like Cut-Mix and Cut-Out
- [Custom constraints](https://sascha-kirch.github.io/DeepSaki/latest/reference/DeepSaki/constraints/) for your layers like NonNegative.
- And many more...


## Installation

![PyPI](https://img.shields.io/pypi/v/deepsaki)
![PyPI - Status](https://img.shields.io/pypi/status/deepsaki)
```bash
pip install DeepSaki
```

## Contribute to DeepSaki
I highly encourage you to contribute to DeepSaki. Checkout our [contribution guide](https://sascha-kirch.github.io/DeepSaki/latest/CONTRIBUTE/) to get started. 

## :star: Star History
[![Star History Chart](https://api.star-history.com/svg?repos=sascha-kirch/DeepSaki&type=Date)](https://star-history.com/#sascha-kirch/DeepSaki&Date)
