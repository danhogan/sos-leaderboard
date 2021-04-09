import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
        themes: {
            light: {
                primary: "#336799",
                secondary: "#f04a24",
                accent: colors.shades.black,
                // error: colors.red.accent3,
            },
            dark: {
                primary: "#336799",
                secondary: "#f04a24",
            },
        },
    },
});
