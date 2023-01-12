export default {
  '*.{js,ts}': 'eslint --fix',
  '**/*.ts?(x)': () => 'pnpm check',
}
