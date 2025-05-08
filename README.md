# Location api

This api use for fetching location for developer use only

## For Dev

0. Setup CLIs For MacOS M-version

### Download and install nvm:

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash`

### in lieu of restarting the shell

`\. "$HOME/.nvm/nvm.sh"`

### Download and install Node.js:

`nvm install 22`

### Verify the Node.js version:

`node -v` # Should print "v22.14.0".
`nvm current` # Should print "v22.14.0".

### Download and install pnpm:

`corepack enable pnpm`

### Verify pnpm version:

`pnpm -v`

1. Install dependencies:

```sh
pnpm i
```

2. Duplicate `.env.example` file at the project root and rename it to `.env`:

```sh
cp .env.example .env
```

3. Start dev server:

```sh
pnpm dev
```
