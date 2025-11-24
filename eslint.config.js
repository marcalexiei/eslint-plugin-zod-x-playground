// @ts-check
import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintPluginZodX from 'eslint-plugin-zod-x';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    ...eslintPluginZodX.configs.recommended,
    rules: {
      ...eslintPluginZodX.configs.recommended.rules,
      'zod-x/schema-error-property-style': ['error'],
    },
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.js'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['src/rules-namespace/consistent-import-source.ts'],
    rules: {
      'zod-x/consistent-import-source': ['error'],
    },
  },
  {
    files: ['src/rules-named/*.ts'],
    rules: {
      'zod-x/prefer-namespace-import': ['off'],
    },
  },
);
