<script>
	let like = '爱好';
	$: console.log(like);
</script>

<!-- grouped radio inputs are mutually exclusive -->
<input type="radio" bind:group={like} value="Golang" />Go
<input type="radio" bind:group={like} value="C#" />C#
<input type="radio" bind:group={like} value="Java" />Java

