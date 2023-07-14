import React, { useState } from 'react';
import BaseInput from '../BaseInput/BaseInput';
import styled from 'styled-components';

interface InputContainerProps {
  spacing: number;
  columns: number;
}

const InputContainer = styled.div<InputContainerProps>`
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

interface InputState {
  focus: boolean;
  empty: boolean;
  filled: boolean;
  error: boolean;
  disabled: boolean;
}

interface DynamicInputProps {
  columns: number;
  // columnLayout: any; // Replace with the actual type
  spacing: number;
  inputs: string[];
  setInputs: (inputs: string[]) => void;
  error: boolean;
  setError: (error: boolean) => void;
}

const DynamicInput: React.FC<DynamicInputProps> = ({
  columns,
  // columnLayout,
  spacing,
  inputs,
  setInputs,
  error,
  setError,
  ...props
}) => {
  // eslint-disable-next-line
  const [inputState, setInputState] = useState<InputState>({
    focus: false,
    empty: true,
    filled: false,
    error: false,
    disabled: false,
  });
  const [focus, setFocus] = useState(false);
  // eslint-disable-next-line
  const [errorState, setErrorState] = useState(error);

  // Function to handle input change
  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;

    // Logic to add or remove inputs based on the last input value
    if (index === newInputs.length - 2 && value === '') {
      newInputs.splice(index + 1, 1); // Remove the second last input if it's empty
    } else if (index === newInputs.length - 1 && value !== '' && newInputs.length < 10) {
      newInputs.push(''); // Add a new input if the last input is filled and the total inputs are less than 10
    }

    setInputs(newInputs);
  };

  // Function to handle input focus
  const handleInputFocus = () => {
    setInputState((prevState) => ({ ...prevState, focus: true }));
  };

  // Function to handle input blur
  const handleInputBlur = () => {
    setFocus(false);

    // Check if any input has a value less than 5 characters
    const hasValueLessThanTen = inputs.some(function (input, index) {
      if (index !== inputs.length - 1) {
        return input.length < 5;
      }
      return false;
    });
    if (hasValueLessThanTen) {
      setError(true);
      setErrorState(true);
    } else {
      setError(false);
      setErrorState(false);
    }
    return false;
  };

  // Function to render the dynamic inputs
  const renderInputs = () => {
    return inputs.map((input, index) => (
      <InputWrapper key={index}>
        <StyledBaseInput
          value={input}
          onChange={(value: string) => handleInputChange(index, value)}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          isfocus={focus}
          iserror={error ? true : false}
          unit={`${index + 1}`}
          placeholder="Enter a value"
          {...props}
        />
      </InputWrapper>
    ));
  };

  return <InputContainer columns={columns} spacing={spacing} >{renderInputs()}</InputContainer>;
};

export default DynamicInput;