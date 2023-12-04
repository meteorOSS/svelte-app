<script>
	// import Countdown from "./Countdown.svelte";
	import DomBind from "./DomBind.svelte";
	import CustomizeEvent from "./event/CustomizeEvent.svelte";
	import AwaitBlockDemo from "./compent/AwaitBlockDemo.svelte";
	// 当CustomizeEvent组件中的completed触发时为true
	let eventCall = false;
</script>

<main>
	<!-- <Countdown countdwon={10}/> -->
	<DomBind></DomBind>
	<CustomizeEvent on:complted={()=>{
		eventCall=true
	}}></CustomizeEvent>
	{#if eventCall}
	<h1>已触发complted事件</h1>
	{/if}
	<AwaitBlockDemo></AwaitBlockDemo>
</main>