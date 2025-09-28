"use client"


import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCoureselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCoureselArrowsButtons'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'

type Slide = {
  images: string;
  title: string;
  link: string;
}

interface CouresalProps  {
  slides: string[] | Slide;
  options?: EmblaOptionsType;
  isControlVisible?: boolean;
}


const EmblaCarousel: React.FC<CouresalProps> = (props) => {
  const { slides, isControlVisible = true , options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide overflow-hidden" key={`slide${index}`}>
              <div className="embla__slide__number">
                {typeof slide === 'string' ? <Image src={slide} alt={`couresal image`} fill className=' object-cover' /> : <Link href={slide.link}>
                  <Image src={slide.image} alt='couresl image' fill className=' object-cover' />
                  <h3>{slide.title}</h3>
                </Link>}
              </div>
            </div>
          ))}
        </div>
      </div>


      {isControlVisible && (
          
          <div className="embla__controls">
            <div className="embla__buttons">
              <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
              <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
    
            <div className="embla__dots">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={'embla__dot'.concat(
                    index === selectedIndex ? ' embla__dot--selected' : ''
                  )}
                />
              ))}
            </div>
          </div>
      )}
    </section>
  )
}

export default EmblaCarousel
