// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
    rules: {
        'vue/max-attributes-per-line': 'off',
        'vue/no-multiple-template-root': 'off',
        'vue/html-self-closing': 'off',
        'vue/multi-word-component-names': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts'],
            },
        },
    },
});