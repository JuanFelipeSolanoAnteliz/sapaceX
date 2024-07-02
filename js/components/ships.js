

export const shipContent = async(jsonDocs)=>{
    let plantilla = '';

    jsonDocs.forEach(element => {
        plantilla +=/*html*/`
        <img class="bg" src="../storage/img/bg_planets.svg" alt="">
        <header id="header" class="header">
            <h1> ${(element.name).toUpperCase()} </h1>
        </header>
        <main class="main">
            <section class="main__section__content">
                <!-- -----------------------------side bar left---------------------------------- -->
                <article class="capusles__left">
                    <div class="id__capsula">
                        <div id="hader__info">
                            Info
                    </div>
                    <div class="intercalado">
                        <p><span>Legacy id:</span> <span>${element.legacy_id}</span></p>
                        <p><span>Model:</span> <span>${element.model === null ? 'none': element.model}</span></p>
                        <p><span>Type:</span> <span>${element.type  === null ? 'none':element.type}</span></p>
                        <p><span>roles:</span> <span>${element.roles && element.roles.length > 0 ? element.roles.join(', ') : ''}</span></p>
                        <p><span>Imo</span> <span>${element.imo === null ? 'none': element.imo }</span></p>
                        <p><span>Mmsi</span> <span>${element.mmsi === null ? 'none':element.mmsi }</span></p>
                        <p><span>Abs</span> <span>${element.abs === null ? 'none': element.abs }</span></p>
                        <p><span>Class</span> <span>${element.class === null ? 'none':element.class }</span></p>
                    </div>

                </article>
                <!-- -----------------------------side bar left---------------------------------- -->

                <!-- -------------------------------- center ------------------------------------ -->
                <article class="center__content">
                    <section class="progressbar__round">   
                        
                        </div>
                        
                            <article class="cat">
                            <img src="${element.image  === null ? '../storage/img/shipasd.jpg' : element.image }" referrerpolicy="no-referrer">
                            </article>
                        
                        </div>
                            
                            
                        </div>
                    </section>
                    <section class="main__content">
                    
                        <div class="launches">
                            <p>ID</p>
                            <p>  ${element.id }</p>
                        </div>

                        <div class="launches">
                        <p>launches</p>
                        <div class="intercalado">
                                <p></p>
                                ${Array.isArray(element.launches) && element.launches.length > 0 ? element.launches.map(launch =>`<p>${launch}</p>`).join(''): `<p>Here aren't any Launc :/</p>`}
                            </div>
                            
                        </div>
        
                    </section>
                </article>
                <!-- -------------------------------- center ------------------------------------ -->

                <!-- ----------------------------- sidebar rigth -------------------------------- -->
                <article class="sidebar__rigth">
                    <div class="id__capsula">
                        <div id="hader__info" style="color: #fff">Info</div>
                    </div>
                    <div class= "intercalado" >
                        <p><span>Mass kg</span> <span>${element.mass_kg === null ? 'none': element.mass_kg }</span></p>
                        <p><span> Status: </span> <span>${element.status === null || element.status === "" ? 'none': element.status} </span></p>
                        <p><span>Speed kn: </span> <span>${element.speed_kn === null ? 'none': element.speed_kn}</span></p>
                        <p><span>Course deg: </span> <span>${element.course_deg === null ? 'none': element.course_deg}</span></p>
                        <p><span>Mass lbs: </span> <span>${element.mass_lbs == null ? 'none': element.mass_lbs}</span></p>
                        <p><span>Built: </span> <span>${element.year_built === null ? 'none' : element.year_built}</span></p>
                        <p><span>Home port: </span> <span>${element.home_port === null ? 'none' : element.home_port }</span></p>
                        <p><span>Latitude: </span> <span>${element.latitude === null ? 'none' : element.latitude }</span></p>
                        <p><span>Longitude:</span> <span>${element.longitude === null ? 'none' : element.longitude }</span></p>
                    </div>
                    
                </article>
                <!-- ----------------------------- sidebar rigth -------------------------------- -->
                
            </section>
        </main>

        <footer class="footer">
        <section class="footer__section">
        <a href="../index.html">
            <img src="../storage/img/rocket-turned-to-upper-right-svgrepo-com.svg" alt="" style="height: 60%;">
            <p>rockets</p>
        </a>
        <a href="section.html">
            <img src="../storage/img/capsule-space-capsule-svgrepo-com.svg" style="height: 60%;" alt="">
            <p>capsules</p>
        </a>
        <a href="cores.html">
            <img src="../storage/img/cpu-svgrepo-com.svg" style="height: 60%;" alt="">
            <p> cores</p>
        </a>
        <a href="crew.html">
            <img src="" style="height: 60%;" alt="">
            <p> crew</p>
        </a>
        <a href="launches.html">
            <img src="" style="height: 60%;" alt="">
            <p>launches</p>
        </a>
        <a href="landpads.html">
            <img src="" style="height: 60%;" alt="">
            <p>landpads</p>
            </a>
        <a href="ships.html">
            <img src="" style="height: 60%;" alt="">
            <p>ships</p>
        </a>
        <a href="company.html">
            <img src="" style="height: 60%;" alt="">
            <p>company</p>
        </a>
    
        <a href="dragons.html">
            <img src="" style="height: 60%;" alt="">
            <p>dragons</p>
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
};