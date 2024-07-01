

export const landContent = async (jsonDocs) =>{
    let plantilla = '' ;
    jsonDocs.forEach(element => {
        plantilla +=/*html*/`
        <img class="bg" src="../storage/img/bg_planets.svg" alt="">
        <header id="header" class="header">
            <h1>  element.serial </h1>
        </header>
        <main class="main">
            <section class="main__section__content">
                <!-- -----------------------------side bar left---------------------------------- -->
                <article class="capusles__left">
                    <div class="id__capsula">
                        <div id="hader__info">
                            Launches
                    </div>
                    <div id="content">
                            ${Array.isArray(element.launches) && element.launches.length > 0 ? element.launches.map( launch =>`<p>${launch}</p>`).join('') : `<p></p>`}
                        </div>

                </article>
                <!-- -----------------------------side bar left---------------------------------- -->

                <!-- -------------------------------- center ------------------------------------ -->
                <article class="center__content">
                    <section class="progressbar__round">   
                        
                        </div>
                        
                            <article class="cat">
                                <img src="../storage/img/landpads2.gif">
                            </article>
                        
                        </div>
                            
                            
                        </div>
                    </section>
                    <section class="main__content">
                    
                        <div class="launches">
                            <p>ID</p>
                            <p>  ${element.id} </p>
                        </div>

        
                    </section>
                </article>
                <!-- -------------------------------- center ------------------------------------ -->

                <!-- ----------------------------- sidebar rigth -------------------------------- -->
                <article class="sidebar__rigth">
                
                    <div class="right__tags">
                        <p class="hader__info">Reuse count</p>
                        <p class="content__rigth">  element reuse_count </p>
                    </div>
                    <div class="right__tags">
                        <p class="hader__info">water landings</p>
                        <p class="content__rigth">  element water_landings </p>
                    </div>
                    <div class="right__tags">
                        <p class="hader__info">land landings</p>
                        <p class="content__rigth">  element land_landings </p>
                    </div>

                </article>
                <!-- ----------------------------- sidebar rigth -------------------------------- -->
                
            </section>
        </main>

        <footer class="footer">
            <section class="footer__section">
                <a href="../index.html">
                    <img src="../storage/img/rocket-turned-to-upper-right-svgrepo-com.svg" alt="" style="height: 60%;">
                    <p>Rockets</p>
                </a>
                <a href="views/section.html">
                    <img src="../storage/img/capsule-space-capsule-svgrepo-com.svg" style="height: 60%;" alt="">
                    <p>Capsules</p>
                </a>
                <a href="">
                    <img src="../storage/img/cpu-svgrepo-com.svg" style="height: 60%;" alt="">
                    <p> Cores</p>
                </a>
                <a href="#">
                    <img src="" style="height: 60%;" alt="">
                    <p> section</p>
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
        `;
    });
    return plantilla; 
}