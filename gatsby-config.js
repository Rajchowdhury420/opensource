module.exports = {
  siteMetadata: {
    title: "Globo.com - Open Source",
    description: "Globo.com - Por que ❤️ Open Source?",
    author: "Globo.com",
    url: "https://opensource.globo.com",
    images: {
      opengraph: {
        type: "image/png",
        url: "images/opengraph.png",
        width: 1200,
        height: 630,
      },
    },
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-json",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Globo.com - Open Source",
        short_name: "Globocom OpenSource",
        start_url: "/",
        background_color: "#1B3556",
        theme_color: "#1B3556",
        display: "minimal-ui",
        icon: "src/images/app-icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./data/",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-35544505-1",
      },
    },
  ],
}
