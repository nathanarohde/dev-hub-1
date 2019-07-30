import React from 'react'
import Location from '../Location/Location'

const locationsList = ( props ) => {
  let locations = props.locations.map( location => {
    return (
      <Location key = { location.id } location_id = { location.id } formatted_address = { location.formatted_address }
      />
    )
  })

  return (
    <div>
      <p> <b>Total Count:</b> { props.total_count } </p>
      { locations }
    </div>
  )
}

export default locationsList;
