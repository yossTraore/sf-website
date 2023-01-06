import cn from 'clsx'
import { Select, SelectItem } from 'components/forms/select'
import { slugify } from 'lib/slugify'
import s from './input-fields.module.scss'

export function InputField({
  name = '',
  label = '',
  type = '',
  error = '',
  pattern = undefined,
  placeholder = '',
  value = '',
  onChange,
  onBlur,
  required,
}) {
  return (
    <div className={s.wrapper}>
      <label
        htmlFor={name}
        className={cn(s.label, 'p-xs text-uppercase text-muted')}
      >
        {label} {required && '*'}
      </label>
      <input
        type={type}
        id={name}
        className={cn(s.input)}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
      />
      {error?.type === 'required' && (
        <strong className={cn('p-s', s.error)}>'{label}'' is required</strong>
      )}
      {error?.type === 'validate' && (
        <>
          <strong className={cn('p-s', s.error)}>'{label}'' is invalid.</strong>
          {pattern && <strong className={cn('p-s', s.error)}>{pattern}</strong>}
        </>
      )}
    </div>
  )
}

export function TextArea({
  name = '',
  label = '',
  type = '',
  error = '',
  pattern = undefined,
  placeholder = '',
  value = '',
  onChange,
  onBlur,
  required,
}) {
  return (
    <div className={s.wrapper}>
      <label
        htmlFor={name}
        className={cn(s.label, 'p-xs text-uppercase text-muted')}
      >
        {label} {required && '*'}
      </label>
      <textarea
        type={type}
        id={name}
        className={s.textarea}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
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
  name = '',
  label = '',
  register,
  options,
  required,
}) {
  return (
    <div className={s['multiple-checkboxes']}>
      <label
        htmlFor={name}
        className={cn('p-xs text-muted text-uppercase', s.label)}
      >
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
            required={required}
            {...register(label.toLowerCase())}
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  )
}

export function SelectField({
  name = '',
  label = '',
  options,
  error = '',
  placeholder = '',
  // onChange,
  // onBlur,
  required = false,
}) {
  return (
    <div className={s.wrapper}>
      <label
        htmlFor={name}
        className={cn(s.label, 'p-xs text-uppercase text-muted')}
      >
        {label} {required && '*'}
      </label>
      <Select
        placeholder={placeholder}
        className={s.select}
        name={name}
        required={required}
      >
        {options.map((option, i) => (
          <SelectItem key={i} value={slugify(option)}>
            {option}
          </SelectItem>
        ))}
      </Select>

      {error?.type === 'required' && (
        <p className={cn('p-s', s.error)}>'{label}' field is required</p>
      )}
    </div>
  )
}
