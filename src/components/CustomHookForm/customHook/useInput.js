import { useState } from "react"

const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue)

  const clearValue = () => setValue('')

  const bindForm = {
    type: 'password',
    value,
    onChange: ({ target: { value: eventValue } }) => {
      setValue(eventValue)
    }
  }

  return [value, bindForm, clearValue]
}

export default useInput