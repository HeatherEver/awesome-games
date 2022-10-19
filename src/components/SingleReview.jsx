import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsById } from "../utils/utils";

function SingleReview() {
  const { review_id } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    getReviewsById(review_id).then((review) => {
      setReview(review[0]);
    });
  }, [review_id]);

  return (
    <div className="single-review-card">
      <h1 className="single-review-title"> {review.title}</h1>
      <p>Game Designer: {review.designer}</p>
      <img
        className="single-review-img"
        src={review.review_img_url}
        alt={review.title}
      />
      <h4 className="single-review-owner">Review Author: {review.owner}</h4>
      <p className="single-review-body">{review.review_body}</p>
      <p className="single-review=category">Category: {review.category}</p>
      <p className="single-review-votes">{review.votes}</p>
    </div>
  );
}

export default SingleReview;
