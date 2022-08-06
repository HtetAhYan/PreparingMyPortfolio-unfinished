
import React from 'react';
import ReactLoading from 'react-loading';
 
function Loader({ balls, white })  {
  return (
    <div>
   

    <ReactLoading type={balls} color={white} height={'20%'} width={'20%'} />

    </div>
  )
}

export default Loader
