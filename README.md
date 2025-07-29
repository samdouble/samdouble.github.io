# samdouble.github.io

[![CI](https://github.com/samdouble/samdouble.github.io/actions/workflows/checks.yml/badge.svg)](https://github.com/samdouble/samdouble.github.io/actions/workflows/checks.yml)
[![Node](https://img.shields.io/node/v/samdouble.github.io)](https://github.com/samdouble/samdouble.github.io)
[![Coverage Status](https://coveralls.io/repos/samdouble/samdouble.github.io/badge.svg?branch=master&service=github)](https://coveralls.io/github/samdouble/samdouble.github.io?branch=master)

My [blog](samdouble.github.io), hosted on GitHub.

* Déodorant maison

## Technologies & Languages

- React 19
- Node 22
- GitHub Actions
- GitHub Pages

## Development

### Installing the Dependencies

Run the following command:

```sh
npm install
```

### Starting the App Locally

Run the following command:

```sh
npm start
```

The webpage should be available on [http://localhost:5173](http://localhost:5173) and refresh automatically when files are changed and saved.

### Running the Built App Locally

Run the following command:

```sh
npm run build
npm install -g serve
serve -s build
```

### Running Tests

Run the following command:

```sh
npm test
```

Or, for visual regression tests:

```sh
npm run test-visual
```

### Optimizing Images

```sh
python scripts/optimize_images <folder_path>
```

## Warnings

The branch `gh-pages` is used for deployment. For this reason, it should be as lean as possible and should not be synced with the main branch, which contains all the development files.
It should be left as is and only be modified by the GitHub Actions workflows.
