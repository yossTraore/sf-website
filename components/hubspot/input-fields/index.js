import cn from 'clsx'
import { useEffect, useState } from 'react'
import s from './input-fields.module.scss'

export function InputField({
  name,
  label,
  type,
  error,
  pattern = undefined,
  placeholder,
  value,
  onChange,
  onBlur,
}) {
  return (
    <div className={s.wrapper}>
      <label htmlFor={name} className={cn(s.label, 'p-xs')}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        className={cn(s.input, 'forms-fonts')}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error?.type === 'required' && (
        <strong className={cn('p-s', s.error)}>{label} is required</strong>
      )}
      {error?.type === 'validate' && (
        <>
          <strong className={cn('p-s', s.error)}>{label} is invalid.</strong>
          {pattern && <strong className={cn('p-s', s.error)}>{pattern}</strong>}
        </>
      )}
    </div>
  )
}

export function MultipleCheckboxField({
  name,
  label,
  register,
  options,
  required,
}) {
  return (
    <div className={s['multiple-checkboxes']}>
      <label htmlFor={name} className={cn('p-s text-decorative', s.label)}>
        {label} {required && '*'}
      </label>
      {options.map((option) => (
        <label
          className={s.checkbox}
          htmlFor={option}
          key={`checkbox-${option}`}
        >
          <input
            hidden
            id={option}
            type="checkbox"
            value={option}
            name={label}
            {...register(label.toLowerCase())}
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  )
}

export function SelectField({
  name,
  label,
  options,
  error,
  placeholder,
  onChange,
  onBlur,
  required = false,
}) {
  return (
    <div className={s.wrapper}>
      <label htmlFor={name} className={cn(s.label, 'text-decorative')}>
        {label} {required && '*'}
      </label>
      <RawDropdown
        options={options}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
      />
      {error?.type === 'required' && (
        <p className={cn('p-s', s.error)}>'{label}' field is required</p>
      )}
    </div>
  )
}

export const RawDropdown = ({
  placeholder = 'all',
  options = [],
  onChange = () => {},
  onBlur = () => {},
  required = false,
}) => {
  const [currentValue, setCurrentValue] = useState(undefined)
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    onChange(currentValue)
    onBlur(currentValue)
  }, [onBlur, onChange, currentValue])

  useEffect(() => {
    const onClick = () => {
      setOpened(false)
    }
    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <div className={cn('p', s.dropdown, opened && s.opened)}>
      <input required={required} value={currentValue} className={s.required} />
      <div
        className={s.button}
        onClick={(e) => {
          e.stopPropagation()
          setOpened(!opened)
        }}
      >
        {typeof currentValue === 'undefined' ? (
          <span className={cn('p text-uppercase forms-fonts', s.selected)}>
            {placeholder}
          </span>
        ) : (
          <span className={'p text-uppercase forms-fonts'}>{currentValue}</span>
        )}
        v
      </div>
      {opened && (
        <div className={s.options} data-lenis-prevent>
          {options.map((option, key) => (
            <div
              key={key}
              onClick={(e) => {
                e.stopPropagation()
                setCurrentValue(option)
                setOpened(false)
              }}
              className="text-uppercase"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
