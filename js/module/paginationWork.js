
export const changePage = async (elemento, body, dataPage, bodyPlantilla) => {
    elemento.addEventListener('click', async (e) => {
        if (e.target.tagName === 'BUTTON') {
            let pagina = e.target.id;
            let data = await dataPage(pagina);
            let contentSwitch = data.docs
            let plantilla = await bodyPlantilla(contentSwitch);
            body.innerHTML = plantilla; 
        }
    });
};