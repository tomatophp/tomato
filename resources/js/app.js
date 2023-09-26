import "./bootstrap";
import "../css/app.css";
import "@protonemedia/laravel-splade/dist/style.css";

import { createApp } from "vue/dist/vue.esm-bundler.js";
import { renderSpladeApp, SpladePlugin } from "@protonemedia/laravel-splade";

const el = document.getElementById("app");

import "./choices.scss";

import TomatoRepeater from "../../vendor/tomatophp/tomato-admin/resources/js/components/TomatoRepeater.vue";
import TomatoColor from "../../vendor/tomatophp/tomato-admin/resources/js/components/TomatoColor.vue";
import TomatoRich from "../../vendor/tomatophp/tomato-admin/resources/js/components/TomatoRich.vue";
import TomatoTel from "../../vendor/tomatophp/tomato-admin/resources/js/components/TomatoTel.vue";
import TomatoSelect from "../../vendor/tomatophp/tomato-admin/resources/js/components/TomatoSelect.vue";
import TomatoArtisan from "../../vendor/tomatophp/tomato-admin/resources/js/components/TomatoArtisan.vue";
import TomatoCode from "../../vendor/tomatophp/tomato-admin/resources/js/components/TomatoCode.vue";
import TomatoDraggable from "../../vendor/tomatophp/tomato-admin/resources/js/components/TomatoDraggable.vue";


createApp({
    render: renderSpladeApp({ el }),
})
    .use(SpladePlugin, {
        max_keep_alive: 10,
        transform_anchors: false,
        progress_bar: true,
    })
    .component("TomatoDraggable", TomatoDraggable)
    .component("TomatoRepeater", TomatoRepeater)
    .component("TomatoColor", TomatoColor)
    .component("TomatoTel", TomatoTel)
    .component("TomatoRich", TomatoRich)
    .component("TomatoSelect", TomatoSelect)
    .component("TomatoArtisan", TomatoArtisan)
    .component("TomatoCode", TomatoCode)
    .mount(el);
