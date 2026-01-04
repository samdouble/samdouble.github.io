# samdouble.github.io

[![CI](https://github.com/samdouble/samdouble.github.io/actions/workflows/checks.yml/badge.svg)](https://github.com/samdouble/samdouble.github.io/actions/workflows/checks.yml)
[![Coverage Status](https://coveralls.io/repos/samdouble/samdouble.github.io/badge.svg?branch=master&service=github)](https://coveralls.io/github/samdouble/samdouble.github.io?branch=master)

[![Node.js](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)](https://www.typescriptlang.org/)
[![Markdown](https://img.shields.io/badge/Markdown-%23000000.svg?logo=markdown&logoColor=white)](https://www.markdownguide.org/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-121013?logo=github&logoColor=white)](https://pages.github.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=fff)](https://getbootstrap.com/)

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


linear-gradient(135deg, #00ffff, #8a2be2)

