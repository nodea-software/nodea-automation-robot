module.exports = {
	execute: async utils => {
		return new Promise((resolve, reject) => {

			// Clean sensitive session data
			utils.sessionData.f_password_decrypte = null;

			// Update server entity
			let form = {
				r_statut: 8
			};

			utils.api.call({
				url: '/api/demande/' + utils.env.id_demande,
				method: 'put',
				form: form
			}).then(resolve).catch(reject);
		});
	}
}