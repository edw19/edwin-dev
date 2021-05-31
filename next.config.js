const composePlugins = require("next-compose-plugins");
const mdxEnhanced = require("next-mdx-enhanced");
const rehypePrism = require('@mapbox/rehype-prism')

module.exports = composePlugins(
  [
    mdxEnhanced({
      layoutPath: "./templates",
      fileExtensions: ['mdx', 'md'],
      rehypePlugins: [rehypePrism]
    }),
  ],
  {
    images: {
      domains: ["images.unsplash.com"],
    }
  }
);
