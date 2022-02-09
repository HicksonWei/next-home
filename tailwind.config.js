module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundSize: {
        s400: '400% 400%'
      },
      backgroundImage: {
        'profile-pattern': "url('/white-waves.png')",
        'works-pattern': "url('/gravel.png')"
      }
    }
  },
  plugins: []
}
