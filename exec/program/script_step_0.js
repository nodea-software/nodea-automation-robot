module.exports = {
    execute: async utils => {
        // Decrypt variable value
        let form = {
            "value": utils.env.f_password
        };
        await utils.api.call({
            url: '/api/automation/decrypt',
            method: 'post',
            form: form
        }).then(function(data) {
            utils.sessionData.f_password_decrypte = data.response.body;
        });


    }
}