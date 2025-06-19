# samdouble.github.io

[![CI](https://github.com/samdouble/samdouble.github.io/actions/workflows/checks.yml/badge.svg)](https://github.com/samdouble/samdouble.github.io/actions/workflows/checks.yml)
[![Coverage Status](https://coveralls.io/repos/samdouble/samdouble.github.io/badge.svg?branch=master&service=github)](https://coveralls.io/github/samdouble/samdouble.github.io?branch=master)

My [blog](samdouble.github.io), hosted on GitHub.

* Déodorant maison

## Technologies & Languages

- React 18
- Node 22
- GitHub Actions
- GitHub Pages

## Development

### Installing the dependencies

Run the following command:

```sh
npm install
```

### Starting the app locally

Run the following command:

```sh
npm start
```

### Running the built app locally

Run the following command:

```sh
npm run build
npm install -g serve
serve -s build
```

### Running the tests

Run the following command:

```sh
npm test
```

The webpage should be available on [http://localhost:3000](http://localhost:3000) and refresh automatically when files are changed and saved.

## Warnings
The branch `gh-pages` is used for deployment. For this reason, it should be as lean as possible and should not be synced with the main branch, which contains all the development files.
It should be left as is and only be modified by the GitHub Actions workflows.
