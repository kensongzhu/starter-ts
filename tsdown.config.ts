import type { UserConfig } from 'tsdown'
import { defineConfig } from 'tsdown'

const config: UserConfig = defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  exports: true,
  attw: {
    enabled: 'ci-only',
    profile: 'esm-only',
  },
  publint: true,
})

export default config
