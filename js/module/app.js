
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
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
            query:{},
            options:{}
        })
    };

    let res = await fetch(`https://api.spacexdata.com/v4/capsules/query`,config);
    let data = await res.json();
    return data;
}