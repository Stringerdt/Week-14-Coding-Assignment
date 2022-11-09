const Star = ({ yellow }) => {
    return (
        <img
            className={"star-reg"}
            alt="star"
            src={yellow ? require('../assets/filled-star.png') : require('../assets/empty-star.png')}></img>
    )
}

export default Star


