# About the proejct

Simple project aims to help users get things done faster by building easy-to-use
softwares.

# Monorepo

This repository uses lerna to manage packages.
here are some commands you might use often.

```bash
lerna bootstrap
```

Run npm install in all pacakges.

```bash
lerna run {script name}
```

Run npm script named {script name} in all packages, if there is any.

```bash
lerna publish
```

Publish all packages.

```bash
$ lerna add {package}
```

Add a package named {package} to the packages.

```bash
$ lerna clean
```

Remove the node_modules directory from all packages.

```
lerna create {name} {location}

```

Create a new lerna-managed package

For more information, see [Lerna's documentation](https://github.com/lerna/lerna)
