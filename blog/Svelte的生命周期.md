## Svelte的生命周期

Svelte提供了一系列的生命周期函数，允许在组件的不同阶段执行代码。这些函数可以帮助你管理组件的创建，更新与销毁。它的执行顺序为

初始化: `beforeUpdate` -> `onMount` -> `afterUpdate` 

组件更新: `beforeUpdate` -> `afterUpdate`

销毁: `onDestroy`

![生命周期](生命周期.png)

### 生命周期概览：

`onMount` 当组件首次被添加到DOM中时调用。这个函数通常用于执行初始化任务，如获取数据，设置监听器。值得注意的是，如果有回调函数，它会在 `unmount`的时调用，也就是销毁的时刻

另外 onMount 不会在服务端执行，这意味着任何依赖于浏览器内部的代码，如直接操作浏览器API，都应该放在这个时候执行，以确保他们在客户端执行

`beforeUpdate` 在状态更新后，组件更新前执行。可以理解为 *在变量更新后，组件更新前* 

它会在onMount之前执行

`afterUpdate` 在状态更新并且组件更新后调用。

**`onDestroy`**: 当组件即将从 DOM 中移除时调用。这个函数适用于执行清理操作，如移除事件监听器或取消订阅。

<script>
    import {onMount,afterUpdate,beforeUpdate} from 'svelte'
    let node;
    let title = "hello world";
    onMount(()=>{
        console.log("onMount()")
        setTimeout(()=>{
            title = "meteor";
        },3000)
    })
    afterUpdate(()=>{
        console.log("afterUpdate()")
        console.log(node.offsetWidth);
    })
    beforeUpdate(()=>{
        console.log("beforeUpdate()")
        if(node) {
            console.log(node.offsetWidth)
        }
    })
</script>

```javascript
<script>
	import {onMount,afterUpdate,beforeUpdate} from 'svelte'
	let node;
	let title = "hello world";
	onMount(()=>{
		console.log("onMount()")
		setTimeout(()=>{
			title = "meteor";
		},3000)
	})
	afterUpdate(()=>{
		console.log("afterUpdate()")
		console.log(node.offsetWidth);
	})
	beforeUpdate(()=>{
		console.log("beforeUpdate()")
		if(node) {
			console.log(node.offsetWidth)
		}
	})
</script>


<span bind:this={node}>{title}</span>
```

以上代码在控制台中打印:

![生命周期](生命周期2.png)

注意，在beforeUpdate的回调中，需要额外判断node是否存在，原因是beforeUpdate的的时候，可能组件还未挂载 **beforeUpdate是在onMount 之前调用**

在设置的延时3秒更新title后，可以看到 `beforeUpdate` 获取的宽度还是79，因为此时仅变量更新，组件仍未更新。而`afterUpdate`会是响应DOM更新的最佳时机，从不用添加判断就可以看出
