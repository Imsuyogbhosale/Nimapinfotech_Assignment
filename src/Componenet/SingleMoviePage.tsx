import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleMoviePage = () => {
    const [singlepagedata, setsinglepagedata] = useState<any>();
    const id=useParams();
    console.log(id);
    
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
      .then((res)=>res.json())
      .then((data)=>{setsinglepagedata(data)
      console.log(data)}
      )
    }, []);
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
  );
}

export default SingleMoviePage;
