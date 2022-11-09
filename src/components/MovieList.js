import Movie from './Movie'

const MovieList = ({ movieList, onDelete, onAdd, getRating }) => {

    return (
        <div className='row'>
            {movieList.map((movie) => (
                <div key={movie.id} className="col-lg-2 h-100">
                    <Movie movie={movie} onDelete={onDelete} onAdd={onAdd} getRating={getRating} />
                </div>
            ))}
        </div>
    )
}

export default MovieList