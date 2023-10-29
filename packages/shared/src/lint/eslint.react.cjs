module.exports = {
    root: true,
    env: { browser: true, es2021: true },
    extends: [
        "airbnb",
        "airbnb-typescript",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json", "./tsconfig.node.json"],
    },
    plugins: ["react", "@typescript-eslint", "react-refresh", "prettier"],
    rules: {
        "prettier/prettier": [
            "warn",
            {
                endOfLine: "auto",
            },
        ],
        "no-console": "off",
        "linebreak-style": "off",
        "no-nested-ternary": "off",
        radix: "off",
        "no-underscore-dangle": "off",
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "react/jsx-no-constructed-context-values": "off",
        "import/no-extraneous-dependencies": "off",
        "@typescript-eslint/no-unused-expressions": "off",
        "@typescript-eslint/naming-convention": "off",
        "global-require": ["warn"],
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
}

// if you change any rule then reload the window
