
export const starlinkContent = async (docs)=>{
    let plantilla ='';
    docs.forEach(element => {
        plantilla +=/*html*/`
        <img src="../storage/img/bg_planets.svg" class="bg">
        <header id="header" class="header">
            <h1>${element.spaceTrack.OBJECT_NAME.toUpperCase()}</h1>
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
                        <h3 >Element set no</h3>
                    </div>
                
                    <small>${element.spaceTrack.ELEMENT_SET_NO}</small>
            
                </div>

                <div class="description__content">
                    <div class="title__section">
                        <div class="img">
                            <img src="../storage/img/mech.svg" alt="">
                        </div>
                        <h3 >Axis</h3>
                    </div>
                
                    <small>${element.spaceTrack.SEMIMAJOR_AXIS}</small>
            
                </div>

                <div class="description__content">
                    <div class="title__section">
                        <div class="img">
                            <img src="../storage/img/mech.svg" alt="">
                        </div>
                        <h3 >Version</h3>
                    </div>
                  
                    <small>${element.version}</small>
              
                </div>
    
    
                <div class="description__content">
                    <div class="description__content">
                        <div class="title__section">
                            <div class="img">
                                <img src="../storage/img/mech.svg" alt="">
                            </div>
                            <h3 >Velocity km</h3>
                        </div>
                            <small>${element.velocity_kms}</small>
                </div>                
    
                <div class="description__content">
                    <div class="description__content">
                        <div class="title__section">
                            <div class="img">
                                <img src="../storage/img/mech.svg" alt="">
                            </div>
                            <h3>Height </h3>
                        </div>
                            <small> ${element.height_km} </small>
                        </div>
                </div>   
                
                <div class="description__content">
                    <div class="description__content">
                        <div class="title__section">
                            <div class="img">
                                <img src="../storage/img/mech.svg" alt="">
                            </div>
                            <h3>ID</h3>
                        </div>
                        <small>${element.id}</small>
    
                        </div>
    

    
                <div class="description__content">
                <div class="description__content">
                    <div class="title__section">
                        <div class="img">
                            <img src="../storage/img/mech.svg" alt="">
                        </div>
                        <h3> Line  </h3>
                    </div>
                        <small>${element.launch}</small>
                    </div>
    
            </div>   
    
            <div class="description__content">
            <div class="title__section">
                <div class="img">
                    <img src="../storage/img/mech.svg" alt="">
                </div>
                <h3>Longitude</h3>
            </div>
                <small> ${element.longitude}</small>
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
                            <h3>LINE 1</h3>
                        
                            <div class="content__information">
                                <div class="features__information">
                                    <small>Tle:   </small>
                                    <span>${element.spaceTrack.TLE_LINE1}</span>
                                </div>
                            </div>
                        </div>
                        <h3>SpaceTrack</h3>
                        
                        
                        <div class="content__information">
                            <div class="features__information">
                                <small>OMM VERS:</small>
                                <span>${element.spaceTrack.CCSDS_OMM_VERS}</span>
                              
                            </div>
    
                            <div class="features__information">
                                <small>COMMENT: </small>
                                <span>${element.spaceTrack.COMMENT}</span>
                            </div>

    
                            <div class="features__information">
                                <small>CREATION DATE: </small>
                                <span>${element.spaceTrack.CREATION_DATE}</span>
                            </div>

                            <div class="features__information">
                                <small>ORIGINATOR: </small>
                                <span>${element.spaceTrack.ORIGINATOR}</span>
                            </div>

                            
                            <div class="features__information">
                                <small>NAME: </small>
                                <span>${element.spaceTrack.OBJECT_NAME}</span>
                            </div>

                            <div class="features__information">
                                <small>ID: </small>
                                <span>${element.spaceTrack.OBJECT_ID}</span>
                            </div>
                            <div class="features__information">
                                <small>CENTER NAME: </small>
                                <span>${element.spaceTrack.CENTER_NAME}</span>
                            </div>

                            <div class="features__information">
                                <small>REF FRAME: </small>
                                <span>${element.spaceTrack.REF_FRAME}</span>
                            </div>

                            <div class="features__information">
                                <small>TIME SYSTEM: </small>
                                <span>${element.spaceTrack.TIME_SYSTEM}</span>
                          </div>
                        
                          <div class="features__information">
                            <small>THEORY: </small>
                            <span>${element.spaceTrack.MEAN_ELEMENT_THEORY}</span>
                        </div>

                        <div class="features__information">
                            <small>EPOCH: </small>
                            <span>${element.spaceTrack.EPOCH}</span>
                        </div>

                        </div>
    
                    </article>
                    <article class="carousel">
                        
                        <div class="image__countain">
                        <div class="image__Setter">
                            <img src="../storage/img/starcoso.webp">
                        </div>
                      
                        </div>
                    </article>
                    <article class="card">
                        <div class="asd">
                            <h3>LINE 2</h3>
                        
                            <div class="content__information">
                                <div class="features__information">
                                    <small>Tle: </small>
                                        <span>${element.spaceTrack.TLE_LINE2}</span>
                                </div>
                        </div>
                        </div>
    
                        
                        
                        
                        <h3>starlink</h3>
                        <div class="content__information">
                            <div class="features__information">
                                <small>Gp id: </small>
                                <span>${element.spaceTrack.GP_ID}</span>
                            </div>
    
                            <div class="features__information">
                                    <small>File: </small>
                                <span>${element.spaceTrack.FILE}</span>
                            </div>
                        
                            <div class="features__information">
                                <small>Degacy: </small>
                                <span>${element.spaceTrack.DECAY_DATE}</span>
                            </div>
                    
                            <div class="features__information">
                                <small>site: </small>
                                <span>${element.spaceTrack.SITE}</span>
                            </div>

                            <div class="features__information">
                                <small>Country Code: </small>
                                <span>${element.spaceTrack.COUNTRY_CODE}</span>
                            </div>

                            <div class="features__information">
                                <small>Rcs size: </small>
                                <span>${element.spaceTrack.RCS_SIZE}</span>
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
                    <h3>ASC NODE </h3>
                    <small class="cifras">
                            <p>${element.spaceTrack.RA_OF_ASC_NODE}</p>
                    </small>
                    </div>
                </div>
                
                <div class="features">
                    <div class="progressbar">
                    <h3>ARG OF PERICENTER</h3>
                    <small class="cifras">
                            <p>${element.spaceTrack.ARG_OF_PERICENTER}</p>
                    </div>
                </div>
    
                <div class="features">
                <div class="progressbar">
                <h3>MEA ANOMALY</h3>
                <small class="cifras">
                        <p>${element.spaceTrack.MEAN_ANOMALY}</p>
                </small>
                </div>
            </div>
    
            
            <div class="features">
            <div class="progressbar">
            <h3>EPHEMERIS TYPE</h3>
            <small class="cifras">
                    <p>${element.spaceTrack.EPHEMERIS_TYPE}</p>
            </small>
            </div>
        </div>
    
            
        <div class="features">
            <div class="progressbar">
            <h3>CLASSIFICATION TYPE</h3>
            <small class="cifras">
                    <p>${element.spaceTrack.CLASSIFICATION_TYPE}</p>
            </small>
            </div>
        </div>

            
            <div class="features">
                <div class="progressbar">
                    <h3>NORAD CAT ID</h3>
                        <small class="cifras">
                        <p>${element.spaceTrack.NORAD_CAT_ID}</p>
                        </small>
                    </div>
            </div>

            
                <div class="features">
                    <div class="progressbar">
                        <h3>EPHEMERIS TYPE</h3>
                        <small class="cifras">
                                <p>${element.spaceTrack.EPHEMERIS_TYPE}</p>
                        </small>
                    </div>
                </div>

                <div class="features">
                    <div class="progressbar">
                        <h3>BSTAR</h3>
                        <small class="cifras">
                                <p>${element.spaceTrack.BSTAR}</p>
                        </small>
                    </div>
                </div>

                <div class="features">
                    <div class="progressbar">
                        <h3>MOTION DOT</h3>
                        <small class="cifras">
                                <p>${element.spaceTrack.MEAN_MOTION_DOT}</p>
                        </small>
                    </div>
                </div>

                <div class="features">
                    <div class="progressbar">
                        <h3>MOTION DDOT</h3>
                        <small class="cifras">
                                <p>${element.spaceTrack.MEAN_MOTION_DDOT}</p>
                        </small>
                    </div>
                </div>

        </div>
    
    
    
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