
export const roadContent  = async (docs)=>{
    let plantilla = '';
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
                            Info
                    </div>
                    <div class="intercalado">
                        <p><span>launch Date: </span> <span>${element.launch_date_utc}</span></p>
                        <p><span>launch_date_unix: </span> <span>${element.launch_date_unix === null ? 'none': element.launch_date_unix}</span></p>
                        <p><span>launch_mass_kg: </span> <span>${element.launch_mass_kg  === null ? 'none':element.launch_mass_kg}</span></p>
                        <p><span>norad_id: </span> <span>${element.norad_id === null ? 'none': element.norad_id }</span></p>
                        <p><span>epoch_jd: </span> <span>${element.epoch_jd === null ? 'none':element.epoch_jd }</span></p>
                        <p><span>orbit_type: </span> <span>${element.orbit_type === null ? 'none': element.orbit_type }</span></p>
                        <p><span>apoapsis_au: </span> <span>${element.apoapsis_au === null ? 'none':element.apoapsis_au }</span></p>
                    </div>

                </article>
                <!-- -----------------------------side bar left---------------------------------- -->

                <!-- -------------------------------- center ------------------------------------ -->
                <article class="center__content">
                    <section class="progressbar__round">   
                        
                        </div>
                        
                            <article class="cat">
                            ${Array.isArray(element.flickr_images) && element.flickr_images.length > 0 ? element.flickr_images.map(image => `<div class="img__countain"> <img src="${image}"> </div>`).join('') : ''}
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
                        <p>Details</p>
                                <p>
                                    ${element.details}
                                </p>
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
                        <p><span>Mass kg</span> <span>${element.launch_mass_kg === null ? 'none': element.launch_mass_kg }</span></p>
                        <p><span> inclination: </span> <span>${element.inclination === null || element.inclination === "" ? 'none': element.status} </span></p>
                        <p><span>longitude: </span> <span>${element.longitude === null ? 'none': element.longitude}</span></p>
                        <p><span>periapsis arg: </span> <span>${element.periapsis_arg === null ? 'none': element.periapsis_arg}</span></p>
                        <p><span>period days: </span> <span>${element.period_days == null ? 'none': element.period_days}</span></p>
                        <p><span>speed kph: </span> <span>${element.speed_kph === null ? 'none' : element.speed_kph}</span></p>
                        <p><span>earth distance: </span> <span>${element.earth_distance_km === null ? 'none' : element.earth_distance_km }</span></p>
                        <p><span>mars distance: </span> <span>${element.mars_distance_km === null ? 'none' : element.mars_distance_km }</span></p>
                        <p><span>mars distance:</span> <span>${element.mars_distance_mi === null ? 'none' : element.mars_distance_mi }</span></p>
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
        
        <a href="roadster.html">
            <img src="../storage/img/road.svg" style="height: 60%;" alt="">
            <p>roadster</p>
        </a>
        
        <a href="starlink.html">
            <img src="../storage/img/satellite-space-svgrepo-com.svg" style="height: 60%;" alt="">
            <p>starlink</p>
        </a>
    
        </section>
        
    </footer>
        `;
    });
    return plantilla;
};