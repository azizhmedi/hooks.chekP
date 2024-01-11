import Card from "./Card";
import Data from "../Data";
import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
const List = ({ search, rate }) => {
  const [movies, setMovies] = useState(Data);
  const [newMovie, setnewMovie] = useState({});
  const handleAddNewMovie = () => {
    setMovies([...movies, newMovie]);
  };
  return (
    <div className="List-containr">
      <div className="List-containr-hero">
        <h1>Movies</h1>
        <h4>Genre:</h4>
        <div className="List-containr-btns">
          <Btn content="Action" />
          <Btn content="Adventure" />
          <Btn content="Comedy" />
          <Btn content="Romance" />
          <Btn content="Sci-Fi" />
          <Btn content="Horro" />
          <Btn content="Fantacy" />
        </div>
        <div className="intro-containr">
          <h2>Latest Movies</h2>
          <Btn content="View All" />
        </div>

        <Form>
          <Form.Group widths="equal">
            <Form.Input
              type="text"
              placeholder="Title"
              onChange={(e) => {
                setnewMovie({ ...newMovie, tittle: e.target.value });
              }}
            />
            <Form.Input
              type="text"
              placeholder="Movie poster url"
              onChange={(e) => {
                setnewMovie({ ...newMovie, image: e.target.value });
              }}
            />
            <Form.Input
              type="number"
              min={1}
              max={5}
              onChange={(e) => {
                setnewMovie({ ...newMovie, rating: e.target.value });
              }}
            />
            <Form.Input
              type="text"
              placeholder="Resume"
              onChange={(e) => {
                setnewMovie({ ...newMovie, descrption: e.target.value });
              }}
            />
          </Form.Group>
          <Button
            onClick={() => {
              handleAddNewMovie();
            }}
          >
            Add movie
          </Button>
        </Form>
      </div>
      {movies
        .filter((movie) =>
          movie.tittle.toLowerCase().includes(search.toLowerCase())
        )
        .filter((movie) => (rate ? movie.rating === rate : movie))
        .map((movie, i) => (
          <Card key={i} {...movie} />
        ))}
    </div>
  );
};

export default List;
