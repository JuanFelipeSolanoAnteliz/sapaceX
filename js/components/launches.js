export const launchContent = async (jsonDocs)=>{
    let plantilla= '';

    jsonDocs.forEach(element => {
        plantilla += /*html*/` 
        <img class="bg" src="../storage/img/bg_planets.svg" alt="">
        <header id="header" class="header">
            <h1>${(element.name).toUpperCase()}</h1>
        </header>
    
        <main class="main">
        <!-- <img class="background" src="./storage/img/giphy.webp" alt=""> -->
        <section class="main__section__content">
            <!-- -----------------------------side bar left---------------------------------- -->
            <article class="sidebar__left">
                <div class="description__content">
                    <div class="title__section">
                        <div class="img">
                            <img src="../storage/img/mech.svg" alt="">
                        </div>
                        <h3 >Webcast</h3>
                    </div>
                    <a href="${element.links.webcast}">
                    <small>🌐 Watch</small>
                    </a>
                </div>

    
                <div class="description__content">
                    <div class="description__content">
                        <div class="title__section">
                            <div class="img">
                                <img src="../storage/img/mech.svg" alt="">
                            </div>
                            <h3 >Info</h3>
                        </div>
                        <a href="${element.links.wikipedia}">
                            <small> 🗒️ Wikipedia </small>
                        </a>
                </div>                

                <div class="description__content">
                    <div class="description__content">
                        <div class="title__section">
                            <div class="img">
                                <img src="../storage/img/mech.svg" alt="">
                            </div>
                            <h3>Rocket</h3>
                        </div>
                            <small> ${element.rocket} </small>
                        </div>
                </div>   
                
                <div class="description__content">
                    <div class="description__content">
                        <div class="title__section">
                            <div class="img">
                                <img src="../storage/img/mech.svg" alt="">
                            </div>
                            <h3>Utc Date</h3>
                        </div>
                            <small> ${element.static_fire_date_utc} </small>
                        </div>

                <div class="description__content">
                    <div class="description__content">
                        <div class="title__section">
                            <div class="img">
                                <img src="../storage/img/mech.svg" alt="">
                            </div>
                            <h3>ID</h3>
                        </div>
                            <small> ${element.id} </small>
                        </div>

                </div>   


            </article>
            <!-- -----------------------------side bar left---------------------------------- -->
    
            <!-- -------------------------------- center ------------------------------------ -->
            <article class="center__content">
                <section class="progressbar__round">
    
                
                       
                        
                        <article class="cat">
                            <img src="../storage/img/spacexBlue.png" alt="">
                        </article>
                        
                       
                    </div>
                        
                        
                    </div>
                </section>
                <section class="main__content">
                    <article class="card">
                        
                        <div class="asd">
                            <h3>Fairings</h3>
                        
                            <div class="content__information">
                                <div class="features__information">
                                    <small>Reused:</small>
                                    <span>${element.fairings?.reused ?? ''}</span>
                                </div>

                                <div class="features__information">
                                    <small>Recovery attempt:</small>
                                    <span>${element.fairings?.recovery_attempt ?? ''}</span>
                                </div>

                                <div class="features__information">
                                    <small>recovered:</small>
                                    <span>${element.fairings?.recovered ?? ''}</span>
                                </div>
                                <div class="features__information">
                                    <small>ships:</small>
                                    <span>${element.fairings?.ships?? ''}</span>
                                </div>
                            </div>
                        </div>
                        <h3>Rocket Information</h3>
                        
                        <span class="line"></span>
                        
                        <div class="content__information">
                            <div class="features__information">
                                <small>Article:</small>
                                <a href="${element.links.article}">
                                <span>🗒️Read more</span>
                                </a>
                            </div>
    
                            <div class="features__information">
                                <small>Date Unix:</small>
                                <span>${element.static_fire_date_unix}</span>
                            </div>
    
                            <div class="features__information">
                                <small>Net: </small>
                                <span>${element.net === false ? "none":"Active"}</span>
                            </div>
    
                            <div class="features__information">
                                <small>Window: </small>
                                <span>${element.window}</span>
                            </div>
    
                        </div>
    
                    </article>
                    <article class="carousel">
                        
                        <div class="image__countain">
                        <div class="image__Setter">
                            ${element.links.patch.small ? `<img src="${element.links.patch.small}" style="  widht:100%; filter: drop-shadow(4px 4px 8px #474747);">` : `<img src="../storage/img/crew.png" style=" height: 100%; widht:100%; filter: drop-shadow(4px 4px 8px #474747);">`}
                        </div>
                      
                        </div>
                    </article>
                        <article class="card">
                        <div class="asd">
                            <h3>Reddit</h3>
                        
                            <div class="content__information">
                                <div class="features__information">
                                    <small>Campaign:</small>
                                    <a href="${element.links.reddit.campaign}">
                                        <span> 🗒️ click here </span>
                                    </a>
                                </div>

                                <div class="features__information">
                                    <small>Launch:</small>
                                    <span>${element.links.reddit.launch}</span>
                                </div>

                                <div class="features__information">
                                    <small>Media:</small>
                                    <span>${element.links.reddit.media}</span>
                                </div>
                                <div class="features__information">
                                    <small>Recovery:</small>
                                    <span>${element.links.reddit.recovery}</span>
                                </div>
                            </div>
                        </div>
    
                        <h3>Success</h3>
                        
                        <span class="line"></span>
                        
                        <div class="content__information">
                            <div class="features__information">
                                <small>Success: </small>
                                <span>${element.success}</span>
                            </div>
    
                            <div class="features__information">
                                <small>Time: </small>
                            <span>${element.failures && element.failures.length > 0 && element.failures[0].time !== undefined ? element.failures[0].time : ''}</span>
                        </div>
                        
                        <div class="features__information">
                        <small>Altitude: </small>
                        <span>${element.failures && element.failures.length > 0 && element.failures[0].altitude !== null ? element.failures[0].altitude : "none"}</span>
                    </div>
                    
                    <div class="features__information">
                        <small>Reason: </small>
                        <span>${element.failures && element.failures.length > 0 && element.failures[0].reason !== null ? element.failures[0].reason : "none"}</span>
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
                    <h3>Launch details </h3>
                    <small class="cifras">
                            <p>${element.details}</p>
                    </small>
                    </div>
                </div>
    
                <div class="features">
                    <div class="progressbar">
                    <h3>Playloads </h3>
                    <small class="cifras"> 
                        <p>${element.payloads}</p>
                    </small>
                    </div>
                </div>
    
                <div class="features">
                    <div class="progressbar">
                        <h3>Launchpad</h3>
                        
                        <small class="cifras">
                            <p>${element.launchpad}</p>

                        </small>
                    </div>
                </div>
    
                <div class="features">
                <div class="progressbar">
                    <h3>Date local</h3>             
                    <small class="cifras">
                        <p>${element.date_local}</p>
                    </small>
                </div>
                </div>
    
                <div class="features">
                <div class="progressbar">
                    <h3> Date precision </h3>
                    <small class="cifras">
                        <p>${element.date_precision}</p>
                    </small>
                </div>
                </div>
    
                <div class="features">
                <div class="progressbar">
                    <h3>Upcoming </h3>
                    <small class="cifras">
                        <p>${element.upcoming}</p>
                    </small>
                </div>
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

