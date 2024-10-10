export default {
  root: "./src",
  build: {
    outDir: '../root',
    rollupOptions: {
      output: {
        entryFileNames: "assets/js/app.js",
        assetFileNames: "assets/css/[name][extname]"
      }
    },
    emptyOutDir: true,
  }
};