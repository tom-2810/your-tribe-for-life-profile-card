<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
</script>

<section>
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

	<input
	       type="text"
	       name="first-name"
		placeholder="First name"
		value={$page?.form?.firstName || null}
	/>

	<input
		class="lato-regular"
		type="text"
		name="last-name"
		placeholder="Last name"
		aria-label="Enter last name."
		value={$page?.form?.lastName || null}
	/>

	<input class="submit" type="submit" value="Apply Now!" />
</form>
		
</section>