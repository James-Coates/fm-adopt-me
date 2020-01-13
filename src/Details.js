import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";

class Details extends Component {
  state = { loading: true }; // new classProperties syntax 2019/2020
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: true
  //   };
  // }

  componentDidMount() {
    pet
      .animal(this.props.id)
      .then(({ animal }) => this.setPetToState(animal), console.error);
  }

  setPetToState(animal) {
    var {
      name = "name",
      type = "type",
      location: { address: { city = "city", state = "state" } = {} } = {},
      description = "description",
      photos: media = "image",
      breeds: { primary: breed = "breed" }
    } = animal || {};

    this.setState({
      name,
      animal: type,
      location: `${city}, ${state}`,
      description,
      media,
      breed,
      loading: false
    });
  }

  render() {
    if (this.state.loading) {
      return <h1>loading...</h1>;
    }

    var { animal, breed, location, description, name, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
