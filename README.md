# Scantist User Docs

## Getting Started

To get started with this user-docs, follow these steps:

### Installation

Make sure you have Node.js and npm installed on your machine.

1. Clone this repository:

   ```bash
   git clone https://github.com/scantist/user-docs.git
   cd user-docs
   ```

2. Install the dependencies:

   ```bash
   npm install .
   ```

### Local Development

To run the application locally and start the development server, use the following command:

```bash
npm run docs:dev
```

This command will start a local server and open the documentation site in your default web browser.

### Building for Production

To build the documentation for production, use:

```bash
npm run docs:build
```

This will generate the static files for your documentation in the `.vitepress/dist` directory.

## Folder Structure

The important folders/files in this project are:

- `docs`: Contains the Markdown files for your documentation.
- `package.json`: Contains the project's dependencies and scripts.
- `vite.config.js`: Configuration file for VitePress.

## Disclaimer

You may need to read up on the `Jenkinsfile`

and understand how to use the `companyConfig.js`
