
export const payContent = async (docs)=>{
    let plantilla = ``;
    docs.forEach(element => {
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
                            Launches
                    </div>
                    <div class="intercalado">
                    <p><span>Mean anomaly: </span> <span>${element.mean_anomaly === null ? 'none': element.mean_anomaly}</span></p>
                    <p><span>Arg of pericenter: </span> <span>${element.arg_of_pericenter  === null ? 'none': element.arg_of_pericenter }</span></p>
                    <p><span>raan: </span> <span>${element.raan  === null ? 'none':element.raan }</span></p>
                    <p><span>mean motion: </span> <span>${element.mean_motion=== null ? 'none': element.mean_motion }</span></p>
                    <p><span>epoch: </span> <span>${element.epoch === null ? 'none': element.epoch }</span></p>
                    <p><span>lifespan years: </span> <span>${element.lifespan_years  === null ? 'none': element.lifespan_years }</span></p>
                    <p><span>period min: </span> <span>${element.period_min === null ? 'none': element.period_min }</span></p>
                    <p><span>inclination deg:</span> <span> ${element.inclination_deg  === null ? 'none': element.inclination_deg } </span></p>
                    <p><span>apoapsis km: </span> <span> ${element.apoapsis_km}</span></p>
                    <p><span> periapsis km: </span> <span> ${element.periapsis_km}</span></p>

                    </div>
    
                </article>
                <!-- -----------------------------side bar left---------------------------------- -->
    
                <!-- -------------------------------- center ------------------------------------ -->
                <article class="center__content">
                    <section class="progressbar__round">   
                        
                        </div>
                        
                            <article class="cat">
                            <img src="../storage/img/pay.png" >
                            </article>
                        
                        </div>
                            
                            
                        </div>
                    </section>
                    <section class="main__content">
                    
                        <div class="launches">
                            <p>ID</p>
                            <p>  ${element.id} </p>
                        </div>
    
                        <div class="launches">
                            <p>Launch</p>
                            <p>${element.launch} </p>
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
                        <p><span > axis_km: </span> <span>${element.semi_major_axis_km === null ? 'none': element.semi_major_axis_km}</span></p>
                        <p><span>longitude: </span> <span>${element.longitude === null ? 'none': element.longitude}</span></p>
                        <p><span>reference_system</span> <span>${element.reference_system}</span></p>
                        <p><span>regime: </span> <span>${element.regime}</span></p>
                        <p><span>region:</span> <span>${element.region}</span></p>
                        <p><span>orbit:</span> <span>${element.orbit}</span></p>
                        <p><span>mass kg:</span> <span>${element.mass_kg}</span></p>
                        <p><span>type: </span> <span>${element.type}</span></p>
                        <p><span>customers: </span> <span>${element.customers[0]}</span></p>
                        <p><span>manufacturers: </span> <span>${element.manufacturers[0]}</span></p>
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
            <img src="../storage/img/profile.svg" style="height: 60%;" alt="">
            <p> crew</p>
        </a>
        <a href="launches.html">
            <img src="../storage/img/launchFooter.svg" style="height: 60%;" alt="">
            <p>launches</p>
        </a>
        <a href="landpads.html">
            <img src="../storage/img/land.svg" style="height: 60%;" alt="">
            <p>landpads</p>
            </a>
        <a href="ships.html">
            <img src="../storage/img/ship.svg" style="height: 60%;" alt="">
            <p>ships</p>
        </a>
        <a href="company.html">
            <img src="../storage/img/company.svg" style="height: 60%;" alt="">
            <p>company</p>
        </a>
    
        <a href="dragons.html">
            <img src="../storage/img/dragonsFoot.svg" style="height: 60%;" alt="">
            <p>dragons</p>
        </a>
    
        <a href="history.html">
            <img src="../storage/img/histo.svg" style="height: 60%;" alt="">
            <p>history</p>
        </a>
    
        
        <a href="launchpads.html">
            <img src="../storage/img/asd.svg" style="height: 60%;" alt="">
            <p>launchpads</p>
        </a>
        <a href="payloads.html">
            <img src="../storage/img/payf.svg" style="height: 60%;" alt="">
            <p>payloads</p>
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