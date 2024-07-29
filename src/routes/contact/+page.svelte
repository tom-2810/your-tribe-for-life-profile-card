<script>
    let name;
    let email;
</script>

<h1>Contact</h1>

<form
    name="contact"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-field"
    data-netlify-recaptcha="true"
>
    <label
        >Your Name: <input
            bind:value={name}
            type="text"
            name="name"
            placeholder="Jan Janssen"
            required
        /></label
    >
    <label
        >Your Email: <input
            bind:value={email}
            type="email"
            name="email"
            placeholder="jan.janssen@mail.nl"
            required
        /></label
    >
    <label
        >Message: <textarea
            name="message"
            placeholder=
"Hey Tom! 

Kan je me helpen met het 
maken van een website voor... "
            required
        /></label
    >
    <div data-netlify-recaptcha="true"></div>
    <button type="submit">Verstuur bericht</button>
    <label>
        Don’t fill this out if you’re human: <input name="bot-field" />
    </label>
    <input type="hidden" name="subject" value="Contact {name} <{email}>" />
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
