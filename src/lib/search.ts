import { MeiliSearch } from 'meilisearch';

const client = new MeiliSearch({
    host: 'http://127.0.0.1:7700',
    apiKey: '8137y8iucbn380hf',
});
const index = client.index('memes');

export async function search(q: string) {
    const search = await index.search(q);
    return search;
}

export async function getByUID(uid: string) {
    const doc = await index.getDocument(uid)
    return doc;
}

export async function update(meme) {
    let task = await index.updateDocuments([meme])
    return task;
}
