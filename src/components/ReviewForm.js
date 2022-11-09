import Star from './Star'
import { useState } from 'react'

const ReviewForm = ({ onAdd, movie }) => {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(0);
    const [hoverIndex, setHoverIndex] = useState(0);

    const resetValues = () => {
        setText('');
        setRating(0);
        setHoverIndex(0);
    }

    const toBeHighlighted = (index) => {
        return (index <= hoverIndex) || index <= rating;
    }

    return (
        <div className='container'>
            <form className='border border-2 border-white p-2'>
                <h3 className='text-center'>Add New Review</h3>

                <textarea
                    className='w-100'
                    value={text}
                    onChange={(e) => setText(e.target.value)}></textarea>
                <ul className='star-list'>
                    {[1, 2, 3, 4, 5].map((index) => {
                        return (
                            <li
                                key={`${movie.id} - star-${index}`}
                                className='star-list-item'
                                onMouseEnter={() => setHoverIndex(index)}
                                onMouseLeave={() => setHoverIndex(0)}
                                onClick={() => setRating(index)}>
                                <Star
                                    yellow={toBeHighlighted(index)}
                                    index={index} />
                            </li>
                        )
                    })}
                </ul>
                <div className='text-center my-2'>
                    <button
                        type="button"
                        className='btn btn-secondary text-center'
                        onClick={() => onAdd(movie, text, rating, resetValues())}>
                        Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ReviewForm

