
export const dragonsContent = async (docs)=>{
    let plantilla='';

    docs.forEach(element => {
        plantilla +=/*html*/`
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
                        <h3 >First flight</h3>
                    </div>
                  
                    <small>${element.first_flight}</small>
              
                </div>

    
                <div class="description__content">
                    <div class="description__content">
                        <div class="title__section">
                            <div class="img">
                                <img src="../storage/img/mech.svg" alt="">
                            </div>
                            <h3 >Diameter</h3>
                        </div>
                            <small>${element.diameter.meters+ 'F' + ' - ' + element.diameter.feet +'F'}</small>
                </div>                

                <div class="description__content">
                    <div class="description__content">
                        <div class="title__section">
                            <div class="img">
                                <img src="../storage/img/mech.svg" alt="">
                            </div>
                            <h3>Height trunk</h3>
                        </div>
                            <small> ${element.height_w_trunk.meters +'M' +' - '+ element.height_w_trunk.feet +'F'} </small>
                        </div>
                </div>   
                
                <div class="description__content">
                    <div class="description__content">
                        <div class="title__section">
                            <div class="img">
                                <img src="../storage/img/mech.svg" alt="">
                            </div>
                            <h3>Thrust</h3>
                        </div>
                        <small>${element.thrusters && element.thrusters.length > 0 && element.thrusters[0].thrust ? element.thrusters[0].thrust.kN + ' kN - ' + element.thrusters[0].thrust.lbf + ' lbf' : ''}</small>

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

                <div class="description__content">
                <div class="description__content">
                    <div class="title__section">
                        <div class="img">
                            <img src="../storage/img/mech.svg" alt="">
                        </div>
                        <h3> Fuel 2</h3>
                    </div>
                        <small> ${element.thrusters[0].fuel_1} </small>
                    </div>

            </div>   

            <div class="description__content">
            <div class="title__section">
                <div class="img">
                    <img src="../storage/img/mech.svg" alt="">
                </div>
                <h3> ISP</h3>
            </div>
                <small> ${element.thrusters[0].isp} </small>
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
                            <h3>Heat shield</h3>
                        
                            <div class="content__information">
                                <div class="features__information">
                                    <small>Material:</small>
                                    <span>${element.heat_shield.material}</span>
                                </div>

                                <div class="features__information">
                                    <small>Size meters:</small>
                                    <span>${element.heat_shield.size_meters + 'M'}</span>
                                </div>

                                <div class="features__information">
                                    <small>Temp degrees:</small>
                                    <span>${element.heat_shield.temp_degrees}</span>
                                </div>
                                <div class="features__information">
                                    <small>Dev partner:</small>
                                    <span>${element.heat_shield.dev_partner}</span>
                                </div>
                            </div>
                        </div>
                        <h3>Playload Data</h3>
                        
                        
                        <div class="content__information">
                            <div class="features__information">
                                <small>Launch mass:</small>
                           
                                <span>${element.launch_payload_mass.kg+' kg'}</span>
                              
                            </div>
    
                            <div class="features__information">
                                <small>Launch vol:</small>
                                <span>${element.launch_payload_vol.cubic_meters+' cm3'}</span>
                            </div>
    
                            <div class="features__information">
                                <small>Return mass: </small>
                                <span>${element.return_payload_mass.kg +' kg'}</span>
                            </div>
    
                            <div class="features__information">
                                <small>Return vol: </small>
                                <span>${element.return_payload_vol.cubic_meters+' cm3'}</span>
                            </div>
    
                        </div>
    
                    </article>
                    <article class="carousel">
                        
                        <div class="image__countain">
                        <div class="image__Setter">
                            ${Array.isArray(element.flickr_images)  && element.flickr_images.length > 0 ? element.flickr_images.map(image=> `<img src="${image}" referrerpolicy="no-referrer" style="width:100%;">`).join('') : `` }
                        </div>
                      
                        </div>
                    </article>
                        <article class="card">
                        <div class="asd">
                            <h3>Trunk</h3>
                        
                            <div class="content__information">
                                <div class="features__information">
                                    <small>Trunk volume:</small>
                                        <span> ${element.trunk.trunk_volume.cubic_meters} </span>
                                </div>

                                <div class="features__information">
                                    <small>Cargo:</small>
                                    <span>${element.trunk.cargo.solar_array} </span>
                                </div>

                                <div class="features__information">
                                    <small>Unpressurized cargo:</small>
                                    <span>${element.trunk.cargo.unpressurized_cargo}</span>
                                </div>
                               
                        </div>
    
                        <h3>About</h3>
                        
                        <span class="line"></span>
                        
                        <div class="content__information">
                            <div class="features__information">
                                <small>Name: </small>
                                <span>${element.name}</span>
                            </div>
    
                            <div class="features__information">
                                <small>Type: </small>
                            <span>${element.type}</span>
                        </div>
                        
                        <div class="features__information">
                        <small>Active: </small>
                        <span> ${element.active}</span>
                    </div>
                    
                    <div class="features__information">
                        <small>Crew capacity: </small>
                        <span>${element.crew_capacity}</span>
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
                    <h3>Description</h3>
                    <small class="cifras">
                            <p>${element.description}<a href="${element.wikipedia}" style="color:#FFF; font-size:bolder;"> Read more...</a></p>
                    </small>
                    </div>
                </div>
                
                <div class="features">
                    <div class="progressbar">
                    <h3>Type thruster</h3>
                    <small class="cifras">
                            <p>${element.thrusters[0].type}</p>
                    </small>
                    </div>
                </div>

                <div class="features">
                <div class="progressbar">
                <h3>Amount</h3>
                <small class="cifras">
                        <p>${element.thrusters[0].amount}</p>
                </small>
                </div>
            </div>

            
            <div class="features">
            <div class="progressbar">
            <h3>Pods</h3>
            <small class="cifras">
                    <p>${element.thrusters[0].pods}</p>
            </small>
            </div>
        </div>


        <div class="features">
            <div class="progressbar">
            <h3>Fuel 2</h3>
            <small class="cifras">
                    <p>${element.thrusters[0].fuel_2}</p>
            </small>
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