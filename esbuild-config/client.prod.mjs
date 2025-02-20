import * as esbuild from 'esbuild';

try {
  await esbuild.build({
    entryPoints: ['src/client/index.tsx'],
    bundle: true,
    sourcemap: false,
    minify: true,
    outfile: 'public/static/bundle.js',
    define: {
      'process.env.NODE_ENV': "'production'"
    }
  });

  console.log('Client bundled successfully for production!');
} catch (error) {
  console.error('An error occurred during bundling:', error);
  process.exit(1);
}
