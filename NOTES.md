# Web RTC Demo Projects

This monorepo contains proof of concept webrtc technology demos built using Angular as the foundation SPA framework along with Nrwl Nx Workspaces to facilitate code reuse among the projects.

## Installing Required Tools

The following base tools are requried in order to work within this source code:

| Tool                               | URL                                    |
| ---------------------------------- | -------------------------------------- |
| Git for Windows                    | https://git-scm.com/download/win       |
| Install Latest LTS Version of Node | https://nodejs.org/en/                 |
| Visual Studio Code                 | https://code.visualstudio.com/download |

## Base Global Package Setup

The following NPM Packages are required for initial setup to be able to utilize and run this project:

```bash
npm i -g @angular/cli
npm i -g @nrwl/schematics
npm i -g nx
```

# Initial Setup of App and Some Libraries

The project was initially setup using this command:

```bash
npx create-nx-workspace webrtc-demos
nx add @angular/material
npx ng g lib material
# Created Material Module exports
npx ng g lib ui-toolbar -p=ui
npx ng g lib google
```

# Setup of Modules and Components in the Main App

Here we are going to setup the Projects Module and component with routing enabled. Didn't actually keep this in but this is an example.

```bash
npx ng g m projects --routing
npx ng g c projects
```

# Generate Components for a Library

An example project library was added above called google, we are now going to add some components:

```bash
npx ng g s datastore/datastore --project=google
npx ng g s calendar/calendar --project=google
```

# Running Projects Locally

```bash
ng serve api
```

```bash
ng serve meet-app
```
