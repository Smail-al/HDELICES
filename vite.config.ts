import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  server: {
    host: true, // Expose to all network interfaces
    port: 5173, // Default Vite port
  },
  base: "./", // Assure que les chemins sont relatifs
  build: {
    outDir: "dist", // Dossier de sortie pour Netlify
    assetsDir: "assets", // Structure d'assets
  },
});
