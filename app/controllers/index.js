function doClick(e) {
	var menu = Alloy.createController('menu').getView();
    $.navwin.openWindow(menu);
}

$.navwin.open();
