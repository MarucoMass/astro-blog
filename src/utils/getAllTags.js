import { getCollection } from "astro:content";

export async function getAllTags () {
    const posts = await getCollection("blog");
    const tags = posts.map(post => (post.data.tags));

    return Array.from(
        new Set(tags.flat().sort())
    )
}