// @ts-check
import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintPluginZodX from 'eslint-plugin-zod-x';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginZodX.configs.recommended,
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
);
