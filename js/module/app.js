
export const allRockets = async()=>{
    let config ={
        method:'POST',
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
            query:{},
            options:{}
        })
    }
    let res = await fetch(`https://api.spacexdata.com/v4/rockets/query`,config);
    // let res = await fetch(`https://api.spacexdata.com/v4/starlink/query`,config)
    let data = res.json();
    return data;
}


export const rocketsPage = async(page) =>{
    
    let config ={
        method:'POST',
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
            query:{},
            options:{
                limit:1,
                page:page
            }
        })
    }
    let res = await fetch(`https://api.spacexdata.com/v4/rockets/query`,config);
    // let res = await fetch(`https://api.spacexdata.com/v4/starlink/query`,config)
    let data = res.json();
    return data;
};


export const rocketsImage = async(page)=>{
    let config ={
        method:'POST',
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
            query:{},
            options:{
                select:{
                    flickr_images:1
                },
                limit:1,
                page:page
            }
        })
    }
    let res = await fetch(`https://api.spacexdata.com/v4/rockets/query`,config);
    // let res = await fetch(`https://api.spacexdata.com/v4/starlink/query`,config)
    let data = res.json();
    return data;
}


export const allCapsules = async () =>{

    let config={
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            query:{},
            options:{
                limit:25,
                page:1
            },
        })
    };

    let res = await fetch(`https://api.spacexdata.com/v4/capsules/query`,config);
    let data = await res.json();
    return data;

}

export const oneCapsule = async(page)=>{

    let config ={
        method:'POST',
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
            query:{},
            options:{
                limit:1,
                page:page
            }
        })
    };

    let res = await fetch(`https://api.spacexdata.com/v4/capsules/query`,config);
    let data = await res.json();
    return data;
}


export const oneCore = async(page)=>{
    let config ={
        method:'POST',
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
            query:{},
            options:{
                limit:1,
                page:page
            }
        })
    };

    let res = await fetch(`https://api.spacexdata.com/v4/cores/query`,config);
    let data = await res.json();
    return data;
}

export const oneCrew = async (page) =>{
    let config ={
        method:'POST',
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
            query:{},
            options:{
                limit:1,
                page:page
            }
        })
    };

    let res = await fetch(`https://api.spacexdata.com/v4/crew/query`,config);
    let data = await res.json();
    return data;

}

export const oneLaunches = async (page)=>{
    let config ={
        method:'POST',
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
            query:{},
            options:{
                limit:1,
                page:page
            }
        })
    };

    let res = await fetch(`https://api.spacexdata.com/v4/launches/query`,config);
    let data = await res.json();
    return data;
}

export const oneLandpad = async (page) => {
    let config ={
        method:'POST',
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
            query:{},
            options:{
                limit:1,
                page:page
            }
        })
    };

    let res = await fetch(`https://api.spacexdata.com/v4/landpads/query`,config);
    let data = await res.json();
    return data;
}

export const oneShip =async(page)=>{

    let config ={
        method:'POST',
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
            query:{},
            options:{
                limit:1,
                page:page
            }
        })
    };

    let res = await fetch(`https://api.spacexdata.com/v4/ships/query`,config);
    let data = await res.json();
    return data;
}

export const dataCompany = async()=>{

    let config = {
        method:'GET',
        headers:{"content-type":"application/json"}
    };

    let res = await fetch(`https://api.spacexdata.com/v4/company`);
    let data = await res.json();
    return data;
}

export const oneDragon =async (page)=>{
    let config ={
        method:'POST',
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
            query:{},
            options:{
                limit:1,
                page:page
            }
        })
    };

    let res = await fetch(`https://api.spacexdata.com/v4/dragons/query`,config);
    let data = await res.json();
    return data;
}

export const oneHistory = async (page)=>{
    
    let config ={
        method:'POST',
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
            query:{},
            options:{
                limit:1,
                page:page
            }
        })
    };

    let res = await fetch(`https://api.spacexdata.com/v4/history/query`,config);
    let data = await res.json();
    return data;
}

export const oneLaunchpad = async (page) =>{
        
    let config ={
        method:'POST',
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
            query:{},
            options:{
                limit:1,
                page:page
            }
        })
    };

    let res = await fetch(`https://api.spacexdata.com/v4/launchpads/query`,config);
    let data = await res.json();
    return data;
}


export const onePayload = async (page) =>{
    let config ={
        method:'POST',
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
            query:{},
            options:{
                limit:1,
                page:page
            }
        })
    };

    let res = await fetch(`https://api.spacexdata.com/v4/payloads/query`,config);
    let data = await res.json();
    return data;
}

