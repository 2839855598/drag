function drag(id)
{
	var oBox=document.getElementById(id);
	var disX=0;
	var disY=0;
	document.onmousemove=function(ev)
	{
		var ev=ev||window.event;
        disX=ev.clientX-oBox.offsetLeft;
        disY=ev.clientY-oBox.offsetTop;
	}
}