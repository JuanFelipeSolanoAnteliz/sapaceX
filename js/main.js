
import {rocketsPage, allRockets} from "./module/app.js"
import { rocketPageContent,InnerPagination } from "./components/rockets.js";


let alldata=await allRockets()
let data = await rocketsPage(1);
let docs = data.docs;

console.log(docs)

let body = document.querySelector("#body");
body.innerHTML = await rocketPageContent(docs);

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
            body.innerHTML = '';
            body.innerHTML += rocketCoso;
            // console.log(rocketContent)
            await reloadEventPages();
        }
    })
}

await reloadEventPages();


