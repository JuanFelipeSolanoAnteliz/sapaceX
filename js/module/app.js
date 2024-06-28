
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



