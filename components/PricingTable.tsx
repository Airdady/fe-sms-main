import * as React from "react";
import { styled } from "@mui/system";

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

const Root = styled("div")(
  ({ theme }) => `
  table {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${grey[200]};
    text-align: left;
    padding: 6px;
  }

  th {
    background-color: ${grey[100]};
  }
  `
);

export default function UnstyledTable() {
  return (
    <Root sx={{ maxWidth: "100%" }}>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            <th>TYPE</th>
            <th>SEND</th>
            <th>RECEIVE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Local Numbers</td>
            <td style={{ width: 120 }} align="right">
              $0.0025
            </td>
            <td style={{ width: 120 }} align="right">
              Free
            </td>
          </tr>
          <tr>
            <td>Local Numbers</td>
            <td style={{ width: 120 }} align="right">
              $0.0025
            </td>
            <td style={{ width: 120 }} align="right">
              Free
            </td>
          </tr>
        </tbody>
      </table>
    </Root>
  );
}
