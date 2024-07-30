export const actions = {
    contact: async ({ request, params, url }) => {
        let success;

        const formData = await request.formData();
        // console.log(url.origin)

        await fetch(url.origin + '/contact', {
            method: "POST",
            body: "name=naampie&email=floepert99@gmail.com&message=berichtjewooowww",
            headers:
            {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then(() => (success = true))
            .catch((error) => (success = false));

        return {
            success: success
        }
    }
}