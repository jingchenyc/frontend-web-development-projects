import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/frontend-web-development-projects/final/tutor-website/dist/",
  plugins: [react()],
});
