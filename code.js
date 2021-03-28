let numberClients = prompt("Ingrese el número de personas en esta mesa");
let menu = document.getElementById("menu");
let = document.getElementById("check");
let order = [];
let imageOrder = [];
let nameOrder=[];
let totalOrder= [];
let TotalPago = 0;


menu.innerHTML="";
for(i = 0;i<numberClients;i++){
    do {
        order[i] = prompt(`Ingrese el número del siguiente menú para escoger la orden${i}
        1. Hamburguesa - Precio 10.000
        2. Perro - Precio 8.000
        3. Salchipapa - Precio 6.000
        4. Chorizos - Precio 7.000`);
    }while (order[i] > 4);

    switch (order[i]) {
        case "1":
            totalOrder[i] = 10000;
            imageOrder[i] = "burger";
            nameOrder[i]="Hamburguesa Artesanal";
            break;
        case "2": 
            totalOrder[i] = 8000;
            imageOrder[i] = "hotDog";
            nameOrder[i]="Perro Caliente Artesanal";
            break;
        case "3": 
            totalOrder[i] = 6000;
            imageOrder[i] = "papas";
            nameOrder[i]="Salchipapa Artesanal";
            break;
        default:
            totalOrder[i] = 7000;
            imageOrder[i] = "chorizos";
            nameOrder[i]="Chorizo Artesanal";
            break;
    }
        
    let menuOrder =`
    <div class="col-6 mt-2">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="images/${imageOrder[i]}.jpg" alt="${imageOrder[i]}">
                <div class="card-body">
                    <h5 class = "card-title">ORDEN ${i + 1}</h5> 
                    <p><b>PRODUCTO</b>: ${nameOrder[i]}</p>
                    <p><b>PRECIO</b>: ${totalOrder[i]}</p>
                </div>
            </div>
        </div>`;
    menu.innerHTML += menuOrder;
    console.log(`Esta es la persona ${i + 1}`);
    nameOrder[i] = `document.getElementById("orden${i + 1}")`;
}

totalOrder.forEach(function(e){
    TotalPago += e;
});

check.innerHTML = `
    <h5 class="alert alert-success col-4">
        Total a pagar: ${TotalPago}
    </h5>`;