module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // Fix for tslib issue
      [
        "module-resolver",
        {
          alias: {
            tslib: "tslib/tslib.es6.js",
          },
        },
      ],
    ],
  };
};
