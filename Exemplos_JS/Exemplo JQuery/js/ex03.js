function removeLinha() {
    var button = $(this);  // pega o botão clicado
    // parents() permite buscar o pai que satisfaz o 
    // seletor passado
    var linhaPai = button.parents('tr');
    // remove() remove o elemento
    linhaPai.remove();
}

function desabilitarLinha() {
    var button = $(this);  // pega o botão clicado
    var linhaPai = button.parents('tr');
    // addClass() adiciona uma classe CSS ao elemento
    linhaPai.addClass('desabilitado');
}

$("#inserir").click(function() {
    // prompt() mostra uma caixa para digitação, e retorna o texto digitado pelo usuário
    var nome = prompt("Digite o nome");
    
    // cria nova linha
    var htmlRemover = "<button class='remover'>Remover</button>";
    var htmlDesabilitar = "<button class='desabilitar'>Desabilitar</button>";
    var html = "<tr><td>" + nome + "</td><td>" + htmlRemover + " - " + htmlDesabilitar + "</td></tr>";
    var novaLinha = $(html);
    
    // insere linha no final da tabela
    $('table').append(novaLinha);
    
    // atribui uma função ao evento click no link da linha inserida
    novaLinha.find('button.remover')
        .click(removeLinha);
    novaLinha.find('button.desabilitar').
        click(desabilitarLinha);
});