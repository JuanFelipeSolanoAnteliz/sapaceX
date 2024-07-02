
export const companyContent = async(list)=>{
    let plantilla = '';
    list.forEach(element => {
        plantilla += /*html*/`
        <img class="bg" src="../storage/img/bg_planets.svg" alt="">
        <header id="header" class="header">

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
                            <p><span> Founded: </span> <span>${element.founded}</span></p>
                            <p><span>Founder: </span> <span>${element.founder}</span></p>
                            <p><span > Employees: </span> <span>${element.employees}</span></p>
                            <p><span>name: </span> <span>${element.name}</span></p>
                            <p><span>Website: </span> <a href="${element.links.website}">➡️ More Info<span></span></a></p>
                            <p><span>Flickr: </span> <a href="${element.links.flickr}">  ➡️ More Info<span></span></a></p>
                            <p><span>Twitter: </span> <a href="${element.links.twitter}"><span>📱 Visit</span></a></p>
                            <p><span>Elon twitter: <a href="${element.links.elon_twitter}"></span>📱 Visit<span></span></a></p>
                        </div>
                    </div>
    
                </article>
                <!-- -----------------------------side bar left---------------------------------- -->
    
                <!-- -------------------------------- center ------------------------------------ -->
                <article class="center__content">
                    <section class="progressbar__round">   
                        
                        </div>
                        
                            <article class="cat">
                            <img src="../storage/img/gray.png"  referrerpolicy="no-referrer">
                            </article>
                        
                        </div>
                            
                            
                        </div>
                    </section>
                    <section class="main__content">
                    
                        <div class="launches">
                            <p>Sumary</p>
                            <p>${element.summary} </p>
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
                        <p><span > valuation: </span> <span>${element.valuation}</span></p>
                        <p><span>Cto propulsion: </span> <span>${element.cto_propulsion}</span></p>
                        <p><span>COO: </span> <span>${element.coo}</span></p>
                        <p><span>CTO: </span> <span>${element.cto}</span></p>
                        <p><span>CEO: </span> <span>${element.ceo}</span></p>
                        <p><span>Test sites: </span> <span>${element.test_sites}</span></p>
                        <p><span>Launch sites: </span> <span>${element.launch_sites}</span></p>
                        <p><span>vehicles: </span> <span>${element.vehicles}</span></p>
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
        </section>
    </footer>
        `;   
    });
    return plantilla;
}