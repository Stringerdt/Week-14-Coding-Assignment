import Review from './Review'

const ReviewList = ({ reviewList, onDelete }) => {
    return (
        <div className='container-fluid'>
            <div className='container border border-2 border-black p-0'>
                <h4 className='text-center'>Reviews:</h4>
                {reviewList.map((review) => (
                    <div key={review.id} className="container">
                        <Review onDelete={onDelete} review={review} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ReviewList