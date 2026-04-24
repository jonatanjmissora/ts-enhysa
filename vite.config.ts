import { defineConfig } from "vite"
import { devtools } from "@tanstack/devtools-vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import viteTsConfigPaths from "vite-tsconfig-paths"
import netlify from "@netlify/vite-plugin-tanstack-start"

import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
	base: "/",
	build: {
		outDir: "dist",
	},
	plugins: [
		devtools(),
		viteTsConfigPaths({
			projects: ["./tsconfig.json"],
		}),
		tailwindcss(),
		tanstackStart(),
		netlify(),
		viteReact(),
	],
})
