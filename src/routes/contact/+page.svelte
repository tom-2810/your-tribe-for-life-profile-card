<script>
    const handleSubmit = (event) => {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);

        let body = new URLSearchParams(formData);

        console.log("submitting...");

        fetch("/contact", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: body,
        })
            .then(() => (alert("verzonden")))
            .catch((error) => alert(error));
    };
</script>

<form
    method="POST"
    name="contact-footer"
    netlify
    netlify-honeypot="bot-field"
    on:submit={handleSubmit}
>
    <input type="hidden" name="form-name" value="contact-footer" />
    <div class="form__inputs">
        <input type="text" name="first-name" value="voornaam" />
        <input type="text" name="last-name" value="achternaam" />
        <input type="email" name="email" value="voornaam@gmail.com" />
    </div>
    <button>stuur</button>
</form>
