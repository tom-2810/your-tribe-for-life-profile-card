// export const actions = {
//     handleSubmit: async ({ request, params }) => {
//         // console.log(await request.formData())
//         // const myForm = event.target;
//         const formData = await request.formData();

//         fetch("/", {
//             method: "POST",
//             headers: { "Content-Type": "application/x-www-form-urlencoded" },
//             body: new URLSearchParams(formData).toString(),
//         })
//             .then(() => navigate("/thank-you/"))
//             .catch((error) => alert(error));
//     }
// }
