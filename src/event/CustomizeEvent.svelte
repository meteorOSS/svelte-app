<script>

    import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";
    
    const dispatch = createEventDispatcher();

    onMount(()=>{
        // 三秒钟之后送出 completed 事件
        setTimeout(() => {
            dispatch('completed',{lastTime:3000})
        }, 7000);
    })
</script>