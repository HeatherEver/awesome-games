import axios from "axios";

const gamesAPI = axios.create({
  baseURL: "https://heathers-awesome-games.herokuapp.com/api",
});

export const getReviews = () => {
  return gamesAPI.get("/reviews").then(({ data }) => {
    return data.reviews;
  });
};

export const getReviewsById = (reviewID) => {
  return gamesAPI.get(`/reviews/${reviewID}`).then(({ data }) => {
    return data.review;
  });
};
