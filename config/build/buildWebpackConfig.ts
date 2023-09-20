import {IBuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";

import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";

export function buildWebpackConfig(options: IBuildOptions): webpack.Configuration {
    const {mode, paths} = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        }, module: {
            rules: buildLoaders(),
        }, resolve: buildResolvers(),
        plugins: buildPlugins(options)
    }
}
