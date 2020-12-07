import React from "react";
import { FieldRenderProps } from "react-final-form";

type PropsInput = FieldRenderProps<string, any>;

export const Input: React.FC<PropsInput> = ({
  input,
  meta,

  ...rest
}: PropsInput) => <input type="text" {...input} {...rest} autoFocus />;

// export const ItemInput: React.FC<PropsInput> = ({
//   input,
//   meta,

//   ...rest
// }: PropsInput) => <input type="text" {...input} {...rest} autoFocus />;
