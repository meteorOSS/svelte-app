<script>
	// props
	// if block
	// $
    // each
	import {afterUpdate, onDestroy, onMount} from 'svelte';

    // default prop is 10
	export let countdwon = 10;
	let timer = null;
	
	// 00:XX
	// $ 表示: 当变量coutdown更新时重新运行
	$: dipslayValue = `00:${countdwon.toString().padStart(2,0)}`

	onMount(()=>{
		timer = setInterval(()=>{
			countdwon -= 1;
		},1000)
	});

	afterUpdate(()=>{
		if(countdwon === 0){
			if(timer){
				clearInterval(timer);
			}
		}
	});

	onDestroy(()=>{
		if(timer){
			clearInterval(timer);
		}
	});

    const array = [1,2,3,4,5]


</script>

<h1>{dipslayValue}</h1>
{#if countdwon===0}
<h1>时间到了</h1>
{/if}

{#each array as num}
<span>{num}</span>
{/each}
<style>

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 78px;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>