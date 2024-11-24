/* 
    http-proxy-middlewar 1.0.0 版本前的写法，现在已经不适用
*/

// const proxy = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     proxy("/api", {
//       target: "http://localhost:5000",
//       changeOrigin: true,
//       pathRewrite: { "^/api": "" },
//     })
//   );
// };

/* 
    http-proxy-middlewar 1.0.0 版本及后面版本的写法，createProxyMiddleware
*/
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:5000", // 目标服务器地址（能返回数据的服务器地址）
      changeOrigin: true, // 控制服务器是否改变原始请求头中的host字段，为true时，将host字段改为目标服务器地址，为false时，host字段为请求服务器的地址
      pathRewrite: { "^/api": "" }, // 重写路径，将/api替换成空字符串
    })
  );
};
