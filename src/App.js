import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllReviews from "./components/AllReviews";
import SingleReview from "./components/SingleReview";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<AllReviews />} />
          <Route path="/reviews" element={<AllReviews />} />
          <Route path="/review/:review_id" element={<SingleReview />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
