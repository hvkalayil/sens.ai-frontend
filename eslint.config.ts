import eslint from '@eslint/js';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
    // TypeScript + JavaScript rules
    eslint.configs.recommended,
    ...tseslint.configs.recommended,

    // Svelte rules
    ...eslintPluginSvelte.configs['flat/recommended'],

    // Prettier
    prettier,

    {
        files: ['**/*.{js,ts,svelte}'],
        languageOptions: {
            globals: {
                ...globals.browser,   // adds console, window, document, etc.
                ...globals.es2021,    // adds modern JS globals like Promise, etc.
            },
            parserOptions: {
                parser: tseslint.parser,
                extraFileExtensions: ['.svelte'],
            },
        },
        rules: {
            // Customize Svelte rules
            'svelte/no-at-html-tags': 'warn',
        },
    },

    {
        rules: {
            // General project rules
            'semi': ['error', 'always'],
            'quotes': ['error', 'single'],
        },
    },
];
