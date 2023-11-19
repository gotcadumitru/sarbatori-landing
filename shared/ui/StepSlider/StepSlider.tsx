import classNames from 'classnames'
import { FC, useId } from 'react'
import createArrayFromTo from '@/shared/lib/utils/createArrayFromTo'
import Label from '@/shared/ui/Label'
import './step-slider.scss'
import type { StepSliderWithLabelProps } from './stepSlider.types'

const StepSlider: FC<StepSliderWithLabelProps> = ({
  className,
  min,
  max,
  step,
  onChange,
  name,
  label,
  infoText,
  value,
  infoTextLeft,
  infoTextRight,
  ...props
}) => {
  const stepSliderInputId = useId()
  const steps = createArrayFromTo(min, max).map((n) => (
    <span
      key={n}
      onClick={() => onChange?.({ target: { value: n, name } })}
      className={classNames('step-slider__number', {
        'step-slider__number--negative': n < 0,
        'step-slider__number--selected': value === n,
      })}
    >
      {n}
    </span>
  ))
  const dots = createArrayFromTo(min, max).map((n) => <span key={n} className='step-slider__dot' />)

  return (
    <div>
      {label && <Label label={label} infoText={infoText} inputId={stepSliderInputId} />}
      <div className={classNames('step-slider', className)}>
        <input
          type='range'
          id={stepSliderInputId}
          min={min}
          max={max}
          step={step}
          className='step-slider__input'
          name={name}
          value={value}
          onChange={(e) => onChange?.({ target: { value: +e.target.value, name: e.target.name } })}
          {...props}
        />
        <div className='step-slider__track' />
        <div className='step-slider__dots'>{dots}</div>
        <div className='step-slider__numbers'>{steps}</div>
      </div>
      <div className='step-slider__info-text'>
        <span>{infoTextLeft}</span>
        <span>{infoTextRight}</span>
      </div>
    </div>
  )
}
export default StepSlider
