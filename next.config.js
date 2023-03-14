/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  env: {
    WEBSITE_TITLE: process.env.WEBSITE_TITLE,
    WEBSTE_OFFRE_1_CART_TITLE: process.env.WEBSTE_OFFRE_1_CART_TITLE,
    WEBSTE_OFFRE_1_CART_TEXT: process.env.WEBSTE_OFFRE_1_CART_TEXT,
    WEBSITE_OFFRE_2_CART_TITLE: process.env.WEBSITE_OFFRE_2_CART_TITLE,
    WEBSITE_OFFRE_2_CART_TEXT: process.env.WEBSITE_OFFRE_2_CART_TEXT,
  },
};
