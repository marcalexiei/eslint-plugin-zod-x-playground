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
);
