import React, { useState } from 'react';
import styled from 'styled-components';
import DynamicInput from '../DynamicInput/DynamicInput';


const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorMessage = styled.span`
  color: #a30a0a;
`;

const HelperMessage = styled.span`
  color: #717171;
`;

type FormInputProps = {
  inputs: string[];
  setFormInputs: (inputs: string[]) => void;
  label?: boolean;
  helperErrorMessage?: boolean;
};

const FormInput: React.FC<FormInputProps> = ({ inputs, setFormInputs, label, helperErrorMessage }) => {
  const [errorState, setErrorState] = useState(false);

  return (
    <InputContainer>
      {label && <span>{label}</span>}
      <DynamicInput columns={1} spacing={8} inputs={inputs} setInputs={setFormInputs} error={errorState} setError={setErrorState} />
      {helperErrorMessage && (
        <>
          {errorState ? (
            <ErrorMessage>One of the input doesn't meet requirement criteria!</ErrorMessage>
          ) : (
            <HelperMessage>Input should be greater than 5 characters</HelperMessage>
          )}
        </>
      )}
    </InputContainer>
  );
};

export default FormInput;