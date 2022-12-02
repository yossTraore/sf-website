import { useBlazeSlider } from 'hooks/use-blaze-slider'

export default function Slider({ children }) {
  const elRef = useBlazeSlider({
    all: {
      slidesToShow: 1.5,
    },
  })

  return (
    <div className="blaze-slider" ref={elRef}>
      <div className="blaze-container">
        <div className="blaze-track-container">
          <div className="blaze-track">{children}</div>
        </div>
      </div>
    </div>
  )
}
