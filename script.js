let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {}

function login() {
    let user = document.getElementById("username").value
    let pass = document.getElementById("password").value

    if (usuarios[user] && usuarios[user].senha === pass) {
        document.getElementById("login").classList.add("hidden")
        document.getElementById("dashboard").classList.remove("hidden")

        document.getElementById("welcome").innerText = "Bem-vindo " + user
    } else {
        alert("Login inválido")
    }
}

function criarConta() {
    let user = document.getElementById("newUser").value
    let email = document.getElementById("email").value
    let pass = document.getElementById("newPass").value

    if (!user || !email || !pass) {
        alert("Preencha tudo")
        return
    }

    if (usuarios[user]) {
        alert("Usuário já existe")
        return
    }

    usuarios[user] = {
        email: email,
        senha: pass
    }

    localStorage.setItem("usuarios", JSON.stringify(usuarios))

    alert("Conta criada!")
    voltarLogin()
}

function mostrarCadastro() {
    document.getElementById("login").classList.add("hidden")
    document.getElementById("register").classList.remove("hidden")
}

function voltarLogin() {
    document.getElementById("register").classList.add("hidden")
    document.getElementById("login").classList.remove("hidden")
}

function logout() {
    document.getElementById("dashboard").classList.add("hidden")
    document.getElementById("login").classList.remove("hidden")
}

function abrirModulo(nome) {
    alert("Abrindo módulo: " + nome)
}
