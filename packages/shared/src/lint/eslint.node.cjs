module.exports = {
    env: {
        node: true,
        es2021: true,
    },
    extends: [
        "airbnb-base",
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        // project: "./tsconfig.json", // this will defined on project label
    },
    // ignorePatterns: ["node_modules", "resources", "dist", "drizzle.config.ts", "vitest.config.ts"], // this will defined on project label
    plugins: ["@typescript-eslint", "prettier"],
    rules: {
        "prettier/prettier": [
            "warn",
            {
                endOfLine: "auto",
            },
        ],
        "no-console": "warn",
        "linebreak-style": "off",
        "no-nested-ternary": "off",
        radix: "off",
        "no-underscore-dangle": "off",
        "import/prefer-default-export": "off",
        "class-methods-use-this": "off",
        "@typescript-eslint/dot-notation": "off",
        "require-await": ["error"],
        "@typescript-eslint/no-floating-promises": ["error"],
        "no-await-in-loop": ["off"],
        "import/no-cycle": "warn",
        "no-restricted-syntax": "off",
        "global-require": ["warn"],
    },
}

// if you change any rule then reload the window
