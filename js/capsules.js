import {oneCapsule} from "./module/app.js"
import { capsuleContent } from "./components/capsules.js";
// import { changePage } from "./main.js";
import { paginationButtons } from "./components/pagination.js"


let first = await oneCapsule(1)
let docs = first.docs

let maxPag = first.totalDocs
console.log (docs);

let body = document.querySelector("#body");
console.log (body);

let defaultCapsule = await capsuleContent(docs)
body.innerHTML = defaultCapsule;

let number__page = document.querySelector("#number__page")
number__page.innerHTML = await paginationButtons(first)


let pagination = document.querySelector("#pagination")


let currentPage = 1;

    const changePage = async (body, dataPage, bodyPlantilla,paginationButtons,maxPag,imagenes) => {
        let elemento = document.querySelector("#pagination")
        elemento.addEventListener('click', async (e) => {
            if (e.target.tagName === 'BUTTON') {
                currentPage = parseInt(e.target.id);
                let data = await dataPage(currentPage);
                let contentSwitch = data.docs
                let plantilla = await bodyPlantilla(contentSwitch);
                let innerPages = await paginationButtons(data);
                body.innerHTML = plantilla;
                // console.log (plantilla);
                document.querySelector("#number__page").innerHTML = innerPages;
                
                
                if(imagenes){
                    let img = await rocketsImage(pagina)
                    let pageImage = await innerImages(img);
                    document.querySelector(".carousel").innerHTML = pageImage;
                }
                funcion();
            }else if(e.target.tagName === 'ARTICLE' && e.target.id === 'Next'){
                if(currentPage >= maxPag ){
                    console.log(currentPage)
                    let data = await dataPage(currentPage);
                    let contentSwitch = data.docs
                    let plantilla = await bodyPlantilla(contentSwitch);
                    let innerPages = await paginationButtons(data);
                    body.innerHTML = plantilla;
                    console.log (plantilla);
                    document.querySelector("#number__page").innerHTML = innerPages;
                    
                    if(imagenes){
                        let img = await rocketsImage(pagina)
                        let pageImage = await innerImages(img);
                        document.querySelector(".carousel").innerHTML = pageImage;
                    }
                    currentPage = 0
                    funcion();
                }else if(currentPage < maxPag ){}
                currentPage += 1
                console.log(currentPage)
                let data = await dataPage(currentPage);
                    let contentSwitch = data.docs
                    let plantilla = await bodyPlantilla(contentSwitch);
                    let innerPages = await paginationButtons(data);
                    body.innerHTML = plantilla;
                    // console.log (plantilla);
                    document.querySelector("#number__page").innerHTML = innerPages;
                    
                    if(imagenes){
                        let img = await rocketsImage(pagina)
                        let pageImage = await innerImages(img);
                        document.querySelector(".carousel").innerHTML = pageImage;
                    }
                    funcion();
            }else if(e.target.tagName === 'ARTICLE' && e.target.id === 'Prev'){
                if(currentPage <= 1){
                    console.log('hola')
                    let data = await dataPage(currentPage);
                    let contentSwitch = data.docs
                    let plantilla = await bodyPlantilla(contentSwitch);
                    let innerPages = await paginationButtons(data);
                    body.innerHTML = plantilla;
                    console.log (plantilla);
                    document.querySelector("#number__page").innerHTML = innerPages;
                    
                    if(imagenes){
                        let img = await rocketsImage(pagina)
                        let pageImage = await innerImages(img);
                        document.querySelector(".carousel").innerHTML = pageImage;
                    }
                    currentPage = maxPag+1;
                    funcion();
                }else if(currentPage <= maxPag ){}
                currentPage -= 1
                console.log(currentPage)
                let data = await dataPage(currentPage);
                    let contentSwitch = data.docs
                    let plantilla = await bodyPlantilla(contentSwitch);
                    let innerPages = await paginationButtons(data);
                    body.innerHTML = plantilla;
                    // console.log (plantilla);
                    document.querySelector("#number__page").innerHTML = innerPages;
                    
                    if(imagenes){
                        let img = await rocketsImage(pagina)
                        let pageImage = await innerImages(img);
                        document.querySelector(".carousel").innerHTML = pageImage;
                    }
                    funcion();
            }
        });
    };


    const funcion = () =>{
        // let elemento = document.querySelector("#pagination")
        changePage(body,oneCapsule,capsuleContent,paginationButtons,maxPag);   
    }
    funcion();

