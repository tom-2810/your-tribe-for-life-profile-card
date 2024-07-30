export const prerender = true;

console.log("yoooo?")

let origin
// import { redirect } from "@sveltejs/kit";

// export const actions = {
//   default: async ({request, cookies, url}) => {
//     const data = await request.formData();
//     // ...
//     throw redirect(307, `${url.origin}/contact`);
//   }
// };

// export const POST = async ({ request }) => {
//     const data = await request.formData();

//     throw redirect(307, `${url.origin}/contact`);
// }

export async function load({ url, params }) {
    origin = url.origin
    console.log(url.origin)

    fetch(origin + "/contact", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: {
            "form-name": "contact",
            "name": "naampie",
        },
    })
        .then(() => {
            console.log("submitted");
        })
        .catch((error) => console.log(error));
}

