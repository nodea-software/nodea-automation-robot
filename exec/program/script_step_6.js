(_ => {
    let buttons = document.querySelectorAll("button");
	
	let button = null;
	let found = false;
	
	for (let i=0;i<buttons.length;i++) {
		button = buttons[i];
		
		let validateTxt = "Approuver / Refuser";

		if ((button.textContent == validateTxt) && (!found)) {
			found = true;
			button.click();
		}
	}
	
	if (!found) {
		utils.sessionData.goToStep = 10;
	}
   
})();