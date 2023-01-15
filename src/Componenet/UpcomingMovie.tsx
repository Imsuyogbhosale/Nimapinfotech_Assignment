import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PopularMovieList from "./CardMovieList";

const UpcomingMovie = () => {
    const [getdata,setGetdata]=useState<any>();
    useEffect(() => {
      fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1")
      .then((res)=>res.json())
      .then((data)=>{setGetdata(data.results)
        console.log(data.results); 
    })
    }, []);
  return (
    <Container>
    <Row>
        { getdata?.map((tana:any)=><Col xs={12} md={3} className="text-center mt-4 pt-0 "><PopularMovieList key={tana.id} {...tana}/></Col>)}
        </Row>
        </Container>
  );
}

export default UpcomingMovie;
