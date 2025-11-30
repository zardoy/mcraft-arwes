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
    format: 'esm',
    target: "es2020",
    external: ["react", "react-dom", "three"],
    loader: {
        '.png': 'dataurl',
        '.jpg': 'dataurl',
        '.webp': 'dataurl',
        '.svg': 'dataurl',
    },
    plugins: [
        {
            name: 'inject-dependencies',
            setup(build) {
                build.onResolve({ filter: new RegExp("^(" + Object.keys(importsMap).join('|') + ")$") }, (args) => {
                    return {
                        namespace: 'inject-dependencies',
                        path: importsMap[args.path],
                    }
                });
                build.onLoad({ filter: /.*/, namespace: 'inject-dependencies' }, async (args) => {
                    return {
                        contents: `module.exports = ${args.path};`,
                        loader: 'js',
                    }
                });
            }
        }
    ]
};

if (isWatch) {
    const ctx = await context(buildOptions);
    await ctx.watch();
    console.log("Watching for changes...");
} else {
    await build(buildOptions);
}
