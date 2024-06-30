
import {rocketsPage, allRockets, rocketsImage, allCapsules} from "./module/app.js"
import { rocketPageContent,innerImages } from "./components/rockets.js";
import {changePage} from "./module/paginationWork.js"
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

let pageCurrent = 1;
// ----------------------------------------------------------------- fin Pagination------------------------------------------------------------------------
changePage(pagination,body,rocketsPage,rocketPageContent);

// ------------------------------------------------------------------- footer ------------------------------------------------------------------------
const reloadFooterEvent = ()=>{


    console.log('All reloaded')
    let footer__section = document.querySelector(".footer__section")
    console.log(footer__section)

    footer__section.addEventListener('click', async (e)=>{
        if(e.target.tagName === 'IMG' || e.target.tagName === 'P'){
            let a = e.target.closest('a');
            if(a){
                let nameRedirect = a.querySelector('p');
                if(nameRedirect.textContent === 'Capsules'){
                    let data =  await rocketsPage(1);
                    let init = data.docs
                    let content = await rocketPageContent(init)
                    body.innerHTML = content;
                    reloadFooterEvent();
                }
                else if(nameRedirect.textContent === 'Rockets'){

                    let data =  await rocketsPage(1);
                    let init = data.docs
                    let content = await rocketPageContent(init)
                    body.innerHTML = content;
                    let carousel = document.querySelector(".carousel");
                    carousel.innerHTML = await innerImages(img);
                    reloadFooterEvent();
                };
            };
        };
    })

}
reloadFooterEvent();

