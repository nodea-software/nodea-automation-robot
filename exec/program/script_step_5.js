module.exports = {
	execute: async utils => {
		
		console.log(utils.sessionData);
		
		if (utils.sessionData.compteur) {
			if (utils.sessionData.compteur >= utils.sessionData.count_buttons) {
				utils.sessionData.goToStep = 10;
			}
		}
		else {
			utils.sessionData.compteur = 0;
		}
		
		console.log(utils.sessionData.compteur);
	}
}