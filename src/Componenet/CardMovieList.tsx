import React from 'react';
import { Card, Button } from 'react-bootstrap';
// import { moviedata } from './HomePage';
const PopularMovieList = (props:any) => {
  return (
  <Card.Text >
<Card.Body>
<Card />
<Card.Img  src={"https://image.tmdb.org/t/p/w500"+props.poster_path}style={{ width: '75%' }}  />
</Card.Body>
  <Card.Text className="text-light text-decoration-none">{props.title}</Card.Text>
  <Card.Text className="text-light text-decoration-none">Rating :  {props.vote_average}</Card.Text>
  </Card.Text>
  );
}
export default PopularMovieList;
