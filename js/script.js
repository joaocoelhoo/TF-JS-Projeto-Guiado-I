// -------- CRUD ---------
let estoque = [];
let proximoId = 1;

//CRIAR 
function adicionarNovoProduto(nome, quantidade, preco, descricao){
    let produto = {
        id: proximoId++,
        nome: nome,
        quantidade: quantidade,
        preco: preco,
        descricao: descricao
    }
    estoque.push(produto)
};
adicionarNovoProduto("Nissan Kicks", "1", "145000", "Exclusive");
adicionarNovoProduto("Garrafa", "30", "1000", "Garrafa Azul");

//LER
function listarProduto(){
    for(let index = 0; index < estoque.length; index++){
        let produto = estoque[index];
        console.log(produto)
    }
};
listarProduto()

//ATUALIZAR
function atualizarProduto(id, informacaoAtualizada){
    for(let index = 0; index < estoque.length; index++){
        if(estoque[index].id === id){
            estoque[index] = Object.assign(estoque[index], informacaoAtualizada)
            break;
        }
    }
};

atualizarProduto(2, {
    nome: 'Roda',
});

listarProduto()

//DELETAR

function removerProdutos(id){
    for(let index = 0; estoque.length; index++){
        if(estoque[index].id === id){
            let removerProdutos = estoque.splice(index, 1)
            console.log("removendo produto", removerProdutos)
            return;
        }
    }
}

removerProdutos(2)
listarProduto()