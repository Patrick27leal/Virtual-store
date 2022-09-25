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
    { id: 10, "Nome": "calcao-terceiro-uniforme.png", "Modelo": "Calção 3°", "Marca": "KAPPA", "Tamanho": "M", "Categoria": "SHORT", "Preco": 40.00 }
]

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

    })
}


document.querySelector("#BtnIncFilter")?.addEventListener("click", () => {

    if (builderProducts) {
        builderProducts.innerHTML = '';
    }


    const Categoria = document.querySelector('input[name="Categoria"]:checked');

    const Tamanho = document.querySelector('input[name="Tamanho"]:checked');

    const ValorMaximo = document.querySelector('#ValorMaximo');

    const ValorMinimo = document.querySelector('#ValorMinimo');

    const ResultadoPesquisaFiltro: any = []

    const VerificaEstoqueFiltro = Estoque.map((row, index) => {
        const BasedeBuscaFiltro = [];
        BasedeBuscaFiltro.push(row);
        const filtrados = BasedeBuscaFiltro.find((rowUnique: { id: number, Nome: String, Modelo: String, Marca: String, Tamanho: String, Categoria: String, Preco: Number }) => {

            if (Tamanho && Categoria) {

                const TamanhoSelecionado = (Tamanho as HTMLInputElement).value;

                const CategoriaSelecionado = (Categoria as HTMLInputElement).value;

                if ((row.Tamanho.includes(TamanhoSelecionado)) && (row.Categoria.includes(CategoriaSelecionado))) {
                    
                    if(ValorMaximo && ValorMinimo){

                        let Maximo = parseFloat((ValorMaximo as HTMLInputElement).value);

                        let Minimo = parseFloat((ValorMinimo as HTMLInputElement).value);

                        if(Minimo >= row.Preco <= Maximo){
                            return row.Nome;
                        }

                    }else{

                        let Maximo = (ValorMaximo as HTMLInputElement).value;

                        let Minimo = (ValorMinimo as HTMLInputElement).value;

                        if(Maximo){
                            row.Preco < parseFloat(Maximo);
                            return row.Nome;
                        }else{
                            row.Preco < parseFloat(Minimo);
                            return row.Nome;
                        }
                        
                    }

                    return row.Nome;

                }
            } else {
                if (Tamanho) {
                    const TamanhoSelecionado = (Tamanho as HTMLInputElement).value;
                    if (row.Tamanho.includes(TamanhoSelecionado)) {

                        if(ValorMaximo && ValorMinimo){

                            let Maximo = parseFloat((ValorMaximo as HTMLInputElement).value);
    
                            let Minimo = parseFloat((ValorMinimo as HTMLInputElement).value);
    
                            if(Minimo >= row.Preco <= Maximo){
                                return row.Nome;
                            }
    
                        }else{
    
                            let Maximo = (ValorMaximo as HTMLInputElement).value;
    
                            let Minimo = (ValorMinimo as HTMLInputElement).value;
    
                            if(Maximo){
                                row.Preco < parseFloat(Maximo);
                                return row.Nome;
                            }else{
                                row.Preco < parseFloat(Minimo);
                                return row.Nome;
                            }
                            
                        }

                        return row.Nome;
                    }
                }
                if (Categoria) {
                    const CategoriaSelecionado = (Categoria as HTMLInputElement).value;
                    if (row.Categoria.includes(CategoriaSelecionado)) {

                        if(ValorMaximo && ValorMinimo){

                            let Maximo = parseFloat((ValorMaximo as HTMLInputElement).value);
    
                            let Minimo = parseFloat((ValorMinimo as HTMLInputElement).value);
    


                            
                            if(Minimo >= row.Preco <= Maximo){
                                return row.Nome;
                            }
    
                        }else{
    
                            let Maximo = (ValorMaximo as HTMLInputElement).value;
    
                            let Minimo = (ValorMinimo as HTMLInputElement).value;
    
                            if(Maximo){
                                row.Preco < parseFloat(Maximo);
                                return row.Nome;
                            }else{
                                row.Preco < parseFloat(Minimo);
                                return row.Nome;
                            }
                            
                        }

                        return row.Nome;
                    }
                }

            }


        });
        if (typeof filtrados !== "undefined") {
            ResultadoPesquisaFiltro.push(filtrados);
        }

    })
    console.log(ResultadoPesquisaFiltro);

    if (typeof ResultadoPesquisaFiltro !== "undefined") {

        if (builderProducts) {
            ResultadoPesquisaFiltro.forEach((ResultadoPesquisaFiltro: { id: number, Nome: String, Modelo: String, Marca: String, Tamanho: String, Categoria: String, Preco: Number }) => {
                builderProducts.innerHTML += `
        <div class="products">
        <div class="product">
            <img class="img-product" src="./img/${ResultadoPesquisaFiltro.Nome}" alt="">
        </div>
        <div class="footer-product">
            <p class="text-modelo">${ResultadoPesquisaFiltro.Modelo}</p>
            <h1>R$${ResultadoPesquisaFiltro.Preco}</h1>
            <div class="box-category-product">
                <p>${ResultadoPesquisaFiltro.Categoria}</p>
            </div>
        </div>
    </div>
        `;
            })
        }
    }


});




document.querySelector(".btn-filter")?.addEventListener("click", () => {
    const box = document.getElementById('main-options');

    if ((box) || (box == '')) {
        if ((box.style.display == 'none') || (box.style.display == '')) {
            console.log(box.style.display);
            box.style.display = 'grid';
        } else {
            console.log(box.style.display);
            box.style.display = 'none';
        }
    }
})

document.querySelector("#btn-search")?.addEventListener("click", (event) => {

    if (builderProducts) {
        builderProducts.innerHTML = '';
    }

    const Search = (document.querySelector("#camp-search") as HTMLInputElement).value
    const ResultadoPesquisa: any = [];

    const VerificaDados = Estoque.map((row, index) => {
        const BasedeBusca = [];
        BasedeBusca.push(row);
        const filtrados = BasedeBusca.find((rowUnique: { id: number, Nome: String, Modelo: String, Marca: String, Tamanho: String, Categoria: String, Preco: Number }) => {

            if (row.Nome.includes(Search) || ResultadoPesquisa.includes(row)) {
                return row.Nome
            }
            if (row.Modelo.includes(Search) || ResultadoPesquisa.includes(row)) {
                return row.Nome
            }
            if (row.Marca.includes(Search) || ResultadoPesquisa.includes(row)) {
                return row.Nome
            }
            if (row.Tamanho.includes(Search) || ResultadoPesquisa.includes(row)) {
                return row.Nome
            }
            if (row.Categoria.includes(Search) || ResultadoPesquisa.includes(row)) {
                return row.Nome
            }
        });
        if (typeof filtrados !== "undefined") {
            ResultadoPesquisa.push(filtrados);
        }

    })

    if (typeof ResultadoPesquisa !== "undefined") {

        if (builderProducts) {
            ResultadoPesquisa.forEach((ResultadoPesquisa: { id: number, Nome: String, Modelo: String, Marca: String, Tamanho: String, Categoria: String, Preco: Number }) => {
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
            })
        }
    }
})


function querySelector(arg0: string) {
    throw new Error("Function not implemented.");
}

