import { createClient } from "$lib/prismicio"

/** @type {import('./$types').PageServerLoad} */
export async function load({fetch, request, params}){

    let topic = 'monwest'

    if (params.topicUid) topic = params.topicUid

    const client = createClient({fetch, request})

    const document = await client.getByUID('topic', topic)

    return document.data
}