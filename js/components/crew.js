
export const crewContent = async (docsJson) =>{
    let plantilla = '';
    docsJson.forEach(element => {
        plantilla += /*html*/`
        <img class="bg" src="../storage/img/bg_planets.svg" alt="">
        <header id="header" class="header">
            <h1>  ${(element.name).toUpperCase()}</h1>
        </header>
        <main class="main">
            <section class="main__section__content">
                <!-- -----------------------------side bar left---------------------------------- -->
                <article class="capusles__left">
                    <div class="id__capsula">
                        <div id="hader__info">
                        Agency
                        </div>
                        <div id="content">
                              ${element.agency}
                        </div>
                    </div>
    
                    <div class="id__capsula">
                        <div id="hader__info">
                            About 
                        </div>
                        <div id="content">
                            <a href=" ${element.wikipedia}">
                                Wikipedia 
                            </a> 
                        </div>
                    </div>
    
    
                    <div class="id__capsula">
                        <div id="hader__info">
                            Type
                        </div>
                        <div id="content">
                              element type 
                        </div>
                    </div>
                </article>
                <!-- -----------------------------side bar left---------------------------------- -->
    
                <!-- -------------------------------- center ------------------------------------ -->
                <article class="center__content">
                    <section class="progressbar__round">   
                        
                        </div>
                        
                            <article class="cat">
                                <img src="${element.image}" referrerpolicy="no-referrer">
                            </article>
                        
                        </div>
                            
                            
                        </div>
                    </section>
                    <section class="main__content">

                    </section>
                </article>
                <!-- -------------------------------- center ------------------------------------ -->
    
                <!-- ----------------------------- sidebar rigth -------------------------------- -->
                <article class="sidebar__rigth">
                   
                    <div class="right__tags">
                        <p class="hader__info">Launches</p>
                        <p class="content__rigth">${element.launches}</p>
                    </div>
                    <div class="right__tags">
                        <p class="hader__info">Status</p>
                        <p class="content__rigth">${element.status}</p>
                    </div>
                    <div class="right__tags">
                        <p class="hader__info">ID</p>
                        <p class="content__rigth">${element.id}</p>
                    </div>
    
                </article>
                <!-- ----------------------------- sidebar rigth -------------------------------- -->
                
            </section>
        </main>
    
        <footer class="footer">
            <section class="footer__section">
                <a href="../index.html">
                    <img src="../storage/img/rocket-turned-to-upper-right-svgrepo-com.svg" alt="" style="height: 60%;">
                    <p>ockets</p>
                </a>
                <a href="views/section.html">
                    <img src="../storage/img/capsule-space-capsule-svgrepo-com.svg" style="height: 60%;" alt="">
                    <p>capsules</p>
                </a>
                <a href="views/cores.html">
                    <img src="../storage/img/cpu-svgrepo-com.svg" style="height: 60%;" alt="">
                    <p> cores</p>
                </a>
                <a href="views/crew.html">
                    <img src="../storage/img/crewFooter.svg" style="height: 60%;" alt="">
                    <p> crew</p>
                </a>
                <a href="#">
                    <img src="" style="height: 60%;" alt="">
                    <p> section</p>
                </a>
    
            </section>
            <article class=pagination__content>
              <div id="pagination" class="pagination">
                <article id="Prev">Prev</article>
                    <section id="number__page" ></section>
                <article id="Next">Next</article>
              </div> 
            </article>
        </footer>
        `  
    });
    return plantilla;
}