import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

// function compareTriplets(a, b) {
//   let scores = [0, 0];
//   a.forEach((curr, i) => {
//     if (curr > b[i]) return (scores[0] += 1);
//   });
//   b.forEach((curr, i) => {
//     if (curr > a[i]) return (scores[1] += 1);
//   });
//   console.log(scores);
// }
// compareTriplets([17, 28 ,30], [99, 16 ,8]);

class App extends React.Component {
  state = { images: [] };
  onSubmitChange = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "15px" }}>
        <SearchBar onSubmit={this.onSubmitChange} />
        <ImageList image={this.state.images} />
      </div>
    );
  }
}
export default App;
