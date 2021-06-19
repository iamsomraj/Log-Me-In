import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { forwardRef, Ref } from "react";
import { useRef } from "react";
import { useImperativeHandle } from "react";
import { RefObject } from "../Util/type";

interface InputControlProps {
  id: string;
  ref: Ref<RefObject>;
  label: string;
  isValid: boolean;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const InputControl: React.FC<InputControlProps> = forwardRef(
  (props, ref: Ref<RefObject>) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const activate = () => {
      if (inputRef && inputRef.current) inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
      return {
        focus: activate,
      };
    });

    return (
      <>
        <FormControl id={props.id}>
          <FormLabel>{props.label}</FormLabel>
          <Input
            ref={inputRef}
            isInvalid={!props.isValid}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
          />
        </FormControl>
      </>
    );
  }
);

export default InputControl;
