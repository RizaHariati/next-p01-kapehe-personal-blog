import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "wfzsx0vt",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-07-08",
  basePath: "/admin",
  plugins: [deskTool()],
  // schema: {
  //   types: schemaTypes,
  // },
});

export default config;
