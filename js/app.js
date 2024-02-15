let totalGeral;
let listaDeProdutos = [];

limpar();

function adicionar() {
  let produto = document.getElementById('produto').value;
  let nomeDoProduto = produto.split(' - R$')[0];
  let valorUnitario = produto.split(' - R$')[1];
  let quantidade = document.getElementById('quantidade').value;
  let preco = quantidade * valorUnitario;

  if (quantidade <= 0) {
    quantidade = 1;
  }

  // CALCULAR DO PREÇO UNITÁRIO
  preco = quantidade * valorUnitario;

  // ADICIONAR NOVO PRODUTO
  let carrinho = document.getElementById('lista-produtos');
  let novoProduto = document.createElement('section');

  novoProduto.className = 'carrinho__produtos__produto';
  novoProduto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">R$${valorUnitario}</span>`; // INPUT DA NOVA SECÇÃO
  carrinho.appendChild(novoProduto);

  // SOMAR O VALOR TOTAL DAS COMPRAS
  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$${totalGeral}`;
  console.log(`Total da compra: R$${totalGeral}`);

  // ADICIONAR QUANTIDADE E PRODUTO NUMA LISTA
  listaDeProdutos.push(`${quantidade}x ${nomeDoProduto}`);
  console.log(listaDeProdutos);

  document.getElementById('quantidade').value = 1;
}

function limpar() {
  totalGeral = 0;
  document.getElementById('valor-total').textContent = 'R$0';
  document.getElementById('lista-produtos').innerHTML = '';

  listaDeProdutos = []
}