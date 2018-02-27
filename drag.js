function drag(id)
{
	var oBox=document.getElementById(id);
	oBox.onmousedown=function(ev)
	{
		var ev=ev||window.event;
		var disX=ev.clientX-oBox.offsetLeft;
		var disY=ev.clientY-oBox.offsetTop;
	}
}