import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import jest from "eslint-plugin-jest";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"],
    ignores: [ "**/*.config.js"],
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { globals: globals.browser },
    rules: {
			"no-unused-vars": "error",
			"no-undef": "error",
		}
  },

  {
    // update this to match your test files
    files: ['**/*.spec.js', '**/*.test.js'],
    ...jest.configs["flat/recommended"]
  },
]);