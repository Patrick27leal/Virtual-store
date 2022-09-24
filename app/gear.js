"use strict";
var _a, _b;
const Estoque = [
    { id: 1, "Nome": "camisavascotormenta.png", "Modelo": "TORMENTA", "Marca": "KAPPA", "Tamanho": "G", "Categoria": "CAMISA", "Preco": 180.00 },
    { id: 2, "Nome": "camisa.png", "Modelo": "LGBT NEGRA", "Marca": "KAPPA", "Tamanho": "G", "Categoria": "CAMISA", "Preco": 370.00 },
    { id: 3, "Nome": "camisavascolgbtb.png", "Modelo": "LGBT BRANCA", "Marca": "KAPPA", "Tamanho": "G", "Categoria": "CAMISA", "Preco": 370.00 },
    { id: 4, "Nome": "camisavascogoleirob.png", "Modelo": "GOLEIRO BRANCA", "Marca": "KAPPA", "Tamanho": "G", "Categoria": "CAMISA", "Preco": 170.00 },
    { id: 5, "Nome": "camisavascotreinob.png", "Modelo": "TREINO BRANCA", "Marca": "KAPPA", "Tamanho": "G", "Categoria": "CAMISA", "Preco": 170.00 },
    { id: 6, "Nome": "camisa-vasco-1.png", "Modelo": "Primeira Camisa", "Marca": "KAPPA", "Tamanho": "G", "Categoria": "CAMISA", "Preco": 270.00 },
    { id: 7, "Nome": "camisa-vasco-2.png", "Modelo": "Segunda Camisa", "Marca": "KAPPA", "Tamanho": "G", "Categoria": "CAMISA", "Preco": 270.00 },
    { id: 8, "Nome": "terceira-camisa.png", "Modelo": "Terceira Camisa", "Marca": "KAPPA", "Tamanho": "G", "Categoria": "CAMISA", "Preco": 170.00 },
    { id: 9, "Nome": "camisa-treino-verde-agua.png", "Modelo": "Treino Secundaria", "Marca": "KAPPA", "Tamanho": "G", "Categoria": "CAMISA", "Preco": 120.00 },
    { id: 10, "Nome": "calcao-terceiro-uniforme.png", "Modelo": "Calção 3°", "Marca": "KAPPA", "Tamanho": "M", "Categoria": "CALÇÃO", "Preco": 40.00 }
];
const builderProducts = document.querySelector(".box-products");
if (builderProducts) {
    Estoque.forEach((Estoque) => {
        builderProducts.innerHTML += `
        <div class="products">
        <div class="product">
            <img class="img-product" src="./img/${Estoque.Nome}" alt="">
        </div>
        <div class="footer-product">
            <p class="text-modelo">${Estoque.Modelo}</p>
            <h1>R$${Estoque.Preco}</h1>
            <div class="box-category-product">
                <p>${Estoque.Categoria}</p>
            </div>
        </div>
    </div>
        `;
    });
}
(_a = document.querySelector(".btn-filter")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const box = document.getElementById('main-options');
    if ((box) || (box == '')) {
        if ((box.style.display == 'none') || (box.style.display == '')) {
            console.log(box.style.display);
            box.style.display = 'grid';
        }
        else {
            console.log(box.style.display);
            box.style.display = 'none';
        }
    }
});
(_b = document.querySelector("#btn-search")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", (event) => {
    if (builderProducts) {
        builderProducts.innerHTML = '';
    }
    const Search = document.querySelector("#camp-search").value;
    const ResultadoPesquisa = [];
    const VerificaDados = Estoque.map((row, index) => {
        const BasedeBusca = [];
        BasedeBusca.push(row);
        const filtrados = BasedeBusca.find((rowUnique) => {
            if (row.Nome.includes(Search) || ResultadoPesquisa.includes(row)) {
                return row.Nome;
            }
            if (row.Modelo.includes(Search) || ResultadoPesquisa.includes(row)) {
                return row.Nome;
            }
            if (row.Marca.includes(Search) || ResultadoPesquisa.includes(row)) {
                return row.Nome;
            }
            if (row.Tamanho.includes(Search) || ResultadoPesquisa.includes(row)) {
                return row.Nome;
            }
            if (row.Categoria.includes(Search) || ResultadoPesquisa.includes(row)) {
                return row.Nome;
            }
        });
        if (typeof filtrados !== "undefined") {
            ResultadoPesquisa.push(filtrados);
        }
    });
    if (typeof ResultadoPesquisa !== "undefined") {
        if (builderProducts) {
            ResultadoPesquisa.forEach((ResultadoPesquisa) => {
                builderProducts.innerHTML += `
        <div class="products">
        <div class="product">
            <img class="img-product" src="./img/${ResultadoPesquisa.Nome}" alt="">
        </div>
        <div class="footer-product">
            <p class="text-modelo">${ResultadoPesquisa.Modelo}</p>
            <h1>R$${ResultadoPesquisa.Preco}</h1>
            <div class="box-category-product">
                <p>${ResultadoPesquisa.Categoria}</p>
            </div>
        </div>
    </div>
        `;
            });
        }
    }
});
function querySelector(arg0) {
    throw new Error("Function not implemented.");
}
