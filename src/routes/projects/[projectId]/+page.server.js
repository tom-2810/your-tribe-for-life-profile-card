import { createClient } from "$lib/prismicio"

/** @type {import('./$types').PageServerLoad} */
export async function load({fetch, request, params}){

    let project = 'monwest'

    if (params.projectId) project = params.projectId

    const client = createClient({fetch, request})

    const document = await client.getByUID('project', project)

    return document.data
}