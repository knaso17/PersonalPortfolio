module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Krista Naso Personal Portfolio`,
        short_name: `KN Portfolio`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        description: `The personal portfolio of Krista Naso a Front End Developer from the Chicago Area. View projects, recommendations, and proficient technologies!`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat`, //basic font
          `Prosto One` // logo font/ headers
        ],
        display: 'swap'
      }
    },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};
