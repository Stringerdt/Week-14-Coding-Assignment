import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'
import MovieList from './components/MovieList'

function App() {
  // movieList data
  const [movieList, setMovieList] = useState([
    {
      id: 0,
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
      reviewList: [{
        id: '0-0',
        text: 'Great Movie',
        rating: 5
      }]
    },
    {
      id: '1',
      title: 'The Lord of the Rings: The Two Towers',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg',
      reviewList: [{
        id: '1-0',
        text: 'Two Towers / Five',
        rating: 2
      },
      {
        id: '1-1',
        text: 'Amazing Movie! Even Better than the first!',
        rating: 5
      }]
    },
    {
      id: '2',
      title: 'The Lord of the Rings: The Return of the King',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
      reviewList: [{
        id: '2-0',
        text: 'The king returned, but I will not',
        rating: 1
      }]
    },
    {
      id: '3',
      title: 'The Hobbit: An Unexpected Journey',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/yHA9Fc37VmpUA5UncTxxo3rTGVA.jpg',
      reviewList: [{
        id: '3-0',
        text: 'Very Unexpected',
        rating: 4
      }]
    },
    {
      id: '4',
      title: 'The Hobbit: The Desolation of Smaug',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/xQYiXsheRCDBA39DOrmaw1aSpbk.jpg',
      reviewList: [{
        id: '4-0',
        text: 'Smaugtastic',
        rating: 5
      }]
    },
    {
      id: '5',
      title: 'The Hobbit: The Battle of the Five Armies',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/xT98tLqatZPQApyRmlPL12LtiWp.jpg',
      reviewList: [{
        id: '5-0',
        text: 'Rigged, my favorite army lost',
        rating: 2
      }]
    }
  ])

  // deletes a review (delete button onDelete event)
  const deleteReview = (id) => {
    // maps over all movies, and then filters to show all reviews where the review.id !== the given id
    setMovieList(movieList.map((movie) => {
      return (({ ...movie, reviewList: movie.reviewList.filter((review) => review.id !== id) }));
    }))
  }

  // adds a new review (on reviewForm onAdd event)
  const addReview = (movie, text, rating) => {
    // sets the id for each generated review
    const id = `${movie.id}-${movie.reviewList.length}`
    // finds the index of the passed movie
    const movieIndex = movieList.findIndex((el) => el.id === movie.id);
    // sets the movieList state with the new review added into the passed movie's reviewList 
    setMovieList((movieList) => {
      // creates a temp movieList
      const newMovieList = [...movieList]
      // sets the reviewList of the temp movie list at the passed index to the new value
      newMovieList[movieIndex].reviewList = [
        // keeps all the non-changed data, then adds the new object
        ...newMovieList[movieIndex].reviewList, { id: id, text: text, rating: rating },
      ];
      // returns the temp movie list as the new value
      console.log(newMovieList);
      return newMovieList;
    })
  }

  const getRating = (movie) => {
    const ratingList = movie.reviewList.map((review) => review.rating);
    const ratingSum = ratingList.reduce((prev, curr) => prev + curr);
    const numOfReviews = movie.reviewList.length;
    const averageRating = ratingSum / numOfReviews;
    return averageRating;
  }

  // what is rendered; the h1 plus the movieList which handles all children components
  return (
    <div className='conatiner-fluid'>
      <h1 className='text-center bg-dark py-3'>LotR & Hobbit Reviews</h1>
      <MovieList movieList={movieList} onDelete={deleteReview} onAdd={addReview} getRating={getRating} />
    </div >

  );
}

export default App;
