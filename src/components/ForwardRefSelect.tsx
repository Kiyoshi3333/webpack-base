import React, { forwardRef } from 'react'
import styled from 'styled-components'

interface ISelectProps {
  options?: { name: string; value: string | number }[]
  name: string,
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`

const StyledSelect = styled.select<ISelectProps>`
  width: 100%;
  height: 30px;
  padding: 0 10px;
  color: #0e0e0e;
  border: 1px solid black;
  font-size: 16px;
`

const Select = forwardRef<HTMLSelectElement, ISelectProps>(
  ({ name, options,onChange }, ref) => {
    return (
      <>
        <SelectContainer>
          <StyledSelect name={name} ref={ref} onChange={onChange}>
            {options?.map((op, index) => (
              <option key={index} value={op.value}>
                {op.name}
              </option>
            ))}
          </StyledSelect>
        </SelectContainer>
      </>
    )
  }
)

export default Select
