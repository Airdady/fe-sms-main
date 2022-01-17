import * as React from "react";
import InputUnstyled, { InputUnstyledProps } from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";

const blue = {
  200: "#80BFFF",
  400: "#3399FF",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const InputStyles = (component?:string) => `
width: 100%;
margin: .5rem 0;
font-size: 0.875rem;
font-weight: 400;
line-height: 1.5;
color: ${grey[900]};
background: ${grey[50]};
border: 1px solid ${grey[300]};
border-radius: 5px;
padding: 10px 10px;
${component === "textarea" && "height:7rem;"}
transition: all 150ms ease;

&:hover {
  background: ${grey[100]};
  border-color: ${grey[400]};
}

&:focus {
  outline: 2px solid ${blue[200]};
  outline-offset: 2px;
}
`;

interface InputProps {
  placeHolder: string;
  component?: string;
}

const AField = ({ component, placeHolder }: InputProps) => {
  const StyledInputElement =
    component === "textarea"
      ? styled("textarea")(({ theme }) => InputStyles('textarea'))
      : styled("input")(({ theme }) => InputStyles());

  const InputField = React.forwardRef(function CustomInput(
    props: InputUnstyledProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) {
    return (
      <InputUnstyled
        components={{ Input: StyledInputElement }}
        {...props}
        ref={ref}
      />
    );
  });

  return <InputField placeholder={placeHolder} />;
};

export default AField;
