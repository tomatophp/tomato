import { defineConfig, loadEnv } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import { homedir } from "os";
import { resolve } from "path";
import fs from "fs";

export default ({ mode }) => {
    process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

    function serverData(host){
        /*
        Use only if using laravel-valet to manage server
         */
        let keyPath = resolve(homedir(), `.config/valet/Certificates/${host}.key`);
        let certificatePath = resolve(homedir(), `.config/valet/Certificates/${host}.crt`);

        if (!fs.existsSync(keyPath)) {
            return {};
        }

        if (!fs.existsSync(certificatePath)) {
            return {};
        }

        return {
            hmr: { host },
            host,
            https: {
                key: fs.readFileSync(keyPath),
                cert: fs.readFileSync(certificatePath),
            },
        };
    }

    return defineConfig({
        resolve:{
            alias:{
            },
        },
        plugins: [
            laravel({
                input: "resources/js/app.js",
                ssr: "resources/js/ssr.js",
                refresh: true,
            }),
            vue({
                template: {
                    transformAssetUrls: {
                        base: null,
                        includeAbsolute: false,
                    },
                },
            }),
        ],
        ssr: {
            noExternal: ["vue", "@protonemedia/laravel-splade"]
        },
        css: {
            postCss: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
        server: serverData(process.env.APP_URL.replace('https://',''))
    });
}
