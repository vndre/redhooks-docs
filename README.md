## run locally

1. Install dependencies

```sh
yarn
```

2. Run a dev server on `:8000`

```sh
yarn dev
```

## pages structure

all `.mdx` files inside _docs_ folder are turned into urls:

* readme.mdx -> '/' (root)
* something.mdx -> '/something'

## doc template

All docs must contain the following information:

```
---
title: <page title>
description: <desc>
position: <the order in the navigation>
---

code blocks must be followed by 'javascript':

```javascript

// code

\```
```

## production

```sh
yarn build
```

creatres /dist

```sh
yarn prod (serves at localhost)
yarn prod:web (serves at 0.0.0.0)
```