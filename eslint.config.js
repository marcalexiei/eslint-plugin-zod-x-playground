// @ts-check
import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintPluginZod from 'eslint-plugin-zod';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    ...eslintPluginZod.configs.recommended,
    rules: {
      ...eslintPluginZod.configs.recommended.rules,
      'zod/no-unknown-schema': ['error'],
      'zod/schema-error-property-style': ['error'],
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
      'zod/consistent-import-source': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/consistent-object-schema-type.ts'],
    rules: {
      'zod/consistent-object-schema-type': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/array-style-method.ts'],
    rules: {
      'zod/array-style': ['error', { style: 'method' }],
    },
  },
  {
    files: ['src/rules-named/*.ts'],
    rules: {
      'zod/prefer-namespace-import': ['off'],
    },
  },
);
