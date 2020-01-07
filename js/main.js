var boo=0;
var canUse=document.getElementsByTagName("body")[0].style;
if(typeof canUse.animation!="undefined"||typeof canUse.WebkitAnimation!="undefined"){
	boo=1;/*支持动画*/
}else{
	boo=0;/*不支持动画*/
}

function actionIn(obj,actionName,time,speed){
	$(obj).show();
	if(boo==1)
		$(obj).css({"animation":actionName+" "+time+"s"+" "+speed,"animation-fill-mode":"forwards"});
}

function actionOut(obj,actionName,time,speed){
	if(boo==1){
		$(obj).css({"animation":actionName+" "+time+"s"+" "+speed});
		var setInt_obj=setInterval(function(){
			$(obj).hide();
			clearInterval(setInt_obj);
		},time*1000);
	}else $(obj).hide();
}

var pl = document.querySelector('.paginate.left');
var pr = document.querySelector('.paginate.right');
var countframe = $("#page");
pl.onclick = slide.bind(this, -1);
pr.onclick = slide.bind(this, 1);
var index = 0, total = 8;
function slide(offset) {
	actionOut("#page",'action_translateYOut',1,"");

	index = Math.min(Math.max(index + offset, 0), total - 1);

	var text;
	if (index == 0) text = "正方立论，反方质询";
	else if (index == 1) text = "反方立论，正方质询";
	else if (index == 2) text = "双方申论";
	else if (index == 3) text = "双方对辩";
	else if (index == 4) text = "盘问";
	else if (index == 5) text = "小结";
	else if (index == 6) text = "自由辩";
	else if (index == 7) text = "结辩";
	document.querySelector('.counter').innerHTML = text + "\n" + (index + 1) + ' / ' + total;

	pl.setAttribute('data-state', index === 0 ? 'disabled' : '');
	pr.setAttribute('data-state', index === total - 1 ? 'disabled' : '');

	countframe.src = "html/counter" + (index+1) + ".html";
	//actionIn("#page",'action_translateY',1,"");
}
slide(0);