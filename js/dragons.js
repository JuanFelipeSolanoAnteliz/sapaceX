
import { dragonsContent } from "./components/dragons.js";
import { oneDragon } from "./module/app.js";
import { paginationButtons } from "./components/pagination.js";

let fisrtDragon = await oneDragon(1);
let docs = fisrtDragon.docs;

let currentPage = 1;
let maxPag = fisrtDragon.totalDocs;

let body = document.querySelector("#body");
body.innerHTML = await dragonsContent(docs);

let number__page = document.querySelector("#number__page");
number__page.innerHTML = await paginationButtons(fisrtDragon);

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
    changePage(body,oneDragon,dragonsContent,paginationButtons,maxPag);   
}
funcion();

