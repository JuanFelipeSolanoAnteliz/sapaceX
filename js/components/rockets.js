
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
            <h1>${element.name}</h1>
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
                                <p>420 kN</p>
                                <p>94.000 Lbf</p>
                            </div>
                        </div>
                        
                        <article class="cat">
                            <img src="./storage/img/jetpack cat.gif" alt="">
                        </article>
                        
                        <div class="progress-bar">
                            <div>
                                <strong>Atmospheric acceleration</strong>
                                <p>23.60 % </p>
                                <p>420 kN</p>
                                <p>94.000 Lbf</p>
                            </div>
                        </div>
                    </div>
                        
                        
                    </div>
                </section>
                <section class="main__content">
                    <article class="card">
                        
                        <div class="asd"></div>
                        
                        <h3>Information</h3>
                        
                        <span class="line"></span>
                        
                        <div class="content__information">
                            <div class="features__information">
                                <small>Type</small>
                                <span>rocket</span>
                            </div>
                        </div>

                    </article>
                    <article class="carousel">
                        <div class="image__countain">
                            <img src="" alt="">
                        </div>

                        <div class="image__countain">
                            <img src="" alt="">
                        </div>

                        <div class="image__countain">
                            <img src="" alt="">
                        </div>
                    </article>
                    <article class="card">
                        <div class="asd"></div>
                        
                        <h3>Information</h3>
                        
                        <span class="line"></span>
                        
                        <div class="content__information">
                            <div class="features__information">
                                <small>Type</small>
                                <span>rocket</span>
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
                        <h3>Title</h3>
                        <progress value="30" max="100"></progress>
                    </div>
                    <small class="cifras"> 1232.1003</small>
                </div>

                <div class="features">
                    <div class="progressbar">
                        <h3>Title</h3>
                        <progress value="30" max="100"></progress>
                    </div>
                    <small class="cifras"> 1232.1003</small>
                </div>

                <div class="features">
                    <div class="progressbar">
                        <h3>Title</h3>
                        <progress value="30" max="100"></progress>
                    </div>
                    <small class="cifras"> 1232.1003</small>
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

