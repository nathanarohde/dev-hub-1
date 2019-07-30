import React, { Component } from 'react';
import LocationsList from '../../components/LocationsList/LocationsList';

class LocationsListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: null,
      total_count: null
    };
  }

  componentDidMount() {
    // CORS issue circumvented with chrome extension and will NOT work in production nor browsers without the extension
    // Given that server does not have response header allow-access-control-origin:'*'
    // Nor was an authetication protocol specified to communicate with server a superficial solution will be used.
    // JSONP was also attempted but this is a hacky solution with security issues
    fetch('https://dh-code-test.s3-us-west-2.amazonaws.com/example-api-payload.json')
      .then( response => response.json() )
      .then( data => this.setState({ locations: data.objects, total_count: data.meta.total_count }) )
      .catch( error => console.log(error) );
  }

  render () {
    let locationsList = <p>Locations are being retrieved.</p>

    if (this.state.locations != null) {
      locationsList = <LocationsList locations = { this.state.locations } total_count = { this.state.total_count } />
    }

    return (
      <div>
        { locationsList }
      </div>
    )
  }
}

export default LocationsListContainer;
