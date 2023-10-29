module.exports = {
    ...require("@mono/shared/src/lint/eslint.react.cjs"),
    parserOptions: {
        project: ["./packages/web/tsconfig.json", "./packages/web/tsconfig.node.json"], // this will defined on project label
    },
    ignorePatterns: ["node_modules", "dist"],
}
