/** @type {import('next').MetadataRoute.Sitemap} */
export default function sitemap() {
    const base = "https://amir-htm.ir";
    const now = new Date();

    return [
        {
            url: `${base}/`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${base}/resume`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${base}/services`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.8,
        },
        {
            url: `${base}/work`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.75,
        },
        {
            url: `${base}/contact`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.6,
        },
    ];
}
