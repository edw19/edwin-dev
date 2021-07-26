const prefixEdwinDevAssets =
  process.env.NODE_ENV === "production" ? "/edwin-dev" : "";

module.exports = { prefixEdwinDevAssets };
