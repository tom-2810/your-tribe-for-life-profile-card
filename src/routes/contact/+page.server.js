import { JSDOM } from 'jsdom'


export const actions = {
    contact: async ({ request, params }) => {
        const formData = await request.formData();

        // let formHTML = new JSDOM('<form></form>');

        formData.append("form-name", "Contact");

        console.log(formData)

        new Response({
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        });

        return {
            success: true
        }
    }

}
