var citylistObj = Object.create(searchObj); //原型继承
//$.extend 进行对象与对象的合并
citylistObj  = $.extend(citylistObj, {
	name: '城市列表页',
	dom: $('#citylist')
})