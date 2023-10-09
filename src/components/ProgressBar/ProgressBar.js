// import { useState } from 'react'
import * as S from './ProgressBarStyle'

export default function ProgressBar({ duration, currentTime, setCurrentTime }) {
  // const [currentTime, setCurrentTime] = useState(70)

  return (
    <S.StyledProgressInput
      type="range"
      min={0}
      max={duration}
      value={currentTime}
      step={0.01}
      onChange={(event) => setCurrentTime(event.target.value)}
      $color="#ff0000"
    />
  )
}
