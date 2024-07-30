<script>
    import { enhance } from "$app/forms";

    export let form;

</script>

<h1>Contact form</h1>

<form
		action="?/contact"
		method="POST"
		name="contact"
		enctype="multipart/form-data"
		netlify
		netlify-honeypot="bot-field"
		use:enhance
	>
    <input type="hidden" name="form-name" value="contact" />
    <label
        >Your Name: <input
            type="text"
            name="name"
            placeholder="Jan Janssen"
        /></label
    >
    <label
        >Your Email: <input
            type="email"
            name="email"
            placeholder="jan.janssen@mail.nl"
        /></label
    >
    <label
        >Message: <textarea
            name="message"
            placeholder="Hey Tom! 

Kan je me helpen met het 
maken van een website voor... "
        /></label
    >
    <button>Verstuur bericht</button>

    {#if form?.success}
        success
    {/if}
</form>

<style>
    .card {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: white;
        padding: 3rem;
        max-width: 26rem;
        border-radius: 12px;
        text-align: center;
    }
    h1 {
        font-size: 2rem;
        color: rgb(40, 40, 40);
    }
    p {
        font-size: 1.2rem;
        color: rgba(40, 40, 40);
    }
    .status {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    button {
        padding: 0.5rem;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 27rem;
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
