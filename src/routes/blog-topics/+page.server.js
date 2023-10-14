import { createClient } from "$lib/prismicio"

export async function load({fetch, request}){
    const client = createClient({fetch, request})

    const topics = await client.getAllByType('topic')

    return { topics }
}