import React, { useState } from "react";
import { DynamicInput } from "./DynamicInput";
import PropTypes from 'prop-types';
import styled from 'styled-components'

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

export const FormInput = ({ inputs, setFormInputs, label, helperErrorMessage, ...props}) => {
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

FormInput.propTypes = {
  inputs: PropTypes.array,
  setFormInputs: PropTypes.func,
  label: PropTypes.bool,
  helperErrorMessage: PropTypes.bool,
};

FormInput.defaultProps = {
  inputs: [''],
  setFormInputs: undefined,
  label: true,
  helperErrorMessage: true,
};