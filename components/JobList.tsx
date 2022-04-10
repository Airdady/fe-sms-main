import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

const rows = [
  {
    role: "Frontend Engineer (React + NextjS)",
    location: "Remote",
    type: "full-time",
    action: "",
  },
  {
    role: "Javascript Engineer (React + NodeJs)",
    location: "Remote",
    type: "full-time",
    action: "",
  },
  {
    role: "Sales Marketing Manager",
    location: "Remote",
    type: "full-time",
    action: "",
  },
];

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function AcccessibleTable() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>
          <Typography textAlign="center" my={4}>
            We are always on the lookout for talented folk to join our team.
            Follow us on{" "}
            <Link href="/">
              <a>LinkedIn!</a>
            </Link>
          </Typography>
        </caption>
        <TableHead>
          <TableRow>
            <TableCell>Role</TableCell>
            <TableCell align="left">Location</TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.role}>
              <TableCell component="th" scope="row">
                {row.role}
              </TableCell>
              <TableCell align="left">{row.location}</TableCell>
              <TableCell align="left">{row.type}</TableCell>
              <TableCell align="right">
                <Button variant="outlined" size="small">
                  Apply Now
                </Button>
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
