// require .env file data for sanity
//require("dotenv").config({
// path: `.env.${process.env.NODE_ENV}`,
//})

module.exports = {
  siteMetadata: {
    title: `Jenelle's Gallery 2020`,
    description: `The best of the best`,
    author: `John De Costa`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "qv9z0tsa",
        dataset: "production",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gallery-Jenelle`,
        short_name: `gallerysamoJenelle`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/JA_Avatar_400x400.png`, // This path is relative to the root of the site.
      },
    },
   {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [ 
            `Roboto \:300i, 400, 700i`,
             `Open Sans \:400, 700`,
        ],
        display: 'swap'
      }
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Roboto`,
    //         variants: [`Light 300 Italic`, `Regular 400`, `Bold 700 Italic`],
    //       },
    //       {
    //         family: `Open Sans`,
    //         variants: [`400`, `700`],
    //       },
    //     ],
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
