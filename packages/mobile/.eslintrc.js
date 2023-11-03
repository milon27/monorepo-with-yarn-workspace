module.exports = {
    root: true,
    extends: "@react-native",
    // ignorePatterns: [".eslintrc.js", "metro.config.js"],
    parserOptions: {
        babelOptions: {
            configFile: "./packages/mobile/babel.config.js",
        },
    },
    rules: {
        quotes: ["error", "double"],
        semi: "off",
    },
}
