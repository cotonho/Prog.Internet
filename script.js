const form = document.getElementById('cadastroForm');

//  Funções de validação 
function verificaTamanhoNome() {
    const nomeInput = document.getElementById("nome");
    const erroNome = document.getElementById("erroNome");

    if ((nomeInput.value.trim()).length < 3) {
        erroNome.textContent = "O nome deve ter no mínimo 3 caracteres.";
        nomeInput.classList.remove("is-valid");
        nomeInput.classList.add("is-invalid");
        return false;
    } else {
        erroNome.textContent = "";
        nomeInput.classList.remove("is-invalid");
        nomeInput.classList.add("is-valid");
        return true;
    }
}

function verificaCPF() {
    const CPFinput = document.getElementById("cpf");
    const CPF = CPFinput.value.trim();
    const erroCPF = document.getElementById("erroCPF");

    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (!regex.test(CPF)) {
        erroCPF.textContent = "Formato inválido, use o formato 000.000.000-00.";
        CPFinput.classList.remove("is-valid");
        CPFinput.classList.add("is-invalid");
        return false;
    } else {
        erroCPF.textContent = "";
        CPFinput.classList.remove("is-invalid");
        CPFinput.classList.add("is-valid");
        return true;
    }
}

function verificaLogin() {
    const inputLogin = document.getElementById("login");
    const login = inputLogin.value.trim();
    const erroLogin = document.getElementById("erroLogin");

    const regex = /^[A-Za-z0-9._-]{4,}$/;

    if (login.length < 4) {
        erroLogin.textContent = "O login deve ter no mínimo 4 caracteres.";
        inputLogin.classList.remove("is-valid");
        inputLogin.classList.add("is-invalid");
        return false;
    } else if (!regex.test(login)) {
        erroLogin.textContent = "O login só pode conter letras, números e os símbolos . _ -";
        inputLogin.classList.remove("is-valid");
        inputLogin.classList.add("is-invalid");
        return false;
    } else {
        erroLogin.textContent = "";
        inputLogin.classList.remove("is-invalid");
        inputLogin.classList.add("is-valid");
        return true;
    }
}

function verificaEmail() {
    const inputEmail = document.getElementById("email");
    const email = inputEmail.value.trim();
    const erroEmail = document.getElementById("erroEmail");

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!regex.test(email)) {
        erroEmail.textContent = "Formato de e-mail inválido.";
        inputEmail.classList.remove("is-valid");
        inputEmail.classList.add("is-invalid");
        return false;
    } else {
        erroEmail.textContent = "";
        inputEmail.classList.remove("is-invalid");
        inputEmail.classList.add("is-valid");
        return true;
    }
}

function verificaSenha() {
    const inputSenha = document.getElementById("senha");
    const senha = inputSenha.value.trim();
    const erroSenha = document.getElementById("erroSenha");

    const regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

    if (!regex.test(senha)) {
        erroSenha.textContent = "A senha deve ter no mínimo 8 caracteres, com pelo menos 1 letra e 1 dígito.";
        inputSenha.classList.remove("is-valid");
        inputSenha.classList.add("is-invalid");
        return false;
    } else {
        erroSenha.textContent = "";
        inputSenha.classList.remove("is-invalid");
        inputSenha.classList.add("is-valid");
        return true;
    }
}

function verificaSegundaSenha() {
    const inputSenha = document.getElementById("senha");
    const senha = inputSenha.value.trim();

    const inputConfSenha = document.getElementById("confSenha");
    const confSenha = inputConfSenha.value.trim();
    const erroConfSenha = document.getElementById("erroConfSenha");

    if (confSenha !== senha) {
        erroConfSenha.textContent = "As senhas não batem.";
        inputConfSenha.classList.remove("is-valid");
        inputConfSenha.classList.add("is-invalid");
        return false;
    } else {
        erroConfSenha.textContent = "";
        inputConfSenha.classList.remove("is-invalid");
        inputConfSenha.classList.add("is-valid");
        return true;
    }
}

function verificaSalario() {
    const inputSalario = document.getElementById("salario");
    const salario = inputSalario.value.trim();
    const erroSalario = document.getElementById("erroSalario");

    const regex = /^\d+(\.\d{1,2})?$/;

    if (!regex.test(salario)) {
        erroSalario.textContent = "Esse formato não é válido. Tente: xxx.xx";
        inputSalario.classList.remove("is-valid");
        inputSalario.classList.add("is-invalid");
        return false;
    } else {
        erroSalario.textContent = "";
        inputSalario.classList.remove("is-invalid");
        inputSalario.classList.add("is-valid");
        return true;
    }
}

function verificaDependentes() {
    const inputDependentes = document.getElementById("dependentes");
    const dependentes = parseInt(inputDependentes.value.trim());
    const erroDependentes = document.getElementById("erroDependentes");

    if (isNaN(dependentes) || dependentes < 0) {
        erroDependentes.textContent = "Valor inválido.";
        inputDependentes.classList.remove("is-valid");
        inputDependentes.classList.add("is-invalid");
        return false;
    } else {
        erroDependentes.textContent = "";
        inputDependentes.classList.remove("is-invalid");
        inputDependentes.classList.add("is-valid");
        return true;
    }
}

// calculo do IR 
function calcularIR() {
    const dependentes = parseFloat(document.getElementById("dependentes").value.trim()) || 0;
    const salario = parseFloat(document.getElementById("salario").value.trim()) || 0;

    let base = salario - (200 * dependentes);
    if (base < 0) base = 0;

    let aliquota;
    if (base <= 2000) aliquota = 0;
    else if (base <= 3000) aliquota = 0.075;
    else if (base <= 4500) aliquota = 0.15;
    else if (base <= 6000) aliquota = 0.225;
    else aliquota = 0.275;

    // calculo final do IR
    let ir = base * aliquota;
    document.getElementById("ir").value = ir.toFixed(2);
}


// Toggle senha 
const senhaInput = document.getElementById('senha');
const toggleBtn = document.getElementById('toggleSenha');

toggleBtn.addEventListener('click', function() {
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        toggleBtn.src = "esconder.png";
    } else {
        senhaInput.type = "password";
        toggleBtn.src = "mostrar.png";
    }
});

// toggle senha 2
const senhaInput2 = document.getElementById('confSenha');
const toggleBtn2 = document.getElementById('toggleSenha2');

toggleBtn2.addEventListener('click', function() {
    if (senhaInput2.type === "password") {
        senhaInput2.type = "text";
        toggleBtn2.src = "esconder.png";
    } else {
        senhaInput2.type = "password";
        toggleBtn2.src = "mostrar.png";
    }
});

//  Envio do formulário 
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const validacoes = [
        verificaTamanhoNome(),
        verificaCPF(),
        verificaLogin(),
        verificaEmail(),
        verificaSenha(),
        verificaSegundaSenha(),
        verificaSalario(),
        verificaDependentes()
    ];

    if (validacoes.every(v => v)) {
        alert("Usuário cadastrado com sucesso!");
        HTMLFormElement.prototype.submit.call(form);
    } else {
        const primeiroErro = form.querySelector(".is-invalid");
        if (primeiroErro) {
            primeiroErro.scrollIntoView({ behavior: "smooth", block: "center" });
            primeiroErro.focus();
        }
    }
});

// Resetar formulário 
function resetForm() {
    form.reset();

    const inputs = form.querySelectorAll("input");
    inputs.forEach(input => {
        input.classList.remove("is-valid", "is-invalid");
    });

    const spans = form.querySelectorAll("span");
    spans.forEach(span => span.textContent = "");
}
