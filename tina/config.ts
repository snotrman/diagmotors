import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        match: {
          exclude: "_index.md", // Ensures `_index.md` is not included
        },
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "rich-text", name: "body", label: "Body", isBody: true, parser: { type: "markdown", skipEscaping: "all" } },
        ],
      },
      {
        name: "offers",
        label: "Offers",
        path: "content/offers",
        // match: {
        //   exclude: "_index.md", // Ensures `_index.md` is not included
        // },
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "rich-text", name: "body", label: "Body", isBody: true, parser: { type: "markdown", skipEscaping: "all" } },
        ],
      },
      {
        name: "about",
        label: "About",
        path: "content/about",
        // match: {
        //   exclude: "_index.md", // Ensures `_index.md` is not included
        // },
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "rich-text", name: "body", label: "Body", isBody: true, parser: { type: "markdown", skipEscaping: "all" } },
        ],
      },
      {
        name: "contact",
        label: "Contact",
        path: "content/contact",
        // match: {
        //   exclude: "_index.md", // Ensures `_index.md` is not included
        // },
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "rich-text", name: "body", label: "Body", isBody: true, parser: { type: "markdown", skipEscaping: "all" } },
        ],
      },
      {
        name: "home",
        label: "Home",
        path: "content",
        match: {
          include: "*", // Ensures only markdown files at root level
          exclude: "/**/**", // Prevents conflicts with posts and docs
        },
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "rich-text", name: "body", label: "Body", isBody: true, parser: { type: "markdown", skipEscaping: "all" } },
        ],
      },
      {
        name: "docs",
        label: "Docs",
        path: "content/docs",
        match: {
          exclude: "_index.md", // Ensures docs/_index.md isn't mistakenly included
        },
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "rich-text", name: "body", label: "Body", isBody: true, parser: { type: "markdown", skipEscaping: "all" } },
        ],
      },
    ],
  }

});
