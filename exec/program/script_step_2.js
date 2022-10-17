(_ => {
    document.querySelector("input[name='email']").value = env.f_login;
    document.querySelector("input[name='password']").value = sessionData.f_password_decrypte;
    document.querySelector("form[name='login']").submit();
})();