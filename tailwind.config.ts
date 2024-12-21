import type { Config } from 'tailwindcss';
import TailwindTypography from '@tailwindcss/typography';

export default {
    content: ['./{Features,Views}/**/*.{cshtml,cs}', './src/**/*.{js,ts,vue,html}'],
    theme: {
        colors: {
            seance: {
                DEFAULT: 'var(--c-seance)',
                700: 'var(--c-seance-700)',
                600: 'var(--c-seance-600)',
                500: 'var(--c-seance-500)',
                400: 'var(--c-seance-400)',
                300: 'var(--c-seance-300)',
                200: 'var(--c-seance-200)',
                100: 'var(--c-seance-100)',
            },
            bay: '#4b4376',
            hippie: '#ae445a',
            bush: '#e8bcb9',
            bunker: '#1a1a1d',
            mine: '#2f2f32',
            abbey: '#454548',
            dust: '#5d5d5f',
            boulder: '#767678',
            mountain: '#909091',
            white: 'var(--c-white)',
            black: 'var(--c-black)',
            succes: 'var(--c-succes)',
            error: 'var(--c-error)',
            transparent: 'rgba(0,0,0,0)',
        },
        fontFamily: {
            heading: ['Asap' ],
            base: ['Asap'],
        },
        fontSize: {
            xs: ['var(--fs-xs)', { lineHeight: 'var(--lh-xs)' }],
            sm: ['var(--fs-sm)', { lineHeight: 'var(--lh-sm)' }],
            base: ['var(--fs-base)', { lineHeight: 'var(--lh-base)' }],
            lg: ['var(--fs-lg)', { lineHeight: 'var(--lh-lg)' }],
            xl: ['var(--fs-xl)', { lineHeight: 'var(--lh-xl)' }],
            '2xl': ['var(--fs-2xl)', { lineHeight: 'var(--lh-2xl)' }],
            '3xl': ['var(--fs-3xl)', { lineHeight: 'var(--lh-3xl)' }],
            '4xl': ['var(--fs-4xl)', { lineHeight: 'var(--lh-4xl)' }],
            '5xl': ['var(--fs-5xl)', { lineHeight: 'var(--lh-5xl)' }],
            '6xl': ['var(--fs-6xl)', { lineHeight: 'var(--lh-6xl)' }],
            '7xl': ['var(--fs-7xl)', { lineHeight: 'var(--lh-7xl)' }],
            '8xl': ['var(--fs-8xl)', { lineHeight: 'var(--lh-8xl)' }],
            '9xl': ['var(--fs-9xl)', { lineHeight: 'var(--lh-9xl)' }],
        },
        screens: {
            // Based on https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/#media-queries
            sm: '36rem', // 576px (Bootstrap default)
            md: '48rem', // 768px (Tailwind default)
            lg: '64rem', // 1024px (Tailwind default)
            xl: '79.875rem', // 1278px (50% width when using Windows Snap on a 2K screen)
            '2xl': '94.5rem', // 1512px (14-inch MacBook)
            '3xl': '107.25rem', // 1716px (in between 2xl and fhd)
            fhd: '120rem', // 1920px
        },
        container: {
            center: true,
            padding: {
                'DEFAULT': '1.25rem',
            },
        },
        aspectRatio: {
            landscape: '16 / 9',
            portrait: '9 / 16',
            square: '1 / 1',
            '16/10': '16 / 10',
            '4/3': '4 / 3',
            '3/4': '3 / 4',
            '3/2': '3 / 2',
            '2/3': '2 / 3',
        },
        extend: {
            fill: {
                current: 'currentColor',
            },
        },
    },
    plugins: [
        TailwindTypography
    ]
} satisfies Config;
