/** @type {import('next').MetadataRoute.Robots} */
export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: "https://amir-htm.ir/sitemap.xml",
        host: "https://amir-htm.ir",
    };
}
