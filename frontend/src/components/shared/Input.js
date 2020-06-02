import React from "react";
import styled from "styled-components";

import TextArea from "#root/components/shared/TextArea";
import TextInput from "#root/components/shared/TextInput";

const Check = styled.input`
  margin-right: 0.5rem;
`;
const Checkbox = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Label = styled.label`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  :not(:first-child) {
    margin-left: 0.9rem;
  }
`;

const LabelCol = styled(Label)`
  margin-left: 0 !important;
  :not(:first-child) {
    margin-top: 0.5rem;
  }
`;

const LabelText = styled.span`
  color: ${({ theme }) => theme.nord3};
  font-size: 0.9rem;
  margin-right: 0.3rem;
  text-align: left;
`;

const Radio = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
`;

const Select = styled.select`
  border: 1px solid ${({ theme }) => theme.nord4};
  box-sizing: border-box;
  color: ${({ theme }) => theme.nord1};
  flex: 1;
  font-size: 0.9rem;
  min-width: 120px;
  padding: 0.25rem;
`;

const Input = React.forwardRef(
  ({ disabled, name, options, title, type, value }, ref) => {
    switch (type) {
      case "checkbox":
        return (
          <Checkbox>
            {options.map(option => (
              <LabelCol key={option.value}>
                <Check
                  name={name}
                  ref={ref}
                  type="checkbox"
                  value={option.value}
                />
                <LabelText>{option.title}</LabelText>
              </LabelCol>
            ))}
          </Checkbox>
        );
        break;
      case "radio":
        return (
          <Radio>
            <LabelText style={{ flex: options.length + 1 }}>{title}</LabelText>
            {options.map(option => (
              <Label key={option.value}>
                <Check
                  name={name}
                  ref={ref}
                  type="radio"
                  value={option.value}
                />
                <LabelText>{option.title}</LabelText>
              </Label>
            ))}
          </Radio>
        );
        break;
      case "select":
        return (
          <Label style={{ flex: "1" }}>
            <LabelText>{title}</LabelText>
            <Select name={name} ref={ref}>
              {options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.title}
                </option>
              ))}
            </Select>
          </Label>
        );
        break;
      case "textarea":
        return (
          <Label
            style={{
              flex: 1,
              flexDirection: "column",
              alignItems: "flex-start"
            }}
          >
            <LabelText>{title}</LabelText>
            <TextArea disabled={disabled} name={name} ref={ref} rows="3" />
          </Label>
        );
        break;
      default:
        return (
          <Label style={{ flex: 1 }}>
            <LabelText>{title}</LabelText>
            <TextInput
              disabled={disabled}
              name={name}
              ref={ref}
              type={type}
              defaultValue={value}
            />
          </Label>
        );
    }
  }
);

export default Input;
