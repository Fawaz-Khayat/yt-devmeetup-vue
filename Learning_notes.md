To use custom theme, define the custom colors in src/plugins/vuetify.js
The following code defines custom colors:

```
Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken2,
    secondary: colors.grey.lighten1,
    accent: colors.red.accent2,
    error: colors.red.accent4,
    info: colors.blue.lighten1,
    success: colors.green.lighten2,
    warning: colors.amber.darken2
  }
})

```