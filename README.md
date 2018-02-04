

##Great库文档
- **$(select)**

	**用法说明：**方法用于获取节点对象。

		select为：标准选择器名（string类型）。

	**语法：**

		$("#idName") 或 $(".className") 或 $("tagName")

- **bindEvent(nodeList,eventType,fn)**

	**用法说明：**方法用于为每一个nodeList绑定某一个事件。可传入两个参数`bindEvent(nodeList,fn)`，默认为点击事件。

		nodeList为nodeList（object类型）
		eventType为任何事件名（string类型）
		fn为事件处理函数（function类型）。

	**语法：**

		bindEvent(nodeList,"onclick",function(){...})
		bindEvent(nodeList,function(){...}) 不传入事件名默认为:onclick.
		
- **insertAfter(newElement,targetElement)**

	**用法说明：**向一个节点后面插入节点。

		newElement要插入的对象node节点(object类型)
		targetElement参照对象node节点(object类型)

- **setColor()**

	**用法说明：**该函数返回 随机十六进制颜色值。

		SetColor() 该函数无需传入参数，return标准随机十六进制颜色值

- **nextBrotherNode(node)**

	**用法说明：**该函数找到距离node最近的下一个兄弟元素节点。

		node为node节点(object类型)

- **sunchild(node)**

	**用法说明：**该函数找到该节点里面的所有子元素节点

		node为node节点(object类型)