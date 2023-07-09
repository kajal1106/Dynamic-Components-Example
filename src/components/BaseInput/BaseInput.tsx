import React, { ChangeEvent, FocusEvent, useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
  justify-content: center;
  position: relative;
  color: #333333;
  align-items: center;
`;

const Input = styled.input<{ state?: string }>`
  padding: 12px 22px;
  border: 2px solid #ced4da;
  border-color: ${(props) => {
    if (props.state === 'empty') return '#ced4da';
    if (props.state === 'filled') return '#ced4da';
    if (props.state === 'focus') return '#000000';
    if (props.state === 'error') return '#FF0000';
    if (props.state === 'disabled') return '#ced4da';
    return '#ced4da';
  }};
  border-radius: 4px;
  outline: none;
  font-size: 16px;

  &:focus {
    border-color: ${(props) => (props.state === 'focus' ? '#000000' : '#ced4da')};
  }

  &:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
  }
`;

const Unit = styled.span`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  margin-right: .5em;
`;

interface BaseInputProps {
  unit?: string;
  value: string;
  onChange: (value: string) => void;
  onFocus: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  isfilled: boolean;
  iserror: boolean;
  placeholder: string;
}

const BaseInput: React.FC<BaseInputProps> = ({
  unit,
  value,
  onChange,
  onFocus,
  onBlur,
  isfilled,
  iserror,
  placeholder,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocus(true);
    onFocus(e);
  };

  const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocus(false);
    onBlur(e);
  };

  return (
    <InputContainer>
      {unit && <Unit>{unit}.</Unit>}
      <Input
        type="text"
        value={value}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        state={isFocus ? 'focus' : iserror ? 'error' : value ? 'filled' : 'empty'}
        placeholder={placeholder}
        {...props}
      />
    </InputContainer>
  );
};

export default BaseInput;