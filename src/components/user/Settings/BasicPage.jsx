import React, { Component } from "react";
import { Segment, Form, Header, Divider, Button } from "semantic-ui-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import Script from "react-load-script";
class BasicPage extends Component {
  state = { address: "", scriptLoaded: false };
  handleChange = address => {
    console.log(this.state.address);
    this.setState({ address });
  };
  handleScriptLoaded = () => this.setState({ scriptLoaded: true });
  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    };
    return (
      <Segment>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBMvNvsxGHOEmfUMr1CSUqSFRMv9xtoieA&libraries=places"
          onLoad={this.handleScriptLoaded}
        />
        {this.state.scriptLoaded && (
          // <PlacesAutocomplete
          //   value={this.state.address}
          //   onChange={this.handleChange}
          // >
          //   {({
          //     getInputProps,
          //     suggestions,
          //     getSuggestionItemProps,
          //     loading
          //   }) => (
          //     <div>
          //       <input
          //         {...getInputProps({
          //           placeholder: "Search Places ...",
          //           className: "location-search-input"
          //         })}
          //       />
          //       <div className="autocomplete-dropdown-container">
          //         {loading && <div>Loading...</div>}
          //         {suggestions.map(suggestion => {
          //           const className = suggestion.active
          //             ? "suggestion-item--active"
          //             : "suggestion-item";
          //           // inline style for demonstration purpose
          //           const style = suggestion.active
          //             ? { backgroundColor: "#fafafa", cursor: "pointer" }
          //             : { backgroundColor: "#ffffff", cursor: "pointer" };
          //           return (
          //             <div
          //               {...getSuggestionItemProps(suggestion, {
          //                 className,
          //                 style
          //               })}
          //             >
          //               <span>{suggestion.description}</span>
          //             </div>
          //           );
          //         })}
          //       </div>
          //     </div>
          //   )}
          // </PlacesAutocomplete>
          <PlacesAutocomplete inputProps={inputProps} />
        )}
      </Segment>
    );
  }
}

export default BasicPage;
