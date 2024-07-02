
import {rocketsPage, allRockets, rocketsImage, allCapsules} from "./module/app.js"
import { rocketPageContent,innerImages } from "./components/rockets.js";
// import {changePage} from "./module/paginationWork.js"
import { paginationButtons } from "./components/pagination.js"

let alldata=await allRockets()
let data = await rocketsPage(1);
let docs = data.docs;
let img = await rocketsImage(1)
let allCapsu = await allCapsules();

console.log(alldata)




let body = document.querySelector("#body");
body.innerHTML = await rocketPageContent(docs);

let number__page = document.querySelector("#number__page");
number__page.innerHTML =  await paginationButtons(data);

let pagination = document.querySelector("#pagination")


console.log(number__page)

let carousel = document.querySelector(".carousel");
carousel.innerHTML = await innerImages(img);


let maxPag = data.totalDocs;
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
                let img = await rocketsImage(currentPage)
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
                    let img = await rocketsImage(currentPage)
                    let pageImage = await innerImages(img);
                    document.querySelector(".carousel").innerHTML = pageImage;
                }
                currentPage = 0
                funcion();
            }else if(currentPage < maxPag ){}
            currentPage += 1
            console.log(currentPage)
            let data = await dataPage(currentPage);
            console.log(data)

                let contentSwitch = data.docs
                let plantilla = await bodyPlantilla(contentSwitch);
                let innerPages = await paginationButtons(data);
                body.innerHTML = plantilla;
                // console.log (plantilla);
                document.querySelector("#number__page").innerHTML = innerPages;
                
                if(imagenes){
                    let img = await rocketsImage(currentPage)
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
                    let img = await rocketsImage(currentPage)
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
                    let img = await rocketsImage(currentPage)
                    let pageImage = await innerImages(img);
                    document.querySelector(".carousel").innerHTML = pageImage;
                }
                funcion();
        }
    });
};

const funcion = () =>{
    // let elemento = document.querySelector("#pagination")
    changePage(body,rocketsPage,rocketPageContent,paginationButtons,maxPag,carousel);   
}
funcion();
// ----------------------------------------------------------------- fin Pagination------------------------------------------------------------------------

// ------------------------------------------------------------------- footer ------------------------------------------------------------------------
// const reloadFooterEvent = ()=>{
  

//     console.log('All reloaded')
//     let footer__section = document.querySelector(".footer__section")
//     console.log(footer__section)

//     footer__section.addEventListener('click', async (e)=>{
//         if(e.target.tagName === 'IMG' || e.target.tagName === 'P'){
//             let a = e.target.closest('a');
//             if(a){
//                 let nameRedirect = a.querySelector('p');
//                 if(nameRedirect.textContent === 'Capsules'){
//                     let data =  await rocketsPage(1);
//                     let init = data.docs
//                     let content = await rocketPageContent(init)
//                     body.innerHTML = content;
//                     let innerPages = await paginationButtons(data)
//                     document.querySelector("#number__page").innerHTML = innerPages; 
//                     reloadFooterEvent();
//                     funcion();
//                     console.log('asd')
//                 }
//                 else if(nameRedirect.textContent === 'Rockets'){

//                     let data =  await rocketsPage(1);
//                     let init = data.docs
//                     let content = await rocketPageContent(init)
//                     body.innerHTML = content;
//                     let carousel = document.querySelector(".carousel");
//                     carousel.innerHTML = await innerImages(img);
//                     let innerPages = await paginationButtons(data)
//                     document.querySelector("#number__page").innerHTML = innerPages; 
//                     reloadFooterEvent();
//                     funcion();
//                     console.log('asd')
 
//                 };
//             };
//         };
//     })

// }
// reloadFooterEvent();

