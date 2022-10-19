module.exports = {
	execute: async utils => {
		return new Promise((resolve, reject) => {

			let form = {
				f_forme_juridique: utils.sessionData.f_forme_juridique,
				f_denomination: utils.sessionData.f_denomination,
				f_adresse_siege_social: utils.sessionData.f_adresse_siege_social
				
			};

			utils.api.call({
				url: '/api/entreprise/' + utils.env.id_entreprise,
				method: 'put',
				form: form
			}).then(resolve).catch(reject);
		});
	}
}