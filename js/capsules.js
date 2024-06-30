import {oneCapsule} from "./module/app.js"
import { capsuleContent } from "./components/capsules.js";


let first = await oneCapsule(1)
let docs = first.docs

console.log (docs);

let body = document.querySelector("#body");
console.log (body);

let defaultCapsule = await capsuleContent(docs)
body.innerHTML = defaultCapsule;



