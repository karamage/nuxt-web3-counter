# nuxt-web3-counter

## The tutorial code for developing a Web3 dapp

This is a repository I created to study Web3.
The value of the counter is written to the blockchain and displayed.

https://nuxt-web3-counter.vercel.app/

To run it, install MataMask and connect it to the Ropsten test network.
To increment the counter, ETH for Ropsten will be charged as gas.

<img width="1260" alt="Screen Shot 2022-01-17 at 15 20 03" src="https://user-images.githubusercontent.com/330715/149721244-865d17fc-3301-4eb5-86e1-bd843f308e15.png">

We are using the following libraries
- web3.js
- Truffle

## Build Setup

This code will work in a local environment.

- install ganache https://trufflesuite.com/ganache/
- Start ganache.

```bash
# install dependencies
$ yarn install

# build smart contract
$ yarn truffle build

# deploy smart contract
$ yarn truffle deploy

# serve with hot reload at localhost:3000
$ yarn dev
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
