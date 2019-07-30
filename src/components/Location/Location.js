import React from 'react'

const location = (props) => (
  <div>
    <p><b>Address:</b> { props.formatted_address } <b>ID:</b> { props.location_id }</p>
  </div>
)

export default location;
