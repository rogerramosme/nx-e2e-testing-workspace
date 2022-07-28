# End To End Testing Workspace

Create fast and simple e2e projects using [Cypress.io](https://www.cypress.io/) and [Nx](https://nx.dev)

🔎 **Smart, Fast and Extensible Testing System**

## Prerequisites

Install `nx` globally with `npm i -g nx`
> You can use `npx` instead.

After clone, just install project dependencies with `npm i`

## Generate an e2e application

After clone, just install project dependencies with `npm i`

Run `nx workspace-schematic e2e-project <PROJECT_NAME> --url <PROJECT_BASE_URL>`

e.g.:
```
nx workspace-schematic e2e-project my-awesome-project --url http://my-awesome-project.net
```

## Running end-to-end tests

Run `nx e2e <PROJECT_NAME>` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

e.g.:
```
nx e2e my-awesome-project

# or

nx run my-awesome-project:e2e
```

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## References

This project is made thanks to:
- Article: [How to Build Generators & Schematics With the Superior Nx Devkit](https://javascript.plainenglish.io/how-to-build-generators-schematics-with-the-superior-nx-devkit-689d8f529fa6)
- Documentation: [Nx Workspace Generators](https://nx.dev/generators/workspace-generators)
- Repository: [@nrwl/nx/packages/react](https://github.com/nrwl/nx/blob/184d4aa0d5d11640968179b13d049bf60d347726/packages/react/src/generators/application/application.ts#L80)

Special Thanks to [Henrique Moreira](https://github.com/rique-dev) who guide-us into nx generators creation <3
