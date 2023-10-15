import { createClient } from "$lib/prismicio"

export async function load({fetch, request}){
    const client = createClient({fetch, request})

    const document = await client.getByUID('home', 'home', {'fetchLinks': ['project.title', 'project.hero_image', 'project.status', 'topic.title', 'topic.sub_title', 'topic.intro', 'topic.emoji']})

    return document.data
}