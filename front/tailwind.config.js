module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], //　実際に使われているクラスユーティリティのみビルドする。
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
