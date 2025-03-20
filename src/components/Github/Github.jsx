import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

function Github(){

    const data=useLoaderData()
    // const [data,setdata]=useState([])
    // const [na,setna]=useState([])
    // useEffect(()=>{const nam=[{name:"sindresorhus"},{name:"adarshmishra563"},{name:"kamranahmedse"},{name:"donnemartin"}]
    
    // const k=Math.floor(Math.random()*4)
    
    // const kk=nam[k].name;
   
    // setna(kk)
    //     fetch(`https://api.github.com/users/${kk}`).then(res=>res.json()).then(data=>setdata(data))
    // },[])
   
    
    return(
        <>
        <div className="text-center m-4 bg-pink-600  rounded-lg text-white p-4 text-3xl flex  justify-between  ">Github Followers of {data.name} : {data.followers}
            <img src={data.avatar_url} alt="picture" width={300} className="content-end ;
"></img>

        </div>
        
       </>
    )
}
export default Github;
export const githubinfoloader =async ()=>{
    
  const response= await  fetch(`https://api.github.com/users/Adarshmishra563`)
  return  response.json();
}