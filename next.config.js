/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: "/:path*",
//         destination: "https://openapi.naver.com/:path*",
//       },
//     ]
//   },
// }

module.exports = { nextConfig }
