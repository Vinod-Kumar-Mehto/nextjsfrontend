const languages = [
  { code: "de", name: "German" },
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "it", name: "Italian" },
  { code: "pt", name: "Portuguese" },
  { code: "ja", name: "Japanese" },
  { code: "pl", name: "Polish" },
  { code: "ko", name: "Korean" },
  { code: "ru", name: "Russian" },
  { code: "zh", name: "Chinese" },
];

const paths = [
  "",
  "/imagetotext",
  "/pdftoword",
  "/pdftoimage",
  "/pdftoexcel",
  "/imagetopdf",
  "/wordtopdf",
  "/faq",
  "/about",
];

const generateSitemap = () => {
  return languages
    .map((lang) => {
      return paths.map((path) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${
          lang.code === "en" ? "" : `/${lang.code}`
        }${path}`,
        lastModified: new Date(2024, 7, 11),
        alternates: {
          languages: languages.reduce((acc, l) => {
            acc[l.code] = `${process.env.NEXT_PUBLIC_BASE_URL}${
              l.code === "en" ? "" : `/${l.code}`
            }${path}`;
            return acc;
          }, {}),
        },
      }));
    })
    .flat();
};

// Default export for the sitemap
export default async function sitemap() {
  const sitemapData = generateSitemap();
  return sitemapData;
}
