// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// export default function PricingTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>TYPE</TableCell>
//             <TableCell align="left">TO SEND</TableCell>
//             <TableCell align="left">TO RECEIVE</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
//             <TableCell align="left">Local Numbers</TableCell>
//             <TableCell align="left">$0.0025</TableCell>
//             <TableCell align="left">FREE</TableCell>
//           </TableRow>
//           <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
//             <TableCell align="left">Local Numbers</TableCell>
//             <TableCell align="left">$0.0025</TableCell>
//             <TableCell align="left">FREE</TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

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
