module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "body":["body"], 
        "title":["title"]
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}
