 import React from 'react'
 import ReactDOM from 'react-dom'
// import Vimeo from '@u-wave/react-vimeo'

 export default function () {
   return (
     <div style={{marginBottom:"50px"}}>
      <iframe src="https://player.vimeo.com/video/438726640?autoplay=1&loop=1" 
      width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
   )
 };

// export default function () {
//   return (
//     <div className="video">
//       <Vimeo
//         video="https://vimeo.com/437991122"
//         autoplay={false}
//         loop
//         muted={false}
//         showPortrait
//         background={true}
//         controls={false}
//       />
//     </div>
//   )
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

