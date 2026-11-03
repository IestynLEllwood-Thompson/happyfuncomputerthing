import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "/happyfuncomputerthing/",
    server: {
        cors: true,
    },
    build: {
        target: "esnext",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                navbar: resolve(__dirname, "navbar.html"),
                entertainment: resolve(__dirname, "entertainment.html"),
                education: resolve(__dirname, "education.html"),
                about: resolve(__dirname, "about.html"),
                scuba: resolve(__dirname, "scuba.html"),
                staff: resolve(__dirname, "staff.html"),
            },
        },
    },
})
