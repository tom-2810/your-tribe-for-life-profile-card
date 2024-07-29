<script>
    let name;
    let formSucces = false;

    const handleSubmit = (event) => {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);

        fetch("/contact", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => (formSucces = true))
            .catch((error) => alert(error));
    };
</script>

<h1>Contact</h1>

<form
    name="contact"
    method="POST"
    netlify-honeypot="bot-field"
    data-netlify="true"
    on:submit={handleSubmit}
    action="/thanks"
>
    <input type="hidden" name="form-name" value="contact" />
    <input
        type="hidden"
        name="subject"
        value="[%{'{'}formName{'}'}] {name} - %{'{'}submissionId{'}'}"
    />
    <label
        >Your Name: <input
            bind:value={name}
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
    <label>
        Don’t fill this out if you’re human: <input name="bot-field" />
    </label>
    <div class="status">
        {#if formSucces}
            <button disabled>Bericht verzonden</button>
            <span>🎉</span>
        {:else}
            <button>Verstuur bericht</button>
        {/if}
    </div>
</form>

<style>
    .status {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    button {
        padding: 0.5rem;
    }
    span {
        font-size: 4rem;
    }
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
