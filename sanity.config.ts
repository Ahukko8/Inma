import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "./sanity/schemas"

const config = defineConfig({
  projectId: "uyl44ud9",
  dataset: "production",
  title: "Inma Website",
  apiVersion: "2023-04-10",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config