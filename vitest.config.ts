import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node", // ou 'jsdom', se for frontend
    coverage: {
      provider: "v8", // Ou 'istanbul', se preferir
      reporter: ["text", "html"],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // Mapear o alias '@' para a pasta 'src'
    },
  },
});
