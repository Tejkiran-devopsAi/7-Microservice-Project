import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    host: "0.0.0.0",
    port: 5173,

    allowedHosts: [
      "k8s-microser-microser-504c967287-1714564939.us-east-1.elb.amazonaws.com"
    ],

    hmr: false,

    proxy: {
      "/api/auth": {
        target: "http://auth-service:8081",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/auth/, ""),
      },

      "/api/catalog": {
        target: "http://catalog-service:8082",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/catalog/, ""),
      },

      "/api/inventory": {
        target: "http://inventory-service:8083",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/inventory/, ""),
      },

      "/api/orders": {
        target: "http://order-service:8084",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/orders/, ""),
      },

      "/api/payments": {
        target: "http://payment-service:8085",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/payments/, ""),
      },

      "/api/notifications": {
        target: "http://notification-service:8086",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/notifications/, ""),
      },

      "/api/analytics": {
        target: "http://analytics-service:8087",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/analytics/, ""),
      },
    },
  },
});