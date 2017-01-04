//创建一个hash值与模块映射关系表
var hashMap={
	'address':searchObj,
	'rlist':rlistObj,
	'detail':detailObj,
	'citylist':citylistObj
	
}
var prevModule=null;//前一个模块
var curModule=null;//当前模块
function routeController(hash){

	var module=hashMap[hash]||hashMap['address'];

	prevModule=curModule;

	curModule=module;

	if(prevModule){
		//console.log(2)
		prevModule.leave();
	}
	curModule.enter();
}
if(location.hash){
	var hash=location.hash.slice(1);
	routeController(hash)
}else{
	routeController('address');
}
window.onhashchange=function(){
	var hash=location.hash.slice(1);
	routeController(hash)
}
