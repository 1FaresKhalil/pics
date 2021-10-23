import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
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
        {`found ${this.state.images.length} images`}
      </div>
    );
  }
}
export default App;
