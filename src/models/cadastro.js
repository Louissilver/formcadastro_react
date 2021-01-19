function validarCPF(cpf) {
    if (cpf.length !== 11) {
        return { valido: false, texto: "CPF deve ter 11 dígitos." }
    } else {
        return { valido: true, texto: "" }
    }
}

function validarSenha(senha) {
    if (senha.length < 8 || senha.length > 72) {
        return { valido: false, texto: "Senha deve ter entre 8 e 72 dígitos." }
    } else {
        return { valido: true, texto: "" }
    }
}

function validarNome(nome) {
    if (nome.length < 4 || nome.length > 72) {
        return { valido: false, texto: "Nome deve ter entre 4 e 100 dígitos." }
    } else {
        return { valido: true, texto: "" }
    }
}

function validarSobrenome(sobrenome) {
    if (sobrenome.length < 4 || sobrenome.length > 72) {
        return { valido: false, texto: "Sobrenome deve ter entre 4 e 100 dígitos." }
    } else {
        return { valido: true, texto: "" }
    }
}

export { validarCPF, validarSenha, validarNome, validarSobrenome };