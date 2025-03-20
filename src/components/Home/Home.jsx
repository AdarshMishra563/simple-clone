import axios from 'axios';
import { useEffect,useState} from 'react';
import { Link } from 'react-router-dom'
import React from 'react';

const api=()=>{
    const data=axios.get("https://apkform-2.onrender.com/")
    return data;

}
export default function Home() {

    const [data,setdata]=useState([]);
    useEffect(()=>{
        api().then((data)=>{
            setdata(data.data.data);
        })




    },[])

    console.log(data);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {data.map((item, index) => (
          <React.Fragment key={index}>
            {item.posts.map((post, postIndex) => (
              <div
                key={postIndex}
                className="rounded-lg overflow-hidden bg-white shadow-lg"
              >
                {post.type === 'image' && (
                  <img className="w-full h-56 object-cover" src={post.url} alt="Post" />
                )}
                {post.type === 'video' && (
                  <video
                    className="w-full h-56 object-cover"
                    controls
                    src={post.url}
                  />
                )}
                <div className="p-4">
                 <div className='flex justify-between'> <h3 className="text-lg font-semibold mb-2">{item.name || 'Untitled Post'}</h3><img className='size-10 rounded-full  ' src={item.image}/></div>
                  <p className="text-gray-600">{post.caption || 'No description available.'}</p>
                  <p>Type: {post.type}</p>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
       
    );
}
