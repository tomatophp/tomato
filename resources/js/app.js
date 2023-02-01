import "./bootstrap";
import "../css/app.css";
import "@protonemedia/laravel-splade/dist/style.css";

import { createApp } from "vue/dist/vue.esm-bundler.js";
import { renderSpladeApp, SpladePlugin } from "@protonemedia/laravel-splade";

const el = document.getElementById("app");

import helpers from "./helpers";
import "./choices.scss";

import TomatoRoles from "../../vendor/tomatophp/tomato-components/resources/js/components/TomatoRoles.vue";
import TomatoRepeater from "../../vendor/tomatophp/tomato-components/resources/js/components/TomatoRepeater.vue";
import TomatoColor from "../../vendor/tomatophp/tomato-components/resources/js/components/TomatoColor.vue";
import TomatoRich from "../../vendor/tomatophp/tomato-components/resources/js/components/TomatoRich.vue";
import TomatoTel from "../../vendor/tomatophp/tomato-components/resources/js/components/TomatoTel.vue";
import TomatoSelect from "../../vendor/tomatophp/tomato-components/resources/js/components/TomatoSelect.vue";
import TomatoArtisan from "../../vendor/tomatophp/tomato-components/resources/js/components/TomatoArtisan.vue";
import TomatoCode from "../../vendor/tomatophp/tomato-components/resources/js/components/TomatoCode.vue";

const Tomato = {
    install(app, options) {
        app.config.globalProperties.$helpers = helpers;
    },
};

createApp({
    render: renderSpladeApp({ el }),
    mounted() {
        this.$helpers.setDarkMode(this.$helpers.setStorage("dark"));
        this.$helpers.langSwitch(
            this.$helpers.setStorage("lang")
                ? this.$helpers.setStorage("lang").id
                : "en"
        );
    },
})
    .use(SpladePlugin, {
        max_keep_alive: 10,
        transform_anchors: false,
        progress_bar: true,
    })
    .component("TomatoRoles", TomatoRoles)
    .component("TomatoRepeater", TomatoRepeater)
    .component("TomatoColor", TomatoColor)
    .component("TomatoTel", TomatoTel)
    .component("TomatoRich", TomatoRich)
    .component("TomatoSelect", TomatoSelect)
    .component("TomatoArtisan", TomatoArtisan)
    .component("TomatoCode", TomatoCode)
    .use(Tomato)
    .mount(el);
