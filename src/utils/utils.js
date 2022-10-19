import axios from "axios";

const gamesAPI = axios.create({
  baseURL: "https://heathers-awesome-games.herokuapp.com/api",
});

export const getReviews = () => {
  return gamesAPI.get("/reviews").then(({ data }) => {
    return data.reviews;
  });
};

export const getReviewsById = (review_id) => {
  return gamesAPI.get(`/reviews/${review_id}`).then(({ data }) => {
    return data.review;
  });
};
