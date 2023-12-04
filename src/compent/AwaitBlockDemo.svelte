<script>

    let api = fetch('https://api.github.com/users/meteorOSS').then(res => res.json())


</script>

{#await api}
<span>loading...</span>
{:then response}
<img src={response.avatar_url}>
<h2>{response.name}</h2>
{:catch error}
<h1>{error}</h1>
{/await}
