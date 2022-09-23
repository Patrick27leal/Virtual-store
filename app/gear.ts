const Estoque = [
 {id:1 , "Nome":"camisavascotormenta.png", "Modelo": "TORMENTA", "Marca": "KAPPA", "Tamanho":"G", "Categoria":"CAMISA", "Preco": 180.00},    
 {id:2 , "Nome":"camisa.png", "Modelo": "LGBT NEGRA", "Marca": "KAPPA", "Tamanho":"G", "Categoria":"CAMISA", "Preco": 370.00 },
 {id:3 , "Nome":"camisavascolgbtb.png", "Modelo": "LGBT BRANCA", "Marca": "KAPPA", "Tamanho":"G", "Categoria":"CAMISA", "Preco": 370.00},
 {id:4 , "Nome":"camisavascogoleirob.png", "Modelo": "GOLEIRO BRANCA", "Marca": "KAPPA", "Tamanho":"G", "Categoria":"CAMISA", "Preco": 170.00 },
 {id:5 , "Nome":"camisavascotreinob.png", "Modelo": "TREINO BRANCA", "Marca": "KAPPA", "Tamanho":"G", "Categoria":"CAMISA", "Preco": 170.00},
 {id:6 , "Nome":"camisa-vasco-1.png", "Modelo": "Primeira Camisa", "Marca": "KAPPA", "Tamanho":"G", "Categoria":"CAMISA", "Preco": 270.00},
 {id:7 , "Nome":"camisa-vasco-2.png", "Modelo": "Segunda Camisa", "Marca": "KAPPA", "Tamanho":"G", "Categoria":"CAMISA", "Preco": 270.00},
 {id:8 , "Nome":"terceira-camisa.png", "Modelo": "Terceira Camisa", "Marca": "", "Tamanho":"", "Categoria":"CAMISA", "Preco": 170.00},
]

const builderProducts = document.querySelector(".box-products");

document.querySelector("#btn-search")?.addEventListener("click", (event) =>{
const Search = (document.querySelector("#camp-search") as HTMLInputElement).value

})

if (builderProducts) {
    Estoque.forEach((Estoque)=>{
        builderProducts.innerHTML+=`
        <div class="products">
        <div class="product">
            <img class="img-product" src="./img/${Estoque.Nome}" alt="">
        </div>
        <div class="footer-product">
            <p>${Estoque.Modelo}</p>
            <h1>R$${Estoque.Preco}</h1>
            <div class="box-category-product">
                <p>${Estoque.Categoria}</p>
            </div>
        </div>
    </div>
        `;

    })
}
function querySelector(arg0: string) {
    throw new Error("Function not implemented.");
}

