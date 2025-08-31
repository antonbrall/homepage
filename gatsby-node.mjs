import path from "path";

export async function createPages({ graphql, actions }) {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          fields {
            source
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const templates = {
    blog: path.resolve(`./src/templates/blog-post.js`),
    projects: path.resolve(`./src/templates/project-post.js`),
    recipes: path.resolve(`./src/templates/recipe-post.js`),
    halbprivateupdates: path.resolve(`./src/templates/update-post.js`),
  };

  result.data.allMdx.nodes.forEach((node) => {
    const source = node.fields.source;
    const slug = node.frontmatter.slug;
    const component = templates[source];

    // Ensure we have a template and a slug for this node before creating a page
    if (component && slug) {
      createPage({
        path: `/${source}/${slug}`,
        component: `${component}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          id: node.id,
        },
      });
    }
  });
}
