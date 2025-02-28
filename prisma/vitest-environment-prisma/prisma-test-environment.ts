import { Environment } from "vitest/environments";

export default <Environment>{
  name: "prisma",
  async setup() {
    console.log("Setup environment: prisma");

    return {
      async teardown() {
        console.log("Teardown environment: prisma");
      },
    };
  },
  transformMode: "ssr", // Ou "web"
};
