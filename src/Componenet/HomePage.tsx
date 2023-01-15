import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PopularMovieList from './CardMovieList';

interface datatype {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

const HomePage = () => {
  const [getdata, setGetdata] = useState<any>();
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1")
      .then((res) => res.json())
      .then((data) => {
        setGetdata(data.results)
      })
  }, []);
  return (
    <Container>
      <Row>
        {getdata?.map((tana: any) => <Col xs={12} md={3} className="text-center mt-4 pt-0 text-decoration-none"><Link to={`/single_page/${tana.id}`}><PopularMovieList key={tana.id} {...tana} /></Link></Col>)}
      </Row>
    </Container>
  );
}

export default HomePage;
