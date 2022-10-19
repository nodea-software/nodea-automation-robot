(_ => {
    if (!$('#aucunResultatEntrepriseTrouve')) {
        throw new Error('NO_DATA_FOUND');
    } else {


        sessionData.f_forme_juridique = 'SAS';
		
		// Denomination
		let denomination = $(".fichePmIdentDeno")[0].outerText;
		denomination = denomination.split("\n")[0];
		sessionData.f_denomination = denomination;
		
		let adresse = $("div[datapath='entreprise.numSiret']")[0].previousSibling.previousElementSibling.outerText;
		adresse = adresse.split("\n");
		adresse.pop(); adresse.pop(); adresse.pop(); adresse.shift();
		sessionData.f_adresse_siege_social = adresse.join(" ");

		return sessionData;
    }
})();