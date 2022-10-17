(_ => {
	
	let data = {};
	data.count_buttons = document.getElementsByClassName("btn--primary").length;
	
	alert(data.count_buttons);
	return data;


})();