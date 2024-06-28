
import { rocketsPage, allRockets } from "../module/app.js"
// let data = await rocketsPage(1)
// let docs = data.docs;
export const rocketPageContent = async (docs)=>{
    // console.log(docs)
    let plantilla = '';
    docs.forEach(element => {
        // console.log(element)
        plantilla += /*html*/`
        <header id="header" class="header">
            <h1>${element.name.toUpperCase()}</h1>
        </header>

        <main class="main">
        <!-- <img class="background" src="./storage/img/giphy.webp" alt=""> -->
        <section class="main__section__content">
            <!-- -----------------------------side bar left---------------------------------- -->
            <article class="sidebar__left">
                <div class="description__content">
                    <div class="title__section">
                        <div class="img">
                            <img src="./storage/img/mech.svg" alt="">
                        </div>
                        <h3 >Description</h3>
                    </div>
                    <small>${element.description}</small>
                </div>
                <div class="description__content">
                    <div class="description__content">
                        <div class="title__section">
                            <div class="img">
                                <img src="./storage/img/mech.svg" alt="">
                            </div>
                            <h3 >The estimated cost per rocket launch</h3>
                        </div>
                    <small>  $${element.cost_per_launch}</small>
                </div>

                <div class="description__content">
                    <div class="description__content">
                        <div class="title__section">
                            <div class="img">
                                <img src="./storage/img/mech.svg" alt="">
                            </div>
                            <h3 >First Flight</h3>
                        </div>
                    <small>${element.first_flight}</small>
                </div>                

                <div class="description__content">
                    <div class="description__content">
                        <div class="title__section">
                            <div class="img">
                                <img src="./storage/img/mech.svg" alt="">
                            </div>
                            <h3>Read more about the coete</h3>
                        </div>
                    <small>${element.wikipedia}</small>
                </div>
            </article>
            <!-- -----------------------------side bar left---------------------------------- -->

            <!-- -------------------------------- center ------------------------------------ -->
            <article class="center__content">
                <section class="progressbar__round">

                
                        <div class="progress-bar">
                            <div>
                                <strong>Atmospheric acceleration</strong>
                                <p>23.60 % </p>
                                <p>${element.engines.thrust_sea_level.kN} kN</p>
                                <p>${element.engines.thrust_sea_level.lbf} Lbf</p>
                            </div>
                        </div>
                        
                        <article class="cat">
                            <img src="./storage/img/jetpack cat.gif" alt="">
                        </article>
                        
                        <div class="progress-bar">
                            <div>
                                <strong>Speed in space</strong>
                                <p>23.60 % </p>
                                <p>${element.engines.thrust_vacuum.kN} kN</p>
                                <p>${element.engines.thrust_vacuum.lbf} Lbf</p>
                            </div>
                        </div>
                    </div>
                        
                        
                    </div>
                </section>
                <section class="main__content">
                    <article class="card">
                        
                        <div class="asd"></div>
                        
                        <h3>Rocket Information</h3>
                        
                        <span class="line"></span>
                        
                        <div class="content__information">
                            <div class="features__information">
                                <small>Type:</small>
                                <span>${element.type}</span>
                            </div>

                            <div class="features__information">
                                <small>rocket in service:</small>
                                <span>${element.active === false ? "Inactive" : "Active"}</span>
                            </div>

                            <div class="features__information">
                                <small>Number Stages: </small>
                                <span>${element.stages}</span>
                            </div>

                            <div class="features__information">
                                <small>Number of propellants: </small>
                                <span>0</span>
                            </div>

                            <div class="features__information">
                                <small>Landing Legs: </small>
                                <span>${element.landing_legs.number}</span>
                            </div>
                            
                            <div class="features__information">
                                <small>Landing Legs Material: </small>
                                <span>${element.landing_legs.material === null ? "none" : element.landing_legs.material }</span>
                            </div>

                        </div>

                    </article>
                    <article class="carousel">
                        
                        <div class="image__countain">
                                <img src="" alt="">
                        </div>
                    </article>
                        <article class="card">
                        <div class="asd"></div>

                        <h3>Engine Information</h3>
                        
                        <span class="line"></span>
                        
                        <div class="content__information">
                            <div class="features__information">
                                <small>Type: </small>
                                <span>${element.engines.type}</span>
                            </div>

                            <div class="features__information">
                                <small>version: </small>
                            <span>${element.engines.version}</span>
                        </div>
                        
                        <div class="features__information">
                            <small>Avabilityc: </small>
                            <span>${element.engines.layout}</span>
                        </div>
                        
                        <div class="features__information">
                            <small>Stage 1: </small>
                            <span>${element.engines.propellant_1}</span>
                        </div>

                        <div class="features__information">
                            <small>Stage 2: </small>
                            <span>${element.engines.propellant_2}</span>
                        </div>

                        </div>
                    </article>
                </section>
            </article>
            <!-- -------------------------------- center ------------------------------------ -->

            <!-- ----------------------------- sidebar rigth -------------------------------- -->
            <article class="sidebar__rigth">
                <div class="features">
                    <div class="progressbar">
                        <h3>Diameter: </h3>
                        <progress value="${element.diameter.meters}" max="100"></progress>
                    </div>
                    <small class="cifras">
                            <p>${element.diameter.meters} M</p>
                            <p>${element.diameter.feet} F</p>
                    </small>
                </div>

                <div class="features">
                    <div class="progressbar">
                        <h3>Low Earth Orbit: </h3>
                        <progress value="30" max="100"></progress>
                    </div>
                    <small class="cifras"> 
                        <p>${element.payload_weights[0].kg} KG</p>
                        <p>${element.payload_weights[0].lb} LB</p>
                    </small>
                </div>

                <div class="features">
                    <div class="progressbar">
                        <h3>Rocket height: </h3>
                        <progress value="30" max="100"></progress>
                    </div>
                    <small class="cifras">
                        <p>${element.height.meters} M</p>
                        <p>${element.height.feet} F</p>
                    </small>
                </div>

                <div class="features">
                <div class="progressbar">
                    <h3>Rocket weight: </h3>
                    <progress value="30" max="100"></progress>
                </div>
                    <small class="cifras">
                        <p>${element.mass.kg} KG</p>
                        <p>${element.mass.lb} LB</p>
                    </small>
                </div>

                <div class="features">
                <div class="progressbar">
                    <h3> Diameter Rocket shield: </h3>
                    <progress value="30" max="100"></progress>
                </div>
                    <small class="cifras">
                        <p>${element.second_stage.payloads.composite_fairing.diameter.meters} KG</p>
                        <p>${element.second_stage.payloads.composite_fairing.diameter.feet} LB</p>
                    </small>
                </div>

                <div class="features">
                <div class="progressbar">
                    <h3>Height Rocket shield: </h3>
                    <progress value="30" max="100"></progress>
                </div>
                    <small class="cifras">
                        <p>${element.second_stage.payloads.composite_fairing.height.meters} KG</p>
                        <p>${element.second_stage.payloads.composite_fairing.height.feet} LB</p>
                    </small>
                </div>

            </article>
            <!-- ----------------------------- sidebar rigth -------------------------------- -->
            
        </section>
    </main>

    <footer class="footer">
        <section class="footer__section">
            <a href="#">
                <img src="./storage/img/accelerate-svgrepo-com.svg" alt="" style="height: 70%;">
                <p> section</p>
            </a>
            <a href="#">
                <img src="" alt="">
                <p> section</p>
            </a>
            <a href="#">
                <img src="" alt="">
                <p> section</p>
            </a>
            <a href="#">
                <img src="" alt="">
                <p> section</p>
            </a>
            <a href="#">
                <img src="" alt="">
                <p> section</p>
            </a>

        </section>
        <article class=pagination__content>
          <div id="pagination" class="pagination"></div> 
        </article>
    </footer>
        `; 
    });
    return plantilla;
}



export const InnerPagination = async(data) =>{
    let plantilla = '';
    for(let i = 1; i <= data.docs.length; i++){
        plantilla +=/*html*/`
        <button id="${i}" class="buttons">${i}</button>
        `;
    }
    return plantilla;
}

let dataRockets = await allRockets();
let allItems = dataRockets.docs
let totalPages = allItems.length


export const innerImages = async(data)=>{
    let plantilla = ''
    let images = data.docs[0].flickr_images
    images.forEach(element => {
        plantilla +=/*html*/` 
        <div class="image__countain">
            <img src="${element}" referrerpolicy="no-referrer">
        </div>
        `;
    });
    console.log(plantilla)
    return plantilla;
}