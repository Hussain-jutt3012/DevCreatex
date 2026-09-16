export default function manifest() {
  return {
    name: "DevCreatex | Digital Solutions",
    short_name: "DevCreatex",
    description: "Web Development, AI & Digital Solutions",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon/BLUB.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon/BLUB.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}