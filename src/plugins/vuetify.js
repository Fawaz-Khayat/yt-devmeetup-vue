import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

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
