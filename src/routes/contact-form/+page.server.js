export const actions = {
    contact: async ({ request, params, url }) => {
        let success;

        const formData = await request.formData();
        // console.log(formData)
        console.log("contact form")

        try {
            const response = await fetch(`https://tom-personal-card.netlify.app/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(formData).toString()
            });
            console.log("posted")
            const data = await response.text();

            console.log(data)

            if (response.status !== 200)
                return { success: false };

            console.log("done action")
            return { success: true };
        } catch (err) {
            console.log('error: ', err);
            return { success: false };
        }
    }
}