function drag(id)
{
	var oBox=document.getElementById(id);
	var disX=0;
	var disY=0;
	document.onmousemove=function(ev)
	{
		var ev=ev||window.event;
        disX=ev.clientX1-oBox.offsetLeft1;
        disY=ev.clientY2-oBox.offsetTop2;
	}
}