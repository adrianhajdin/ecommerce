module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
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
