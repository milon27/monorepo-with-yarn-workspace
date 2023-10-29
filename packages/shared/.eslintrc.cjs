module.exports = {
    ...require("./src/lint/eslint.node.cjs"),
    parserOptions: {
        project: "./packages/shared/tsconfig.json", // this will defined on project label
    },
    ignorePatterns: ["node_modules"],
}
