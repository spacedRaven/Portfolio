import type { Config } from 'tailwindcss';
import TailwindTypography from '@tailwindcss/typography';

export default {
    content: ['./{Features,Views}/**/*.{cshtml,cs}', './src/**/*.{js,ts,vue,html}'],
    theme: {
        colors: {
            // Text (dark blue)
            biscay: '#0e2e63',
            // Blue
            malibu: '#8dd0ff',
            cerulean: '#015be0',
            zircon: '#f1f7ff',
            // Yellow
            rose: '#ffab90',
            // Grayscale
            black: '#000',
            white: '#fff',
            transparent: 'transparent'
        },
        fontFamily: {
            heading: ['Libre Baskerville'],
            base: ['Outfit'],
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
