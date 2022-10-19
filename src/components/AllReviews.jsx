import { useState, useEffect } from "react";
import { getReviews } from "../utils/utils";
import ReviewCard from "./ReviewCard";

function AllReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews);
    });
  }, []);

  return (
    <div className="review-gallery">
      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review} />;
      })}
    </div>
  );
}

export default AllReviews;
