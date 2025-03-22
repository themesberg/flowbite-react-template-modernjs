import { appTools, defineConfig } from '@modern-js/app-tools';
import tailwindcss from '@tailwindcss/postcss';
import flowbiteReact from 'flowbite-react/plugin/modernjs';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: 'rspack', // Set to 'webpack' to enable webpack
    }),
    flowbiteReact(),
  ],
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [tailwindcss],
      },
    },
  },
});
