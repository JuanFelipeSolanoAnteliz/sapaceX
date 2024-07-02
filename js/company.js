import { dataCompany } from "./module/app.js";
import { companyContent } from "./components/company.js";
import {paginationButtons} from "./components/pagination.js";

let data =await dataCompany();
let list = [data];

let body = document.querySelector("#body");
body.innerHTML = await companyContent(list);