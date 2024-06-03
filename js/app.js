function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (isNaN(quantidade) || quantidade < 0) {
        alert ('A quantidade deve ser um número maior que zero.');
        return;
    }
    
    if (tipoIngresso == 'pista') {
        subtrairPista(quantidade);
    } else {
        if ( tipoIngresso == 'superior') {
            subtrairSuperior(quantidade);
        } else {
            subtrairInferior(quantidade);
        }
    }
}


function subtrairPista(quantidade) {
    let disponibilidadePista = parseInt(document.getElementById('qtd-pista').textContent);

    if (quantidade > disponibilidadePista) {
        alert ('Não é possível comprar a quantidade desejada.')
    } else {
        disponibilidadePista = disponibilidadePista - quantidade
        document.getElementById('qtd-pista').textContent = disponibilidadePista
        alert ('Compra realizada com sucesso');
    }
}


function subtrairSuperior(quantidade) {
    let disponibilidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (quantidade > disponibilidadeSuperior) {
        alert ('Não é possível comprar a quantidade desejada.')
    } else {
        disponibilidadeSuperior = disponibilidadeSuperior - quantidade
        document.getElementById('qtd-superior').textContent = disponibilidadeSuperior
        alert ('Compra realizada com sucesso');
    }
}

function subtrairInferior(quantidade) {
    let disponibilidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (quantidade > disponibilidadeInferior) {
        alert ('Não é possível comprar a quantidade desejada.')
    } else {
        disponibilidadeInferior = disponibilidadeInferior - quantidade
        document.getElementById('qtd-inferior').textContent = disponibilidadeInferior
        alert ('Compra realizada com sucesso');
    }
}

