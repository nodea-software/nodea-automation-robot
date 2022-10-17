module.exports = {
	execute: async utils => {
		utils.sessionData.compteur = utils.sessionData.compteur + 1;
        utils.sessionData.goToStep = 6;
	}
}