import esbuild from 'esbuild';

const sharedConfig = {
  entryPoints: ['src/index.tsx'],
  bundle: true,
  outfile: 'dist/bundle.js',
  loader: {'.js': 'jsx'}
};

async function buildDev() {
  await esbuild.build({
    ...sharedConfig,
    sourcemap: true,
    minify: false,
    watch: true
  });
}

async function buildProd() {
  await esbuild.build({
    ...sharedConfig,
    sourcemap: false,
    minify: true
  });
}

module.exports = {buildDev, buildProd};
