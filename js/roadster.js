import { oneRoad } from "./module/app.js";
import { roadContent } from "./components/roadster.js";
import { paginationButtons } from "./components/pagination.js";

let data = await oneRoad(1);
let docs = data.docs

let currrentPage = 1;
let maxPag = data.totalDocs;

let body = document.querySelector("#body")
body.innerHTML = await roadContent(1);

let number__page = document.querySelector(("#number__page"));
number__page.innerHTML  = await paginationButtons(data);
        