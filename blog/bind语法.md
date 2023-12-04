## bind语法

svelte中也允许使用`bind`在组件中创建双向数据绑定。它允许将变量与表单元素（如输入框，选择框)的值进行绑定。当表单元素值改变时，绑定的变量也会随之更新，反之亦然。

这使得状态管理变得更加现代化和直观

常见的 `bind`使用示例

### 绑定到文本输入框

```javascript
<script>
  let name = '';
</script>

<input type="text" bind:value={name} />

```

在这个例子中，文本输入框的值和变量 `name` 之间建立了双向绑定。当输入框的内容改变时，`name` 的值也会相应地更新。

### 绑定到复选框

```javascript
<script>
  let isHappy = false;
</script>

<input type="checkbox" bind:checked={isHappy} />

```

这里，复选框的选中状态与变量 `isHappy` 绑定。用户更改复选框的状态时，`isHappy` 的值也会改变。

### bind:group

属于同一组的输入可以使用`bind:group={group_name}`

```javascript
<script>
	let like = '爱好';
	$: console.log(like);
</script>

<!-- grouped radio inputs are mutually exclusive -->
<input type="radio" bind:group={like} value="Golang" />Go
<input type="radio" bind:group={like} value="C#" />C#
<input type="radio" bind:group={like} value="Java" />Java


```

更多的用法可参考

https://svelte.dev/docs/element-directives#bind-group

bind还有一种特殊的用法，有的时候我们希望用DOM的API对元素做一些操作，这个时候我们可以将DOM元素绑定到变量中，就像以下这样

```javascript
<script>
	let inputNode
</script>

<input type="text" bind:this={inputNode}>

```

比如说操作canvas的时候，可以直接将元素与变量绑定，实现更轻松的绘制元素

```javascript
<script>
	let canvas
	let width
	import {onMount} from 'svelte'
	
	onMount(()=>{
		console.log(width)
	})
	
</script>

<canvas bind:this={canvas} bind:clientWidth={width}/>
```


