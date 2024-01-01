import ReviewStars from "./ReviewStars";
import Stars from "./Stars";

function App() {
  return (
    <>
      <Stars maxRating={5} />
      <ReviewStars review={3} rating={3} />
    </>
  );
}

export default App;
