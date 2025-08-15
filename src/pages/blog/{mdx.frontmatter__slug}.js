import * as React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import BookSlide from "../../components/bookSlide";

const BlogPost = ({ data, children }) => {
  const components = {
    BookSlide: (props) => (
      <BookSlide {...props} bookCover={data.mdx.frontmatter.heroImage} />
    ),
  };
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXProvider components={components}>{children}</MDXProvider>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        type
        heroImage {
          childImageSharp {
            gatsbyImageData(height: 300)
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
