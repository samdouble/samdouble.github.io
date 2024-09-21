# samdouble.github.io

This is a small application to export a comic book in PDF format from an XML configuration and a set of images.

## Technologies & Languages

- C# 11
- .NET 7
- iText 8
- GitHub Actions
- GitHub Releases

## Development

### Installing the dependencies

Run the following command:

```
npm install
```

### Running the tests

Run the following command:

```
npm test
```

### Starting the app locally

Run the following command:

```
npm start
```

The webpage should be available on [http://localhost:3000](http://localhost:3000) and refresh automatically when files are changed and saved.

## Production

1. Change the version number in the *csproj* file.
1. Push your changes to any branch.
2. dotnet-releaser on CircleCI will create a new release on GitHub.
