import { JSDOM } from 'jsdom'


export const actions = {
    contact: async ({ request, params }) => {
        const formData = await request.formData();

        // let formHTML = new JSDOM('<form></form>');

        formData.append("name", "Pomegranate");

        console.log(formData)

        let htmlStr = `<div><form name="Contact" data-netlify="true" method="POST"><input type="hidden" name="form-name" value="Contact" /><input type="text" name="name" /><button>Send</button></form></div>`;

        let dom = new JSDOM(htmlStr);

        dom.window.document.querySelector("form").submit()

        return {
            success: true
        }
    }

}
