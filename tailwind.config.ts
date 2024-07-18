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
        'card-bg-1': '#99F6E4',
        'card-bg-2': '#A5F3FC',
        'card-bg-3': '#BAE6FD',
        'card-bg-4': '#BBF7D0',
        'card-bg-5': '#D9F99D',
        'card-bg-6': '#DDD6FE',
        'card-bg-7': '#FECDD3',
        'card-bg-8': '#FED7AA',
        'card-bg-9': '#FEF08A',
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
