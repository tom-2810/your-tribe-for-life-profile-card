<script>
    let name;
    let email;

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     const myForm = event.target;
    //     const formData = new FormData(myForm);

    //     fetch("/", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //         body: new URLSearchParams(formData).toString(),
    //     })
    //         .then(() => navigate("/thank-you/"))
    //         .catch((error) => alert(error));
    // };
</script>

<h1>Contact</h1>

<form name="netlify-form-example" method="POST" netlify-honeypot="bot-field" data-netlify="true">
    <input type="hidden" name="form-name" value="netlify-form-example" />
    <label for="name">Name</label>
    <input name="name" id="name" required placeholder="Name" type="text" />
    <label for="email">Email</label>
    <input name="email" id="email" required placeholder="Email" type="email" />
    <label for="message">Message</label>
    <input name="message" id="message" required placeholder="Message" type="text" />
    <input type="submit" value="Submit" />
  </form>

<style>
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 20rem;
        position: relative;
        top: 10rem;
        margin-inline: auto;
    }
    label {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        font-size: 0.9rem;
    }
    label:last-of-type {
        position: absolute;
        left: -120vw;
    }
    input {
        font-size: 1rem;
        padding: 0.3rem;
    }
    textarea {
        font-size: 1rem;
        min-height: 8rem;
        resize: vertical;
    }
</style>
