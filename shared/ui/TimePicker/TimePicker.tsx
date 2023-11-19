import classNames from 'classnames'
import { FC, useEffect, useRef, useState } from 'react'
import useClickOutside from '@/shared/lib/hooks/useOnClickOutside'
import useWindowSize from '@/shared/lib/hooks/useWindowSize'
import isScrolledIntoView from '@/shared/lib/utils/isScrolledIntoView'
import { secondsToHms, smhToSeconds } from '@/shared/lib/utils/time'
import Label from '@/shared/ui/Label'
import { TimePickerInput } from '@/shared/ui/TimePicker/TimePickerInput'
import { hourOptions, minuteOptions, secondsOptions } from './time-picker.constants'
import './time-picker.scss'
import type { TimePickerPropsType } from './time-picker.types'

const TimePicker: FC<TimePickerPropsType> = ({
  name,
  onChange,
  label,
  value = 0,
  valueFullType,
  errorMessage,
  infoText,
  isShowHours = true,
  isShowMinutes = true,
  isShowSeconds = true,
}) => {
  const errorMessageLocal = valueFullType?.errorMessage ?? errorMessage
  const valueLocal = valueFullType?.value ?? value
  const [isTimePopupShow, handleIsShowTimePopup] = useState(false)
  const { height } = useWindowSize()

  const inputTimeRef = useRef<HTMLDivElement>(null)
  const popupRef = useRef<HTMLDivElement>(null)

  const hoursContainerRef = useRef<HTMLDivElement>(null)
  const minutesContainerRef = useRef<HTMLDivElement>(null)
  const secondsContainerRef = useRef<HTMLDivElement>(null)

  const { hour, minute, seconds } = secondsToHms(valueLocal)

  useClickOutside(popupRef, () => handleIsShowTimePopup(false), ['time-picker__input-container'])
  const updatePopupPosition = () => {
    if (!popupRef.current || !inputTimeRef.current) return

    if (isScrolledIntoView(inputTimeRef.current)) {
      const rect = inputTimeRef.current.getBoundingClientRect()
      if (height - rect.bottom < 250) {
        popupRef.current.style.top = `${rect.y - 250}px`
      } else {
        popupRef.current.style.top = `${rect.y + 30}px`
        popupRef.current.style.left = `${rect.x}px`
        popupRef.current.style.width = `${rect.width}px`
      }
    } else {
      handleIsShowTimePopup(false)
    }
  }
  useEffect(() => {
    if (isTimePopupShow) {
      updatePopupPosition()
      document.addEventListener('scroll', updatePopupPosition, true)
      return () => {
        document.removeEventListener('scroll', updatePopupPosition, true)
      }
    }
  }, [isTimePopupShow])

  const onInputChange = (newTime: number) => {
    onChange({
      target: {
        name,
        value: newTime,
      },
    })
  }

  const timePickerInputContainerClassName = classNames('time-picker__input-container', {
    'time-picker__input-container--error': !!errorMessageLocal,
  })

  return (
    <div className='time-picker'>
      {label && <Label label={label} infoText={infoText} />}

      <div role='button' className='time-picker__focus-container' tabIndex={0}>
        <div
          ref={inputTimeRef}
          onClick={() => handleIsShowTimePopup(true)}
          className={timePickerInputContainerClassName}
        >
          {isShowHours && (
            <>
              <TimePickerInput
                min={0}
                max={23}
                value={hour}
                onChange={(newHoursValue) => {
                  hoursContainerRef.current?.children?.[newHoursValue]?.scrollIntoView()
                  onInputChange(smhToSeconds(seconds, minute, newHoursValue))
                }}
              />
              <span>:</span>
            </>
          )}
          {isShowMinutes && (
            <>
              <TimePickerInput
                min={0}
                max={59}
                value={minute}
                onChange={(newMinutesValue) => {
                  minutesContainerRef.current?.children?.[newMinutesValue]?.scrollIntoView()
                  onInputChange(smhToSeconds(seconds, newMinutesValue, hour))
                }}
              />
              <span>:</span>
            </>
          )}
          {isShowSeconds && (
            <TimePickerInput
              min={0}
              max={59}
              value={seconds}
              onChange={(newSecondsValue) => {
                secondsContainerRef.current?.children?.[newSecondsValue]?.scrollIntoView()
                onInputChange(smhToSeconds(newSecondsValue, minute, hour))
              }}
            />
          )}
        </div>
        {isTimePopupShow && (
          <div ref={popupRef} className='time-picker__popup'>
            {isShowHours && (
              <div ref={hoursContainerRef} className='time-picker__popup-options'>
                {hourOptions.map((time) => (
                  <div
                    key={time.value}
                    onClick={() =>
                      onChange({
                        target: {
                          name,
                          value: smhToSeconds(seconds, minute, time.value),
                        },
                      })
                    }
                    className={classNames('time-picker__popup-option', {
                      active: hour === time.value,
                    })}
                  >
                    {time.text}
                  </div>
                ))}
              </div>
            )}
            {isShowMinutes && (
              <div ref={minutesContainerRef} className='time-picker__popup-options'>
                {minuteOptions.map((time) => (
                  <div
                    key={time.value}
                    onClick={() =>
                      onChange({
                        target: {
                          name,
                          value: smhToSeconds(seconds, time.value, hour),
                        },
                      })
                    }
                    className={classNames('time-picker__popup-option', {
                      active: minute === time.value,
                    })}
                  >
                    {time.text}
                  </div>
                ))}
              </div>
            )}
            {isShowSeconds && (
              <div ref={secondsContainerRef} className='time-picker__popup-options'>
                {secondsOptions.map((time) => (
                  <div
                    key={time.value}
                    onClick={() =>
                      onChange({
                        target: {
                          name,
                          value: smhToSeconds(time.value, minute, hour),
                        },
                      })
                    }
                    className={classNames('time-picker__popup-option', {
                      active: seconds === time.value,
                    })}
                  >
                    {time.text}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      {errorMessageLocal && <div className='input__error-message'>{errorMessageLocal} </div>}
    </div>
  )
}

export default TimePicker
