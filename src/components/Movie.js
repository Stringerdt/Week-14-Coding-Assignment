import ReviewList from "./ReviewList"
import ReviewForm from "./ReviewForm"
import Star from './Star'

const Movie = ({ movie, onAdd, onDelete, }) => {
    const getAverageRating = (movie) => {
        if (movie.reviewList.length > 0) {
            const ratingList = movie.reviewList.map((review) => review.rating);
            const ratingSum = ratingList.reduce((prev, curr) => prev + curr);
            const numOfReviews = movie.reviewList.length;
            const averageRating = Math.round(ratingSum / numOfReviews);
            console.log(`average rating - ${averageRating}`);
            return averageRating;
        } else {
            return 0;
        }

    }

    const ratingsArray = Array(getAverageRating(movie)).fill('');

    return (
        <>
            <div className="card h-100 m-2 border-0">
                <img alt={movie.title} className="card-img-top" src={movie.img}></img>
                <h3 className="card-title text-center">{movie.title}</h3>
                <div>
                    <ul className='star-list'>
                        {ratingsArray.length > 0 ? ratingsArray.map(() => {
                            return (
                                <li key={Math.random() * 10000} className='star-list-item'>
                                    <Star
                                        yellow={true} />
                                </li>)
                        }) :
                            <p>No Reviews</p>
                        }
                    </ul>
                </div>
            </div>
            <div className='container-fluid my-2'>
                <ReviewForm onAdd={onAdd} movie={movie} />
            </div>
            <div className="container-fluid">
                <ReviewList onDelete={onDelete} onAdd={onAdd} reviewList={movie.reviewList} />
            </div>

        </>
    )
}

export default Movie;