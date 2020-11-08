import React, { Component } from 'react';
import axios from 'axios';

class FavouritMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      poster: '',
      comment: '',
    };
  }

  onChange = (e) => {
    console.log(this.state);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitMovie = (e) => {
    e.preventDefault();
    const url = 'https://post-a-form.herokuapp.com/api/movies/';
    axios
      .post(url, this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`Film ajouté avec l'ID ${res.id} !`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout du film : ${e.message}`);
      });
  };

  render() {
    return (
      <form onSubmit={this.submitMovie}>
        <fieldset>
          <legend>My favourit Movie</legend>
          <div className='form-data'>
            <label htmlFor='title'>Nom</label>
            <input
              type='text'
              id='title'
              name='title'
              onChange={this.onChange}
              value={this.state.title}
              required
            />
          </div>

          <div className='form-data'>
            <label htmlFor='poster'>Poster</label>
            <input
              type='url'
              id='poster'
              name='poster'
              onChange={this.onChange}
              value={this.state.poster}
            />
          </div>

          <div className='form-data'>
            <label htmlFor='comment'>Comment here</label>
            <textarea
              name='comment'
              onChange={this.onChange}
              value={this.state.comment}
              required
            />
          </div>
          <hr />
          <div className='form-data'>
            <input type='submit' value='Envoyer' />
          </div>
        </fieldset>
      </form>
    );
  }
}

export default FavouritMovie;
