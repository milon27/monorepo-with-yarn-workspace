-   how to install library in package

```bash
yarn workspace @demo1/web add @demo1/shared@workspace:* # from workspace
yarn workspace @demo1/shared add date-fns # from npm
```

-   clean node modules

```json
{
    "all:clean": "find ./ -name node_modules -type d -exec rm -rf {} +"
}
```
