
export const paginationButtons = async(json)=>{
    let totalItems = json.totalDocs;
    let plantilla = '';
    for(let i = 1; i <= totalItems; i++){
        plantilla +=/*html*/`
        <button id="${i}" class="buttons">${i}</button>
        `;
    }
    return plantilla;
}