<h1 align="center">Welcome to Sorare Notion connector 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/glamanda\_" target="_blank">
    <img alt="Twitter: glamanda\_" src="https://img.shields.io/twitter/follow/glamanda\_.svg?style=social" />
  </a>
</p>

> Connector between Sorare and notion to get autofilled player informations in a notion database

TODO: add some captures

**Disclamer**: This project give you everything to deploy yourself on AWS.  
You will need:

- An AWS account,
- A notion account,
  - copy the template from [here](TODO: add a link here)
  - get the database id

## Install

```sh
yarn install
```

## Usage

### Add environment variables

Copy the example file `.env.example` to `.env` and fill the values.

For the `NOTION_TOKEN` you need to create an custom integration in notion. Then, share the Sorare board with the integration.

For the `NOTION_DB_ID` you need to copy the database id from the url of the database.

### Deploy

You are all set to deploy now.

```sh
yarn deploy
```

It will create an AWS cloud formation with a scheduled lambda function that will update the database.

### Test in local

```sh
yarn run start
```

## Author

👤 **Guillaume Lamanda**

- Twitter: [@glamanda\_](https://twitter.com/glamanda_)
- Github: [@guillaumeLamanda](https://github.com/guillaumeLamanda)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
