import { oneRoad } from "./module/app.js";
import { roadContent } from "./components/roadster.js";
import { paginationButtons } from "./components/pagination.js";

let data = await oneRoad();
let docs = [data]
console.log(data)

let currrentPage = 1;
let maxPag = data.totalDocs;

let body = document.querySelector("#body")
body.innerHTML = await roadContent(docs);



        