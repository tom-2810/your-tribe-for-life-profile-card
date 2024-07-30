<script>
    const handleSubmit = (event) => {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);

        fetch("/contact", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => console.log("Form successfully submitted"))
            .catch((error) => alert(error));
    };
</script>

<form
    method="POST"
    name="contact-footer"
    data-netlify="true"
    netlify-honeypot="bot-field"
    on:load={handleSubmit}
>
    <input type="hidden" name="form-name" value="contact-footer" />
    <div class="form__inputs">
        <input type="text" name="first-name" />
        <input type="text" name="last-name" />
        <input type="email" name="email" />
    </div>
</form>
