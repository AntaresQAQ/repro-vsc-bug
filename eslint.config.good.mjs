import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";
// import prettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig(
    { ignores: ["node_modules/**", "dist/**", ".yarn/*", ".pnp.*", "eslint.config.mjs"] },
    tseslint.configs.recommendedTypeChecked,
    // prettierRecommended,
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
            parserOptions: {
                project: "tsconfig.json",
            },
        },
        rules: {
            "@typescript-eslint/no-unused-vars": "error",
            // "prettier/prettier": [
            //     "error",
            //     {},
            //     {
            //         usePrettierrc: true,
            //     },
            // ],
        },
    },
);
