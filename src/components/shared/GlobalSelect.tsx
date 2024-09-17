import { Select, SelectProps } from 'antd'
import { useState } from 'react'

const defaultFilterOption = (input: string, option: any) =>
  option.label.toLowerCase().includes(input.toLowerCase())

const GlobalSelect: React.FC<SelectProps> = (props) => {
  const [show, setShow] = useState(false)
  return (
    <Select
      {...props}
      showSearch={show}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      filterOption={defaultFilterOption}
    />
  )
}

export default GlobalSelect
