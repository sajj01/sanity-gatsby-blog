export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60589322d83fa61196bb939c",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-tvie2sj2",
                  apiId: "6b0ad780-9286-48c1-a2a8-9885c706245f",
                },
                {
                  buildHookId: "60589322b16f0879aeaa7546",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-s8u8vdtn",
                  apiId: "e6347e13-a7f0-4ae3-9970-e4283b9cbcdd",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/sajj01/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-s8u8vdtn.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
