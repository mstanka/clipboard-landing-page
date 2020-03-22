// const purgecss = require("@fullhuman/postcss-purgecss")({
//   // Specify the paths to all of the template files in your project
//   content: [
//     "./docs/index.html"
//   ],

//   // Include any special characters you're using in this regular expression
//   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
// });
  
// module.exports = {
//   plugins: [
//     require("tailwindcss"),
//     require("autoprefixer"),
//     ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
//   ]
// };

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("@fullhuman/postcss-purgecss")({
      content: [
        './docs/index.html'
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
}
