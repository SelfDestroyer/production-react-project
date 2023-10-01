import type webpack from 'webpack'
import { type IBuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'

export default ({ config }: { config: webpack.Configuration }): webpack.Configuration => {
  const paths: IBuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }
  config?.resolve?.modules?.push(paths.src)
  config?.resolve?.extensions?.push('.ts', '.tsx')

  // modify storybook's file-loader rule to avoid conflicts with your inline svg
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const svgRule = config.module.rules.find(rule => typeof rule.test.test === 'function' && rule.test.test('.svg'))
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  svgRule.test = new RegExp(svgRule.test.source.replace('svg|', ''))

  config?.module?.rules?.push(buildSvgLoader())
  config?.module?.rules?.push(buildCssLoader(true))

  return config
}
