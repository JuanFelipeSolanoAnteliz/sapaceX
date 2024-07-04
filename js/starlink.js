
import { oneStarlink } from "./module/app.js";
import { starlinkContent } from "./components/starlink.js";
import { paginationButtons } from "./components/pagination.js";

let data = await oneStarlink(1);
let docs = data.docs;
console.log(docs);



let body = document.querySelector("#body");
body.innerHTML = await starlinkContent(docs);

let number__page = document.querySelector("#number__page");
number__page.innerHTML = await paginationButtons(data);


