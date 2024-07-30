import { CONTACT_KEY } from '$env/static/private';

export const prerender = true;

export const load = async ({ request }) => {
    console.log("requesting with: " + request.key)
    console.log("looking for: " + CONTACT_KEY)

    console.log("equal keys: " + request.key == CONTACT_KEY)
}