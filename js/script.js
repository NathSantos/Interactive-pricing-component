/*------------ MUDANDO VALORES DE PAGEVIEWS E PREÇOS ------------*/

/*
- 10K PAGEVIEWS / $8 per month  / $72.00 per year
- 50K pageviews / $12 per month / $108.00 per year
- 100K pageviews / $16 per month / $144.00 per year
- 500k pageviews / $24 per month / $216.00 per year
- 1M pageviews / $36 per month / $324.00 per year
*/ 

var range = document.getElementById("myRange");
var pageviews = document.querySelector(".opcao span");
var price = document.getElementById("valor");
var period = document.getElementById("periodo");
var checkbox = document.getElementById("btn-checkbox");

// Valores padrão
let pageviewsValue = "100K PAGEVIEWS";
let priceValue = "$16.00";
let periodValue = "/month"

function updateValues() {
    const sliderValue = range.value;
    let pageviewsMultiplier, priceMultiplier;
  
    // Defina os multiplicadores com base na posição do controle deslizante
    switch (sliderValue) {
      case "0":
        pageviewsMultiplier = 10;
        priceMultiplier = 8;
        break;
      case "1":
        pageviewsMultiplier = 50;
        priceMultiplier = 12;
        break;
      case "2":
        pageviewsMultiplier = 100;
        priceMultiplier = 16;
        break;
      case "3":
        pageviewsMultiplier = 500;
        priceMultiplier = 24;
        break;
      case "4":
        pageviewsMultiplier = 1000;
        priceMultiplier = 36;
        break;
    }

    // Definindo os valores de Pageviews
    if(sliderValue == 4) {
        pageviewsValue = "1M PAGEVIEWS";
    }
    else {
        pageviewsValue = `${pageviewsMultiplier}K PAGEVIEWS`;
    }

    // Definindo os valores dos preços conforme o botão 
    if (checkbox.checked) {
        priceValue = `$${priceMultiplier * 12 - (priceMultiplier * 12 * 0.25)}.00`;
        periodValue = "/year";
    } else {
        priceValue = `$${priceMultiplier}.00`;
        periodValue = "/month";
    }

    // Atualiza o HTML com os novos valores
    pageviews.textContent = pageviewsValue;
    price.textContent = priceValue;
    period.textContent = periodValue;
}

// Fica ouvindo para atualizar os valores sempre que deslizar a barra ou apertar no botão
range.addEventListener("input", updateValues);
checkbox.addEventListener("click", updateValues);

// Chama a função para definir os valores iniciais
updateValues();


/*------------ MUDANDO COR DA BARRA SLIDER CONFORME O PONTEIRO AVANÇA ------------*/

range.oninput = function() {

  // calcula a porcentagem do valor atual do controle deslizante em relação ao seu valor mínimo e máximo
  var value = (this.value-this.min)/(this.max-this.min)*100;

  /* Define o estilo de fundo do controle deslizante 
    (cor rgba(16, 213, 194, 0.4) na parte da barra que está antes do ponteiro e rgb(204, 204, 204, 0.4) na parte que está depois)*/
  this.style.background = 'linear-gradient(to right, rgba(16, 213, 194, 0.4) ' + value + '%, rgb(204, 204, 204, 0.4) ' + value + '%)';
}

