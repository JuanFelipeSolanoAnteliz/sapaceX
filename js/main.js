
import {rocketsPage, allRockets, rocketsImage} from "./module/app.js"
import { rocketPageContent,InnerPagination,innerImages } from "./components/rockets.js";


let alldata=await allRockets()
let data = await rocketsPage(1);
let docs = data.docs;
let img = await rocketsImage(1)


console.log(data.docs.engines)
// console.log(docs.first_flight)

let body = document.querySelector("#body");
body.innerHTML = await rocketPageContent(docs);

let carousel = document.querySelector(".carousel");
carousel.innerHTML = await innerImages(img);

const reloadEventPages = async()=>{
    let dataRockets = await allRockets();
    let rockets = dataRockets.docs
    console.log(rockets)

    let pagination = document.querySelector(".pagination");
    pagination.innerHTML = await InnerPagination(alldata);

    console.log(pagination)

        
        pagination.addEventListener('click',async(e)=>{
            // console.log(e.target.tagName)
            if(e.target.tagName === 'BUTTON'){
                
                let buttonId = e.target.id;
                let newRocket = await rocketsPage(buttonId);
                let rocketContent = newRocket.docs;
                let rocketCoso = await rocketPageContent(rocketContent);
                
                let img = await rocketsImage(buttonId);
                let imgLinks = await innerImages(img)
                
                console.log(imgLinks)
                body.innerHTML = '';
                body.innerHTML += rocketCoso;
                let carousel = document.querySelector(".carousel");
                carousel.innerHTML = ''
                carousel.innerHTML += imgLinks;
                
                await reloadEventPages();
            }
        })
}

await reloadEventPages();

