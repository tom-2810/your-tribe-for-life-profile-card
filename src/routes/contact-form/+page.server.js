export const actions = {
    contact: async ({ request, url }) => {

        const rawFormData = await request.formData();

        console.log(rawFormData)

        let urlSearchParams = new URLSearchParams(rawFormData)
        let formData = new FormData()

        formData.append("form-name", urlSearchParams.get("form-name"))
        formData.append("bot-field", urlSearchParams.get("contact"))
        formData.append("first-name", urlSearchParams.get("first-name"))
        formData.append("last-name", urlSearchParams.get("last-name"))
        formData.append("email", urlSearchParams.get("email"))
        // formData.append("subject", `[%{formName}] ${urlSearchParams.get("first-name")} - %{submissionId}`)

        // console.log(new URLSearchParams(formData).toString())

        try {
            const response = await fetch(`${url.origin}/contact`, {
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