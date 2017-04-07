import React from 'react';

const Spinner = () => {
  return (
   <div>
      <i className="fa fa-refresh fa-spin fa-3x fa-fw my-spinner"></i>
      <span className="sr=only">Loading...</span>
   </div>
  )
 }

export default Spinner;
