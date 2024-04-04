//Scorrimento immagini first_main_div
function changeImage()
{
    const image = document.querySelector("#first_main_div img");
    image.src = nextImage();
}

function nextImage()
{
    img_index++;                        //passaggio all'indice successivo

    if(img_index === images.length)     //se l'indice del vettore delle immagini è gia alla fine lo riporta all'inizio
        img_index = 0;
    
    return images[img_index];
}


//Modali (Accedi, Contattaci, Carrello)
function onModalClick(event)
{
    let clicked = event.currentTarget;                      //Differenziamo ciò che ha fatto partire l'evento
    
    blur_div.classList.add("blur_background");              //Effetto sfocato sfondo

    if(clicked.id === "accedi")
    {
        modale_accedi.classList.remove("hidden");           //Fa apparire la finestra di login  
        document.body.insertBefore(blur_div, modale_accedi);
    }
    else if(clicked.id === "contattaci")
    {
        modale_contattaci.classList.remove("hidden");       //Fa apparire la finestra contattaci 
        document.body.insertBefore(blur_div, modale_contattaci);
    }
    else if(clicked.id === "carrello")
    {
        modale_carrello.classList.remove("hidden");         //Fa apparire la finestra del carrello  
        document.body.insertBefore(blur_div, modale_carrello);
    }

    document.body.classList.add("no_scroll");               //Disattiva lo scroll della pagina quando appare la finestra di login
}

function onChiudiClick(event)
{
    let clicked = event.currentTarget;                      //Differenziamo ciò che ha fatto partire l'evento

    if(clicked.id === "chiudi_accedi")
    {
        modale_accedi.classList.add("hidden");            //Nasconde la finestra di login
    }
    else if(clicked.id === "chiudi_contattaci")
    {
        modale_contattaci.classList.add("hidden");            //Nasconde la finestra contattaci
    }
    else if(clicked.id === "chiudi_carrello")
    {
        modale_carrello.classList.add("hidden");            //Nasconde la finestra del carrello
    }

    document.body.classList.remove("no_scroll");            //Riattiva lo scroll della pagina

    //Rimozione effetto sfocato
    blur_div.remove();
}


//lower navbar sub-sections
function lower_navbar_sub(event)
{
    let element = event.currentTarget;

    let subDiv = element.querySelector("div");  //Sotto-menu del flex.item*/

    switch(element.dataset.nav_category)    //In base all'attributo data riguardo la categoria fa comparire elementi diversi
    {
        case "apex":
        {
            if(event.type === 'mouseenter')
                subDiv.classList.remove("hidden");   //Fa apparire il sottomenu relativo alla sezione apex
            else
                subDiv.classList.add("hidden");      //Nasconde il sottomenu

            break;
        }

        case "infrastruttura":
        {
            if(event.type === 'mouseenter')
                subDiv.classList.remove("hidden");   //Fa apparire il sottomenu relativo alla sezione apex
            else
                subDiv.classList.add("hidden");      //Nasconde il sottomenu

            break;
        }

        case "computeraccessori":
        {
            if(event.type === 'mouseenter')
                subDiv.classList.remove("hidden");   //Fa apparire il sottomenu relativo alla sezione apex
            else
                subDiv.classList.add("hidden");      //Nasconde il sottomenu
            break;
        }

        case "servizi":
        {
            if(event.type === 'mouseenter')
                subDiv.classList.remove("hidden");   //Fa apparire il sottomenu relativo alla sezione apex
            else
                subDiv.classList.add("hidden");      //Nasconde il sottomenu
            break;
        }

        case "supporto":
        {
            if(event.type === 'mouseenter')
                subDiv.classList.remove("hidden");   //Fa apparire il sottomenu relativo alla sezione apex
            else
                subDiv.classList.add("hidden");      //Nasconde il sottomenu
            break;
        }

        case "offerte":
        {
            if(event.type === 'mouseenter')
                subDiv.classList.remove("hidden");   //Fa apparire il sottomenu relativo alla sezione apex
            else
                subDiv.classList.add("hidden");      //Nasconde il sottomenu
            break;
        }
    }
}


//navbar fissa
function fixed_navbar() 
{
    if (window.scrollY >= sticky)
        navbar.classList.add("fixed");
    else 
        navbar.classList.remove("fixed");  
}



//Scorrimento immagini first_main_div
const images =
[
    "Immagini/Homepage/latitude1.jpg",
    "Immagini/Homepage/latitude2.png",
    "Immagini/Homepage/latitude3.png",
    "Immagini/Homepage/latitude4.png"
];
let img_index = 0;

const button3 = document.querySelector("#button3");
button3.addEventListener('click', changeImage);


//Modali (Accedi, Contattaci, Carrello)
const modale_accedi = document.querySelector("#modale_accedi");
const modale_contattaci = document.querySelector("#modale_contattaci");
const modale_carrello = document.querySelector("#modale_carrello");

const accedi = document.querySelector("#accedi");
const contattaci = document.querySelector("#contattaci");
const carrello = document.querySelector("#carrello");

const chiudi_button_accedi = document.querySelector("#chiudi_accedi");
const chiudi_button_contattaci = document.querySelector("#chiudi_contattaci");
const chiudi_button_carrello = document.querySelector("#chiudi_carrello");

const blur_div = document.createElement("div");                                     //div per sfondo sfocato

accedi.addEventListener('click', onModalClick);
contattaci.addEventListener('click', onModalClick);
carrello.addEventListener('click', onModalClick);


chiudi_button_accedi.addEventListener('click', onChiudiClick); 
chiudi_button_contattaci.addEventListener('click', onChiudiClick); 
chiudi_button_carrello.addEventListener('click', onChiudiClick); 



//lower navbar sub-sections
const lowerNav_flexItem = document.querySelectorAll(".lower_navbar .flex-item"); 

for(let element of lowerNav_flexItem)                                              //Assegnazione di EventListener a ogni flex-item
{
    element.addEventListener('mouseenter', lower_navbar_sub);                      //Evento entrata mouse
    element.addEventListener('mouseleave', lower_navbar_sub);                      //Evento uscita mouse
}


//navbar fissa
window.onscroll = function() {fixed_navbar()};

const navbar = document.querySelector("#moving_navbar");
let sticky = navbar.offsetTop;


