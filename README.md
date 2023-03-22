# Workout Manager Full Stack App

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Development server

### Angular Frontend
Run `nx serve angular-frontend` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### NestJS Backend
Run `nx serve nestjs-backend` for a dev server. Navigate to http://localhost:3333/. The app will automatically reload if you change any of the source files.

### Postgres Database
Run `docker-compose up` to start the database. The database will be available at http://localhost:5432/. The default username and password are `dbuser` and `dbpassword` respectively.

#### Prisma
Run `npx prisma migrate dev --name init` to initialize the database with some dummy data. Run `npx prisma studio` to open Prisma Studio.


## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
