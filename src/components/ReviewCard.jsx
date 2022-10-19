import { Link } from "react-router-dom";

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <div className="image-container">
        <img
          className="review-img"
          src={review.review_img_url}
          alt={review.title}
        />
      </div>
      <Link className="review-title" to={`/reviews/${review.review_id}`}>
        <h4 className="review-title text">{review.title}</h4>
      </Link>
      <p id="review-body" className="text">
        {review.review_body}
      </p>
      <Link className="read-more" to={`/reviews/${review.review_id}`}>
        <p>Read more...</p>
      </Link>
    </div>
  );
}

export default ReviewCard;
