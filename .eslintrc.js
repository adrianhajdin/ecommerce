module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier',  'simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'prettier/prettier': [
      'warn',
      {
        semi: false,
        endOfLine: 'auto',
        requirePragma: false,
        insertPragma: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'no-console': 'off',
  },
}
