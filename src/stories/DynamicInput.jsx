import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BaseInput } from './BaseInput';
import styled from 'styled-components'

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* 1 column by default */
  margin-bottom: ${({ spacing }) => `${spacing}px`};
  grid-gap: ${({ spacing }) => `${spacing}px`};
  width: 100%;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr; /* 2 columns on tablet */
  }

  @media (min-width: 768px) {
    grid-template-columns: ${({ columns }) => (columns === 1 ? '50%' : `repeat(${columns}, 1fr)`)};
    justify-content: center;
    // grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`}; /* Update to multiple columns on desktop */
  }
`;

const InputWrapper = styled.div`
  width: 100%;
`;

const StyledBaseInput = styled(BaseInput)`
  width: 100%;
`;

export const DynamicInput = ({ dynamicInputs, setDynamicInputs, error, setError, columns, spacing, ...props}) => {
  
  const [inputs, setInputs] = useState(dynamicInputs);
  const [focus, setFocus] = useState(false);
  const [errorState, setErrorState] = useState(error);

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    if (index === newInputs.length - 2 && value === '') {
      newInputs.splice(index + 1, 1);
    } else if (index === newInputs.length - 1 && value !== '' && newInputs.length !== 10) {
      newInputs.push('');
    }
    setInputs(newInputs);
  };
  const handleInputFocus = () => {
    setFocus(true);
  }

  const handleInputBlur = () => {
    setFocus(false);
    var hasValueLessThanTen = inputs.some(function (input, index) { 
      if(index !== inputs.length - 1){
        return input.length < 5;
      }
    });
    if(hasValueLessThanTen){
      setError(true);
      setErrorState(true);
    }
    else{
      setError(false);
      setErrorState(false);
    }
  }

  const renderInputs = () => {
    return inputs.map((input, index) => (
      <InputWrapper key={index}>
        <StyledBaseInput
          value={input}
          onChange={(value) => handleInputChange(index, value)}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          isfocus={focus ? 1 : 0}
          // isempty={input.length === 0 ? 1 : 0}
          // isfilled={input.length !== 0 ? 1 : 0}
          iserror={error ? 1 : 0}
          unit={`${index + 1}`}
          placeholder="Enter a value"
          {...props}
        />
      </InputWrapper>
    ));
  };

  return <InputContainer columns={columns} spacing={spacing} >{renderInputs()}</InputContainer>;
};

DynamicInput.propTypes = {
  dynamicInputs: PropTypes.array,
  setDynamicInputs: PropTypes.func,
  error: PropTypes.bool,
  setError: PropTypes.func,
  columns: PropTypes.number,
  spacing: PropTypes.number
};

DynamicInput.defaultProps = {
  dynamicInputs: [''],
  setDynamicInputs: undefined,
  error: false,
  setError: () => {},
  columns: 1,
  spacing: 8
}