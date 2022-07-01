function validateForm() {
    let nome = document.forms["formulario"]["userNome"].value;
    let email = document.forms["formulario"]["userEmail"].value;
    let texto = document.forms["formulario"]["userRecado"].value;
    if (nome == "") {
        alert("Nome precisa ser preenchido.");
        return false;
    }
    if (email == "") {
        alert("E-mail precisa ser preenchido.");
        return false;
    }
    if (texto == "") {
        alert("Feedback deve ser preenchido.");
        return false;
    }
    return true;
}