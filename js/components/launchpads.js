
export const launchpadsContent =  async (docs) =>{
    let plantilla = '';

    docs.forEach(element => {
        plantilla +=/*html*/`
        <img class="bg" src="../storage/img/bg_planets.svg" alt="">
        <header id="header" class="header">
            <h1> ${element.name} </h1>
        </header>
        <main class="main">
            <section class="main__section__content">
                <!-- -----------------------------side bar left---------------------------------- -->
                <article class="capusles__left">
                <div class="id__capsula">
                    <div id="hader__info">Rocket</div>
                </div>
                <div class="intercalado">
                    ${Array.isArray(element.launches) && element.launches.length > 0 ? element.launches.map(launch => `<p><span> Launch:</span> <span>${launch}</span></p>`).join(''): `<p><span> Launch:</span> <span>none</span></p>`} 
                    <p><span> Time zone:</span> <span>${element.timezone}</span></p>
                    ${Array.isArray(element.rockets) && element.rockets.length > 0 ? element.rockets.map(rocket => `<p><span> Launch:</span> <span>${rocket}</span></p>`).join(''): ``} 
                    <p><span> Launch successes:</span> <span>${element.launch_successes}</span></p>
                    <p><span> Launch attempts:</span> <span>${element.launch_attempts}</span></p>
                    <p><span> Region:</span> <span>${element.region}</span></p>
                    
                </div>
            
                </article>
                <!-- -----------------------------side bar left---------------------------------- -->
        
                <!-- -------------------------------- center ------------------------------------ -->
                <article class="center__content">
                    <section class="progressbar__round">   
                        
                        </div>
                        
                            <article class="cat">
                            <img src="${element.images.large[0]}"referrerpolicy="no-referrer">
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
                            <p>Details</p>
                            <p>${element.details} </p>
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
                        <p><span > Full name: </span> <span>${element.full_name}</span></p>
                        <p><span>Status</span> <span>${element.status}</span></p>
                        <p><span>locality</span> <span>${element.locality}</span></p>
                        <p><span>region</span> <span>${element.region}</span></p>
                        <p><span>latitude</span> <span>${element.latitude}</span></p>
                        <p><span>longitude</span> <span>${element.longitude}</span></p>
                        <p><span>launch attempts</span> <span>${element.launch_attempts}</span></p>
                        <p><span>Launch successes</span> <span>${element.launch_successes}</span></p>
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
