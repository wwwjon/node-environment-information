# Node Environment Information

![Node Environment Information](https://raw.githubusercontent.com/dobrud/node-environment-information/master/screenshot.png]

Node Environment Information provides you a brief overview of the environment information that is normally hidden behind your cloud providers curtain.

### Quick Install

```sh
yarn install
```

Open [http://localhost:8080/](http://localhost:8080/) in your browser.

Now you can easily push the repository directly to your preferred cloud provider.

In this example, we use a Cloud Flare compatible provider. Please note that you must [set up the CF CLI](https://github.com/cloudfoundry/cli#getting-started) tool.

```sh
cf push node-environment-information --random-route
```

You can get the same information as JSON by sending your request with the HTTP header `Accept: application/json`

## Current Support
This code is tested with NodeJS running either on Linux or macOS.

## Copyright and license
©2017 Dominik Bruderer. Code released under [the MIT license](https://github.com/dobrud/node-environment-information/blob/master/LICENSE).
