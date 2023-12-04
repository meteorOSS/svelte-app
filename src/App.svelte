<!-- Login.svelte -->
<script>
	import { login } from './store/userStore.js';
	import { user } from './store/userStore.js';
	let username = '';
	let password = '';
  
	function handleSubmit() {
	  login(username, password);
	}
  </script>
  
<main>
	{#if $user}
	<hd>欢迎你，{username}</hd>
	{:else}
	<form on:submit|preventDefault={handleSubmit}>
		<input type="text" bind:value={username} placeholder="用户名" />
		<input type="password" bind:value={password} placeholder="密码" />
		<button type="submit">登录</button>
	</form>
	{/if}


</main>
  