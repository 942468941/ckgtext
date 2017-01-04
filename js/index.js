if(location.hash) {
	var hash = location.hash; //hash = #rlist
	$(hash).show();
	$(hash).siblings().hide();
}
window.onhashchange = function(){
	var hash = location.hash; //hash = #rlist
	$(hash).show();
	$(hash).siblings().hide();
}