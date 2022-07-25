export async function get() {
    const headers = {
        "Cache-Control": "max-age=0, s-maxage=3600",
        "Content-Type": "application/xml",
    };

    let sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="https://www.w3.org/1999/xhtml"
    xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
    <url>
		<loc>https://memefinder.ru/</loc>
		<changefreq>daily</changefreq>
		<priority>0.7</priority>
	</url>`;

    const images = await (
        await fetch(import.meta.env.VITE_API_BASE + '/images?limit=1500')
    ).json();


    images.forEach(processImage);

    function processImage(image, idx, arr) {
        sitemap = sitemap + `
                <url>
			<loc>https://memefinder.ru/${image.id}</loc>
			<changefreq>monthly</changefreq>
			<priority>0.4</priority>
		</url>`;
    }

    sitemap = sitemap + `
    </urlset>
    `

    return {
        headers,
        body: sitemap,
    };
}
