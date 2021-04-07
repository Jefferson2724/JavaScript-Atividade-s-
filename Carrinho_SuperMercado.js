 class Compras {
 	constructor(itens,qtdTotalI, valorTotal){
 		this.itens = itens;               //Array com id,nome,quantidade do item em questão e preço
 		this.qtdTotalI = qtdTotalI;		  //Quantidade total de Itens no carrinho
 		this.valorTotal = valorTotal;	  //Valor Total de Itens
 	}

 	get getItens() {
 		return this.itens;
 	}

 	get getQtdTotalI() {
 		return this.qtdTotalI;
 	}

 	set setQtdTotalI(qtdTotalItem) {
 		this.qtdTotalI = qtdTotalItem;
 	}

 	get getValorTotal() {
 		return this.valorTotal;
 	}

 	set setValorTotal(valor) {
 		this.valorTotal = valor;
 	}
 }


Compras.prototype.adicionar = function(itemAdiciona) {
	for(let itemCarrinho in this.getItens){
		if(this.getItens[itemCarrinho].id == itemAdiciona.id){  //Se o id de ItemAdiciona, Existe nos itens comprados (Limitado para os itens declarado no instaciamento do objeto)
			//this.getItens.push(itemAdiciona);
			this.setQtdTotalI = this.getQtdTotalI + itemAdiciona.qtd;
			this.setValorTotal = this.getValorTotal + (itemAdiciona.qtd * itemAdiciona.preco);
			
			this.getItens[itemCarrinho].qtd += itemAdiciona.qtd;		
		}
	}
}

Compras.prototype.remover = function(itemRemove){
	for(let itemCarrinho in this.getItens){
		if(this.getItens[itemCarrinho].id == itemRemove.id){  //Se o id de ItemAdiciona, Existe nos itens comprados (Limitado para os itens declarado no instaciamento do objeto)
			//this.getItens.push(itemAdiciona);
			this.setQtdTotalI = this.getQtdTotalI - itemRemove.qtd;
			this.setValorTotal = this.getValorTotal - (itemRemove.qtd * itemRemove.preco);
			
			this.getItens[itemCarrinho].qtd -= itemRemove.qtd;		
		}
	}
}

Compras.prototype.valorTotal = 0
Compras.prototype.qtdTotalI = 0;

let carrinho = new Compras([ //Forma fixa para declaração do Objeto no código, que forma a propriedade Itens
	{
		id: 01,
		nome: "Camisa",
		qtd: 3,
		preco: 30.00
	},

	{	
		id: 02,
		nome:"Calça",
		qtd: 2,
		preco: 50.00
	},

	{
		id:03,
		nome: "Saia",
		qtd: 1,
		preco: 40.00
	}
], 6, 230.00);

carrinho.adicionar(			//Para adicionar ou remover é necessário declarar cade detalhe do Objeto
	{
		id:01,
		nome:"Camisa",
		qtd:2,
		preco:30.00
	}
);

console.log(carrinho);

carrinho.remover(
	{
		id:01,
		nome:"Camisa",
		qtd:1,
		preco:30.00
	}
);

console.log(carrinho);