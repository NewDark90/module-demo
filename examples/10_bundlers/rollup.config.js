import { terser } from "rollup-plugin-terser";

const allOutputs = ["es", "amd", "cjs", "iife", "umd", "system"]

const allBuildDefinitions = allOutputs.map(outputFormat => {
    return {
        input: './src/pi-page.js',
        output: {
            file: `./build/full/${outputFormat}/main.js`,
            format: outputFormat,
            name: 'piPage'
        }
    }
});

const allMinifiedDefinitions = allOutputs.map(outputFormat => {
    return {
        input: './src/pi-page.js',
        output: {
            sourcemap: true, //sourcemaps
            file: `./build/min/${outputFormat}/main.js`,
            format: outputFormat,
            name: 'piPage'
        }, 
        plugins: [
            terser() //minify
        ]
    }
});


export default [
    ...allBuildDefinitions,
    ...allMinifiedDefinitions
];