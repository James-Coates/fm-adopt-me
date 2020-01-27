import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import { navigate } from "@reach/router";
import Modal from "./Modal";

class Details extends Component {
  state = { loading: true, showModal: false }; // new classProperties syntax 2019/2020
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: true
  //   };
  // }

  componentDidMount() {
    // throw new Error("lol");
    pet
      .animal(this.props.id)
      .then(({ animal }) => this.setPetToState(animal), console.error);
  }

  setPetToState(animal) {
    var {
      url = "/",
      name = "name",
      type = "type",
      location: { address: { city = "city", state = "state" } = {} } = {},
      description = "description",
      photos: media = "image",
      breeds: { primary: breed = "breed" }
    } = animal || {};

    this.setState({
      url,
      name,
      animal: type,
      location: `${city}, ${state}`,
      description,
      media,
      breed,
      loading: false
    });
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  adopt = () => {
    navigate(this.state.url);
  };

  render() {
    if (this.state.loading) {
      return <h1>loading...</h1>;
    }

    var {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                style={{ backgroundColor: theme }}
                onClick={this.toggleModal}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No Thanks</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
