
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

let pagination = document.querySelector("#pagination")

let number__page = document.querySelector("#number__page");
number__page.innerHTML =  await paginationButtons(data)

let carousel = document.querySelector(".carousel");
carousel.innerHTML = await innerImages(img);


const changePage = async (elemento, body, dataPage, bodyPlantilla,paginationButtons,number__page,imagenes) => {
    elemento = document.querySelector("#pagination")
    elemento.addEventListener('click', async (e) => {
        if (e.target.tagName === 'BUTTON') {
            let pagina = e.target.id;
            let data = await dataPage(pagina);
            let contentSwitch = data.docs
            let plantilla = await bodyPlantilla(contentSwitch);
            body.innerHTML = plantilla;
            let innerPages = await paginationButtons(data);
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
    changePage(pagination,body,rocketsPage,rocketPageContent,paginationButtons,number__page,carousel);
    
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

