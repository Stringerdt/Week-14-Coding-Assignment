import Star from "./Star"

const Review = ({ review, onDelete }) => {
    const arr = Array(review.rating).fill('');

    return (
        <div className="card m-2 text-center" key={review.id}>
            <ul className="star-list">
                {arr.map(() => {
                    return (
                        <li key={Math.random() * 1000} className="star-list-item mb-2">
                            <Star
                                yellow={true} />
                        </li>
                    )
                })}
            </ul>
            <p className="card-text h-75 mb-2 px-2">"{review.text}"</p>
            <button onClick={() => onDelete(review.id)} className="btn btn-danger rounded-1 w-50 mx-auto mb-2">Del</button>
        </div>
    )
}

export default Review