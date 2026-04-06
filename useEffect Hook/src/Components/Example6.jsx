import React, { useEffect, useState } from 'react'

const Example6 = () => {
    const[images,setImages]=useState([]);
    const[isloading,setloading]=useState(true);
    useEffect(()=>{
            async function fetchPhotos(){
                try{
                     const response= await fetch('https://picsum.photos/v2/list')
            const data= await response.json();
            setImages(data);
            setloading(false);
        }
           catch(err){
            console.log("Error occured while fetching images")
            setloading(false);
        }
                }
           
        
        
      fetchPhotos();
    },
    [])
  return (
    <div>
        
         <div style={{display:"flex", flexWrap:"wrap", gap:"10px"}}>
        {images.map(img => (
          <img
            key={img.id}
            src={img.download_url}
            alt="random"
            width="200"
          />
        ))}
      </div>
    </div>
  )
}

export default Example6