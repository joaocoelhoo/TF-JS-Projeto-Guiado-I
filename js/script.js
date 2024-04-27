// -------- CRUD =>
let estoque = [];
let proximoId = 1;

//CRIAR 
function adicionarNovoProduto(){
    const nome = document.getElementById("nome").value;
    const quantidade = document.getElementById("quantidade").value;
    const preco = document.getElementById("preco").value;
    const descricao = document.getElementById("descricao").value;
    const listaProdutos = document.getElementById("lista-produtos");

    let produto = {
        id: proximoId++,
        nome: nome,
        quantidade: quantidade,
        preco: preco,
        descricao: descricao
    }
    estoque.push(produto)
    let conteudoLista = document.createElement("li");
    conteudoLista.innerText = `Nome: ${nome}, Quantidade: ${quantidade}, Preço: ${preco}, Descrição: 
    ${descricao}`
    listaProdutos.appendChild(conteudoLista);

};
// adicionarProduto("Nissan Kicks", "1", "145000", "Exclusive");
// adicionarProduto("Garrafa", "30", "1000", "Garraja Azul");



// console.log(estoque)

//LER
function listarProduto(){
    for(let index = 0; index < estoque.length; index++){
        let produto = estoque[index];
        console.log(produto)
    }
};
// listarProduto()

//ATUALIZAR
function atualizarProduto(id, informacaoAtualizada){
    for(let index = 0; index < estoque.length; index++){
        if(estoque[index].id === id){
            estoque[index] = Object.assign(estoque[index], informacaoAtualizada)
            break;
        }
    }
};

// atualizarProduto(2, {
//     nome: 'Roda',
// });

listarProduto()

//DELETAR

function removerProdutos(id){
    for(let index = 0; estoque.length; index++){
        if(estoque[index].id === id){
            let removerProdutos = estoque.splice(index, 1)
            console.log("removeuuuu", removerProdutos)
            return;
        }
    }
}

// let novoProduto = adicionarProduto("Nissan Kicks", "1", "145000", "Exclusive");
// let novoProduto2 = adicionarProduto("Garrafa", "30", "1000", "Garraja Azul");
// listarProduto()
// removerProdutos(2)
// listarProduto()