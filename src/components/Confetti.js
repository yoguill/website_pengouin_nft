import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti2 from 'react-confetti'

function Confetti() {
    const { width, height } = useWindowSize()
    return (
      <Confetti2
      numberOfPieces={150}
      gravity={0.01}
        width={width}
        height={height * 1.5}
      />
    )
}

export default Confetti