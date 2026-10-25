import { defineConfig } from "vite";

export default defineConfig({
  // Relative assets work both on GitHub project Pages and in the Tauri bundle.
  base: "./",
  server: {
    port: 5173,
    strictPort: true,
  },
  clearScreen: false,
});
