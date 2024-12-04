import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
export default defineConfig({
  server: {
    https: {
      key: "key.pem",
      cert: "cert.pem",
    }
  },
  plugins: [react()],
  //resolve: {
  //  alias: {
  //    "/src": "/src",
  //    "app": "/src/app",
  //    "website": "/src/website",
  //  },
  //},
});
