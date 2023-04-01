import React, { useRef } from 'react'

import Home from './Home'
import Popular from './Popular'
import Feature from './Feature'
import Deal from './Deal'
import ComingPds from './comingPds'
import Footer from './Footer'

const RenderingAllPages = () => {
  
  return (
    <div>
      <Home/>
      <Popular/>
      <Feature/>
      <Deal/>
      <ComingPds/>
      <Footer/>
    </div>
  )
}

export default RenderingAllPages
