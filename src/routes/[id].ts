import { getByUID, update } from '$lib/search'
import type { MeiliSearchApiError } from 'meilisearch';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
    const uid = params.id

    try {
        const meme = await getByUID(uid);
        return {
            body: { meme }
        };
    } catch (error) {
        return {
            status: 404
        }
    }
};

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request, params }) {
    let data = await request.json();
    console.log(data)
    await update(data);
    return {
        status: 200
    };
}
