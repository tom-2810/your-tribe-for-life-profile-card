export const actions = {
    contact: async ({ request, url }) => {
        const formData = await request.formData();

        try {
            await fetch(`http://localhost:5173/hidden-contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(formData).toString()
            });

            return { success: true };
        } catch (err) {
            console.log('error: ', err);

        }
    }
};