//传入选择器 获取节点对象(传入一个参数 1.标准选择器名(string))
function $(select){
	var str = select.slice(1);
	if(select[0] == "#"){
		return document.getElementById(str);
	}
	if(select[0] == "."){
		return document.getElementsByClassName(str);
	}
	if(select[0] != "#" && select[0] != "."){
		return document.getElementsByTagName(select);
	}
}
/*为nodeList每一个node节点绑定某一个事件
(传入参数 1.nodelist(object) 2.事件类型(string) 3.事件处理函数体(function))
可传入两个参数 1.nodeist(object) 2.事件处理函数体(function) 默认为:点击事件*/
function bindEvent(nodeList,eventType,fn){
	//传入2个参数的情况
	if(arguments.length == 2){
		fn = arguments[1];
		eventType = "onclick";
	}
	for(var i = 0 ; i < nodeList.length ; i++){
		nodeList[i][eventType] = fn;
	}
}
//向后插入节点(传入1.要插入的对象(object) 2.参照对象(object))
function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild != targetElement){
		parent.insertBefore(newElement,targetElement.nextSibling);
	}else{
		parent.appendChild(targetElement);
	}
}
//该函数返回 随机十六进制颜色值(无需传入参数)
function setColor(){
	var colorArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
	var col = "#"
	for(var i = 0 ; i < 6 ; i++){
		var s = Math.floor(Math.random()*16);
		col += colorArr[s];
	}
	return col;
}
// 5.找到距离他最近的下一个兄弟元素节点 (传入参数 1.node节点(object))
function nextBrotherNode(node){
	while(node.nextSibling.nodeType!=1){
		node = node.nextSibling
		if(node.nextSibling.nodeType==1){
			return node.nextSibling
		}
	}
}
// 6.找到该节点里面的所有子元素节点 传入参数(1.node节点(object))
function sunchild(node){
	for(var a=0;a<node.childNodes.length;a++){
		if(node.childNodes[a].nodeType==1){
			console.log(node.childNodes[a])
		}
	}
}