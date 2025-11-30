//@ts-check
import { build, context } from "esbuild";

const isWatch = process.argv.includes("--watch");

const importsMap = {
    'react': 'window.mcraft.React',
    'react/jsx-runtime': 'window.mcraft.ReactJsxRuntime',
    'react-dom': 'window.mcraft.ReactDOM',
    'three': 'window.THREE'
}

/** @type {import('esbuild').BuildOptions} */
const buildOptions = {
    entryPoints: ["src/mod.tsx", "src/three.ts"],
    outdir: "dist",
    bundle: true,
    sourcemap: false,
    logLevel: "info",
    format: 'cjs',
    target: "es2020",
    banner: {
        js: `const module = {};const require = (path) => {\nreturn ({ ${Object.entries(importsMap).map(([key, value]) => `"${key}": ${value}`).join(', ')} })[path];\n};`
    },
    footer: {
        js: `export { worldReady };`
    },
    external: ["react", "react-dom", "three"],
    loader: {
        '.png': 'dataurl',
        '.jpg': 'dataurl',
        '.webp': 'dataurl',
        '.svg': 'dataurl',
    },
};

if (isWatch) {
    const ctx = await context(buildOptions);
    await ctx.watch();
    console.log("Watching for changes...");
} else {
    await build(buildOptions);
}
