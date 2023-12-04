
<!-- DOM绑定相关 -->

<script>
    function handlerClick(){
        console.log("hello world");
    }
</script>

<h1>使用 on:事件 控制dom元素行为</h1>
<button on:click={handlerClick}>button</button>
<h1>svelte自带了一些modifiers减少代码编写</h1>
<button on:click|once|preventDefault={handlerClick}>btn2</button>
