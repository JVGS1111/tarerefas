import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto'],
      },
      backgroundColor: {
        white: '#fff',
        'app-bg': '#F1F5F9',
        card01: '#99F6E4',
        card02: '#A5F3FC',
        card03: '#BAE6FD',
        card04: '#BBF7D0',
        card05: '#D9F99D',
        card06: '#DDD6FE',
        card07: '#FECDD3',
        card08: '#FED7AA',
        card09: '#FEF08A',
        input: '#CBD5E1',
        red: '#DC2626',
      },
      colors: {
        text: '#475569',
        title: '#1E293B',
        placeholder: '#64748B',
        red: '#DC2626',
      },
      maxWidth: {
        app: '500px',
      },
      minWidth: {
        button: '6.25rem',
      },
    },
    data: {
      checked: 'ui~="checked"',
    },
  },
  plugins: [],
}
export default config
