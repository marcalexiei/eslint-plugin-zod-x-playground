// @ts-check
import eslint from '@eslint/js';
import eslintPluginZodMini from 'eslint-plugin-zod-mini';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
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
    ...eslintPluginZodMini.configs.recommended,
    files: ['src/**'],
  },
  {
    // `z.custom()` without arguments also lacks an error message, so disable
    // `require-error-message` here to isolate the `no-empty-custom-schema` error.
    files: ['src/rules-namespace/no-empty-custom-schema.ts'],
    rules: {
      'zod-mini/require-error-message': ['off'],
    },
  },
  {
    files: ['src/rules-namespace/consistent-import-source.ts'],
    rules: {
      'zod-mini/consistent-import-source': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/consistent-object-schema-type.ts'],
    rules: {
      'zod-mini/consistent-object-schema-type': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/consistent-schema-output-type-style.ts'],
    rules: {
      'zod-mini/consistent-schema-output-type-style': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/no-conflicting-checks.ts'],
    rules: {
      'zod-mini/no-conflicting-checks': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/no-transform-in-record-key.ts'],
    rules: {
      'zod-mini/no-transform-in-record-key': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/no-unknown-schema.ts'],
    rules: {
      'zod-mini/no-unknown-schema': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/no-unnecessary-readonly.ts'],
    rules: {
      'zod-mini/no-unnecessary-readonly': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/prefer-tuple-over-array-length.ts'],
    rules: {
      'zod-mini/prefer-tuple-over-array-length': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/prefer-string-length-over-min-max.ts'],
    rules: {
      'zod-mini/prefer-string-length-over-min-max': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/prefer-map-set-size-over-min-max.ts'],
    rules: {
      'zod-mini/prefer-map-set-size-over-min-max': ['error'],
    },
  },
  {
    files: ['src/rules-namespace/schema-error-property-style.ts'],
    rules: {
      'zod-mini/schema-error-property-style': ['error'],
    },
  },
);
