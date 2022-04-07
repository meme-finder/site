import { search } from '$lib/search'

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ url }) {
    const q = url.searchParams.get('q');
    const s = await search(q);
    return {
        body: s
    };
};
