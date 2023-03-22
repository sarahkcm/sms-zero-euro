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
    WEBSITE_EMAILJS_PUBLICKEY: process.env.WEBSITE_EMAILJS_PUBLICKEY,
    WEBSITE_EMAILJS_SERVICE: process.env.WEBSITE_EMAILJS_SERVICE,
    WEBSITE_EMAILJS_TEMPLATE1: process.env.WEBSITE_EMAILJS_TEMPLATE1,
    WEBSITE_EMAILJS_TEMPLATE2: process.env.WEBSITE_EMAILJS_TEMPLATE2,
  },
};
