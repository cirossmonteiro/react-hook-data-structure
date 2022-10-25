import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";


export default defineConfig({
  publicDir: false,
  optimizeDeps: {
    exclude: [
      "react-app-env.d.ts"
    ]
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "./index.ts"),
      name: "React Hook Data structure",
      formats: ["es"],
      fileName: (format) => `react-hook-data-structure.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        },
      },
    },
  },
});
