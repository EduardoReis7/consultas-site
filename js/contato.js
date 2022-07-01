function enviardados(){

    if(document.dados.userNome.value=="" ||
    document.dados.userNome.value.length < 8)
    {
    alert( "Preencha campo NOME corretamente!" );
    document.dados.userNome.focus();
    return false;
    }
    
    
    if( document.dados.tx_email.value=="" ||
    document.dados.userEmail.value.indexOf('@')==-1 ||
    document.dados.userEmail.value.indexOf('.')==-1 )
    {
    alert( "Preencha campo E-MAIL corretamente!" );
    document.dados.userEmail.focus();
    return false;
    }
    
    if (document.dados.userRecado.value=="")
    {
    alert( "Preencha o campo MENSAGEM!" );
    document.dados.userRecado.focus();
    return false;
    }
    
    return true;
    }