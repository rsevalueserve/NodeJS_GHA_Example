<div align="center">

# [ TS Node + Express]

A boilerplate/starter project for quickly building APIs using Node.js, Express.
</div>



<div align="center">

[![eslint](https://img.shields.io/badge/Lint-ESLint-blueviolet)](https://github.com/eslint/eslint)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=shield)](https://github.com/prettier/prettier)
[![husky](https://img.shields.io/badge/Git%20Hooks-Husky-lightgrey)](https://github.com/typicode/husky)
[![jest](https://img.shields.io/badge/Unit%20Testing-Jest-success)](https://github.com/facebook/jest)
</div>

## 👋 Welcome!

This is a Boilerplate repo created in the `Product-Engineering-Team` space and is
maintained by the organization's
[owners](https://github.com/orgs/Product-Engineering-Team/people?query=role%3Aowner).

[//]: # 'Usage'

## 📘 Usage

This is a Boilerplate repo created in the `Product-Engineering-Team` space.

Purpose: Follow coding standards throughout existing projects in the organization

[//]: # 'Local Development'

## 🚀 Getting Started with Local Development

1. To build this repo, you will need Node 16.
2. Clone this repo to your local machine via `git clone`.
3. In your terminal window, navigate into this repo using `cd`.
4. Run `npm install` to install dependencies to your repo.
5. Run `npm run prepare` to enable husky and the git hooks.
6. **Database Configuration**, To set up your database, configure the necessary environment variables (check .env.example) in a .env file, and then execute `npm run migration:run` to create the example database tables. You also have the option to use Docker Compose for both PG Admin and PostgreSQL if desired.
9. **If you are **NOT** going to use a database**, remove the AppDataSource.initialize() statement in src/app.ts. (In this case, orm endpoint examples will crash the app, as they depend on the database).
10. For local development run `npm run dev` to start a development server with nodemon and update the swagger API docs.
11. For server deployments `npm run start` to compile the project and start a server with node.
12. Go to **[http://localhost:3000/api/v1/hello-world](http://localhost:3000/api/v1/hello-world)** to test your backend app.
13. Go to **[http://localhost:3000/api/docs/](http://localhost:3000/api/docs/)** to see the API docs using swagger, and find the other endpoint examples.

## 🛠️ Available Tools
- `npm lint` to execute eslint and lint your code.
- `npm lint:fix` to execute eslint to lint and fix your code.
- `npm prettier` to execute prettier and check style rules.
- `npm prettier:fix` to execute prettier to check and fix style rules.
- `npm test` to run tests written for your code.
- `npm test:watch` to run tests in watch mode.
- `migration:generate` to generate database migrations from changes in the project .entity files.
- `migration:run` to run the migrations and update your database.
- `migration:revert` to revert migrations done to the database.

## 👀 What you need to know

This repo includes a list of well rounded tools for local continuous integration:

- **[Prettier](https://prettier.io/)**: code formatter that removes all original styling and ensures that all outputted code conforms to a consistent style.
- **[ESLint](https://eslint.org/)**: ESLint statically analyzes your code to quickly find problems.
- **[Lint-Staged](https://github.com/okonet/lint-staged)**: Linting makes more sense when run before committing your code. So this is for lint only staged files and not the whole code base in the project.
- **[Commit-lint](https://commitlint.js.org/)**: This allow our team to add more semantic meaning to your git history. This e.g. includes type, scope or breaking changes.
- **[Husky](https://typicode.github.io/husky/#/)**: This tool supports all [Git hooks](https://git-scm.com/docs/githooks), it means that you can execute whatever you want every time some git hook were triggered by you. In this case we attached :
  - **pre-commit**: it will run eslint, which will find and try to fix whatever in your code that doesn't match with the style applied, including prettier if you didn't do it.
  - **commit-msg**: it will check your commit message, either the subject and the message (body), in order to follow the rules of [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary).
  - **pre-push**: will run unit testing via Jest, if you modify some another existing component, you will need to run tests executing an update to [snapshots](https://jestjs.io/docs/snapshot-testing) by yourself, you can achieve this running the script `npm run test -u`.

## 💻 Technologies Supported

- Node
- Express
- ESLint
- Prettier
- Husky
- Jest

[//]: # 'Contributing'

## 🤝 Contributing

Eager to contribute to this repo? Check out our
[Contribution Guidelines](./CONTRIBUTING.md)!
