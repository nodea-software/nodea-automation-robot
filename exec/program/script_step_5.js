module.exports = {
	execute: async utils => {
		return new Promise((resolve, reject) => {

			// Clean sensitive session data
			utils.sessionData.f_password_decrypte = null;

			// Update server entity
			let form = {
				r_statut: 11
			};

			utils.api.call({
				url: '/api/entreprise/' + utils.env.id_entreprise,
				method: 'put',
				form: form
			}).then(resolve).catch(reject);
		});
	}
}