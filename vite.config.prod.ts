import {  mergeConfig } from 'vite'
import baseConfig from './vite.config.base';

export default mergeConfig(baseConfig, {
  base: '/static/',
})
