import React from "react";
import { Box } from "@mui/system";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    
      <Box
        sx={{
          flexGrow: 1,
          background: "#003748",
          color: "whitesmoke",
        }}
      >
        <Container sx={{ mb: 5 }} maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item md={6}>
              <Typography variant="subtitle2">Contact</Typography>
              <Box sx={{ "*": { my: 1 }, my: 2 }}>
                <Link href="/">
                  <a>(793) 151-6230</a>
                </Link>
                <Link href="/">
                  Theodore Lowe Ap #867-859 Sit Rd. Azusa New York 39531
                </Link>
              </Box>
            </Grid>
            <Grid item md={2}>
              <Typography variant="subtitle2">Our Products</Typography>
              <Box sx={{ "*": { my: 1 }, my: 2 }}>
                <Typography variant="body2" gutterBottom>
                  <Link href="/sms">
                    <a>SMS API</a>
                  </Link>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <Link href="/verification">
                    <a>Verification API</a>
                  </Link>
                </Typography>
              </Box>
            </Grid>
            <Grid item md={2}>
              <Typography variant="subtitle2">Developers</Typography>
              <Box sx={{ "*": { my: 1 }, my: 2 }}>
                <Typography variant="body2" gutterBottom>
                  <Link href="/documentation">
                    <a>Documentation</a>
                  </Link>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <Link href="/">
                    <a>Server SDKs</a>
                  </Link>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <Link href="/">
                    <a>Full Api Reference</a>
                  </Link>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <Link href="/projects">
                    <a>Sample Projects</a>
                  </Link>
                </Typography>
              </Box>
            </Grid>
            <Grid item md={2}>
              <Typography variant="subtitle2">Legal</Typography>
              <Box sx={{ "*": { my: 1 }, my: 2 }}>
                <Typography variant="body2" gutterBottom>
                  <Link href="/terms_of_service">
                    <a>Terms of service</a>
                  </Link>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <Link href="/privacy_policy">
                    <a>Privacy Policy</a>
                  </Link>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <Link href="/code_of_conduct">
                    <a>Code of Conduct</a>
                  </Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Paper sx={{ background: "#01465b", py: 1 }}>
          <Container maxWidth="lg">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography color="whitesmoke" variant="body2">
                Copyright {new Date().getFullYear()} Airdady.com
              </Typography>
              <Box>
                <Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42.62"
                    height="23.548"
                    viewBox="0 0 42.62 23.548"
                  >
                    <path
                      id="Icon_metro-cc-paypal"
                      data-name="Icon metro-cc-paypal"
                      d="M8.527,21.312H8.25q-.351,0-.351-.276a3.952,3.952,0,0,1,.351-1.3.489.489,0,0,1,.277-.3,1.536,1.536,0,0,1,.518-.069q1.424,0,1.424.751a.952.952,0,0,1-.564.912,3.045,3.045,0,0,1-1.378.284Zm6.326,2.468q-.869,0-.869-.445,0-.951,2.275-.951l.055.046A1.3,1.3,0,0,1,14.853,23.78Zm14.318-2.438h-.277q-.351,0-.351-.291a3.952,3.952,0,0,1,.351-1.3.466.466,0,0,1,.268-.291,1.7,1.7,0,0,1,.527-.061q1.424,0,1.424.751a.952.952,0,0,1-.564.912,3.045,3.045,0,0,1-1.378.284ZM35.5,23.8q-.869,0-.869-.46,0-.951,2.275-.951l.055.046A1.3,1.3,0,0,1,35.5,23.8ZM9.47,18.169H7.1a.582.582,0,0,0-.268.061.432.432,0,0,0-.157.115l-.129.192q-.055.107-.832,2.913t-.777,2.943a.246.246,0,0,0,.1.192.378.378,0,0,0,.25.084H6.437a.6.6,0,0,0,.6-.529l.277-1.058.6-.529a10.688,10.688,0,0,0,1.619-.115,8.237,8.237,0,0,0,1.489-.376,2.542,2.542,0,0,0,1.175-.8,2.012,2.012,0,0,0,.435-1.3,1.59,1.59,0,0,0-.268-.935,1.525,1.525,0,0,0-.758-.56,4.56,4.56,0,0,0-.99-.238,9.51,9.51,0,0,0-1.147-.061Zm6.4,1.472a9.994,9.994,0,0,0-1.369.092q-.037,0-.157.015l-.166.023-.139.023-.139.031-.12.046-.12.061-.092.077-.083.107-.074.138a2.192,2.192,0,0,0-.166.6q0,.153.166.153a2.17,2.17,0,0,0,.4-.077l.361-.092a4.968,4.968,0,0,1,1.073-.123q1.369,0,1.369.552a.209.209,0,0,1-.185.215,2.783,2.783,0,0,1-.333.046q-.185.015-.4.023t-.324.023q-.7.061-1.193.153a6.369,6.369,0,0,0-1.045.3,1.779,1.779,0,0,0-.842.6,1.576,1.576,0,0,0-.287.958,1.046,1.046,0,0,0,.481.912,2.045,2.045,0,0,0,1.184.33,3.453,3.453,0,0,0,.842-.1,3.529,3.529,0,0,0,.61-.2q.213-.1.712-.36a.493.493,0,0,0-.055.23.259.259,0,0,0,.1.207.352.352,0,0,0,.231.084h1.036a.618.618,0,0,1,.129-.054,1.186,1.186,0,0,0,.139-.054l.092-.054a.258.258,0,0,0,.092-.084.44.44,0,0,0,.046-.123l.832-2.974a1.317,1.317,0,0,0,.074-.46q0-1.242-2.682-1.242Zm9.767.077H24.269a.945.945,0,0,0-.721.353q-.092.107-.546.782t-.86,1.249a2.513,2.513,0,0,1-.481.59l-.092-.061a7.432,7.432,0,0,0-.5-2.545.306.306,0,0,0-.065-.13.618.618,0,0,0-.111-.1,1.277,1.277,0,0,0-.12-.077.481.481,0,0,0-.157-.046l-.157-.023q-.055-.008-.176-.015t-.166-.008h-.342q-.7,0-.7.322l.018.077a19.873,19.873,0,0,0,.462,2.315q.37,1.5.462,2.192a2.709,2.709,0,0,1,.037.368,1.911,1.911,0,0,1-.564.943q-.564.652-.564.9,0,.2.74.2,1.128,0,1.406-.383L25.6,20.254a1.139,1.139,0,0,0,.185-.4q0-.138-.148-.138ZM30.114,18.2H27.728a.607.607,0,0,0-.536.353q-.111.2-.86,2.936t-.749,2.92q0,.307.8.307h.472l.176-.015.157-.031.157-.046.12-.069.1-.092.055-.13.388-1.4a.441.441,0,0,1,.194-.261.625.625,0,0,1,.361-.107,11.438,11.438,0,0,0,1.619-.107,7.466,7.466,0,0,0,1.489-.376,2.62,2.62,0,0,0,1.175-.8,1.981,1.981,0,0,0,.435-1.288,1.59,1.59,0,0,0-.268-.935,1.525,1.525,0,0,0-.758-.56,4.56,4.56,0,0,0-.99-.238,9.51,9.51,0,0,0-1.147-.061Zm6.4,1.441q-.481,0-1.369.092a2.034,2.034,0,0,0-.888.245.888.888,0,0,0-.2.291,1.7,1.7,0,0,0-.148.6q0,.153.148.153.018,0,.758-.184a4.969,4.969,0,0,1,1.073-.123q1.369,0,1.369.552a.2.2,0,0,1-.185.215q-.074.015-1.054.107-.7.061-1.193.153a6.369,6.369,0,0,0-1.045.3,1.779,1.779,0,0,0-.842.6,1.576,1.576,0,0,0-.287.958,1.033,1.033,0,0,0,.481.9,2.045,2.045,0,0,0,1.184.33,3.81,3.81,0,0,0,1.461-.291q.24-.107.7-.368-.055.23-.055.245a.224.224,0,0,0,.037.13.242.242,0,0,0,.12.084l.148.054a.751.751,0,0,0,.194.031q.129.008.176.008h.324q.777,0,.888-.383l.832-2.974a2.019,2.019,0,0,0,.055-.475q0-1.242-2.682-1.242Zm5.956-1.4H41.454q-.462,0-.61.613-.185.675-.675,2.56t-.786,2.913v.077q0,.245.3.276h1.073a.627.627,0,0,0,.342-.1.412.412,0,0,0,.194-.253L42.823,18.6H42.8l.018-.077a.246.246,0,0,0-.1-.192A.378.378,0,0,0,42.471,18.246Zm2.719-5.994V31.874a1.744,1.744,0,0,1-.7,1.38,2.527,2.527,0,0,1-1.665.583H4.938a2.527,2.527,0,0,1-1.665-.583,1.744,1.744,0,0,1-.7-1.38V12.251a1.744,1.744,0,0,1,.7-1.38,2.527,2.527,0,0,1,1.665-.583H42.823a2.527,2.527,0,0,1,1.665.583A1.744,1.744,0,0,1,45.19,12.251Z"
                      transform="translate(-2.571 -10.289)"
                      fill="#bcbcbc"
                    />
                  </svg>
                </Button>
                <Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="24"
                    viewBox="0 0 43 24"
                  >
                    <path
                      id="Path_25"
                      data-name="Path 25"
                      d="M40,24H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0H40a3,3,0,0,1,3,3V21A3,3,0,0,1,40,24ZM21.834,13.432l-.273,1.27a8.094,8.094,0,0,0,2.187.3c2.054,0,3.392-.761,3.408-1.939.016-.643-.5-1.133-1.63-1.541-.681-.265-1.1-.44-1.1-.7,0-.242.383-.487,1.114-.487h.06a4.41,4.41,0,0,1,1.4.218l.181.064.273-1.228-.047.008a6.169,6.169,0,0,0-1.75-.239c-1.934,0-3.292.77-3.3,1.873-.012.813.97,1.268,1.71,1.539.759.278,1.015.455,1.013.7-.005.378-.609.551-1.168.551a5.1,5.1,0,0,1-1.84-.3Zm7.613.638h0l2.5,0c.058.186.222.779.241.847l1.81,0L32.42,9.256H30.912a1.025,1.025,0,0,0-1.027.47l-2.9,5.195h2.052l.409-.85ZM9.9,9.251l-.025.12a9.741,9.741,0,0,1,1.918.562.339.339,0,0,1,.181.189l1.689,4.792h2.065L18.8,9.256h-2.07l-1.911,3.863-.2-.787-.686-2.6c-.1-.313-.383-.466-.887-.481Zm9.685-.044-1.222,5.669h1.955l1.221-5.668H19.585Zm12.047,3.7H30.01l.778-1.583s.019-.042.056-.117c.057-.117.143-.294.2-.424l.134.489.451,1.634Z"
                      fill="#bcbcbc"
                    />
                  </svg>
                </Button>
                <Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="24"
                    viewBox="0 0 43 24"
                  >
                    <path
                      id="Path_26"
                      data-name="Path 26"
                      d="M40,24H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0H40a3,3,0,0,1,3,3V21A3,3,0,0,1,40,24ZM21.345,18.026h0a7.713,7.713,0,1,0,0-11.495,7.713,7.713,0,1,0,0,11.495ZM31.4,14.189a.739.739,0,0,1-.7-.319,1.522,1.522,0,0,1-.319-.891,1.967,1.967,0,0,1,.445-1.337,1,1,0,0,1,.891-.509,1.1,1.1,0,0,1,.764.382l.127-1.082h.827L32.8,14.125h-.763l.063-.255A.85.85,0,0,1,31.4,14.189Zm.446-2.354a.537.537,0,0,0-.446.318,1.343,1.343,0,0,0-.127.7c0,.38.128.572.382.572a.554.554,0,0,0,.445-.255,1.266,1.266,0,0,0,.191-.763C32.29,12.027,32.14,11.834,31.845,11.834ZM26.88,14.189A.688.688,0,0,1,26.372,14a1.027,1.027,0,0,1-.191-.636.988.988,0,0,1,.318-.827,1.715,1.715,0,0,1,1.018-.318h.319a.265.265,0,0,0,.063-.192c0-.168-.171-.254-.508-.254a3.566,3.566,0,0,0-.828.127,2.057,2.057,0,0,1,.128-.636,2.613,2.613,0,0,1,.891-.191c.718,0,1.082.3,1.082.891a1.71,1.71,0,0,1-.032.255,1.945,1.945,0,0,0-.031.318c-.044.22-.087.509-.128.859a4.451,4.451,0,0,1-.127.732h-.636v-.319A.927.927,0,0,1,26.88,14.189Zm.7-1.4c-.422,0-.636.15-.636.446,0,.211.085.318.254.318a.428.428,0,0,0,.383-.191.781.781,0,0,0,.191-.572Zm-11.326,1.4a3.691,3.691,0,0,1-.827-.064c.043-.174.086-.409.127-.7a3.524,3.524,0,0,0,.7.127c.3,0,.445-.086.445-.255a.263.263,0,0,0-.064-.191.81.81,0,0,0-.318-.191.859.859,0,0,1-.572-.827c0-.675.385-1.018,1.145-1.018a2.927,2.927,0,0,1,.764.064l-.128.7a1.944,1.944,0,0,0-.572-.064c-.254,0-.382.086-.382.255a.257.257,0,0,0,.064.191l.255.127a.947.947,0,0,1,.572.828C17.464,13.846,17.057,14.189,16.255,14.189Zm8.844,0a1.279,1.279,0,0,1-1.018-.445A1.563,1.563,0,0,1,23.7,12.6a2.476,2.476,0,0,1,.508-1.591,1.466,1.466,0,0,1,1.273-.636,3.078,3.078,0,0,1,.891.191l-.127.764a1.586,1.586,0,0,0-.7-.192.856.856,0,0,0-.763.383,1.637,1.637,0,0,0-.255,1.018.87.87,0,0,0,.191.636.6.6,0,0,0,.509.255,1.6,1.6,0,0,0,.7-.191l-.127.827A1.59,1.59,0,0,1,25.1,14.188Zm-4.454,0a1.184,1.184,0,0,1-1.337-1.336,1.908,1.908,0,0,1,.382-1.273,1.158,1.158,0,0,1,.955-.509,1.127,1.127,0,0,1,.827.319,1.041,1.041,0,0,1,.255.763,4.053,4.053,0,0,1-.064.764h-1.59a.613.613,0,0,0,.127.446.781.781,0,0,0,.572.191A1.69,1.69,0,0,0,21.6,13.3l-.127.763A2.235,2.235,0,0,1,20.645,14.188Zm0-2.417c-.253,0-.424.171-.509.509h.891v-.192l-.064-.127a.187.187,0,0,0-.064-.127.181.181,0,0,1-.127-.064Zm-2.291,2.417a.564.564,0,0,1-.636-.636,3.011,3.011,0,0,1,.127-.827l.319-2.037h.763l-.064.445h.382l-.064.764h-.446a2.46,2.46,0,0,1-.063.572,1.884,1.884,0,0,1-.032.255.493.493,0,0,1-.1.255v.255a.225.225,0,0,0,.255.254.573.573,0,0,0,.255-.063l-.128.7A1.943,1.943,0,0,1,18.355,14.188Zm-4.709,0A.683.683,0,0,1,13.136,14a1.035,1.035,0,0,1-.191-.636,1,1,0,0,1,.319-.827,1.811,1.811,0,0,1,1.082-.318h.318v-.191c0-.169-.171-.255-.509-.255a3.6,3.6,0,0,0-.827.127c.041-.167.084-.381.128-.636a2.6,2.6,0,0,1,.891-.191c.718,0,1.082.3,1.082.891a3,3,0,0,1-.064.572c-.036.251-.078.522-.128.828a4.233,4.233,0,0,1-.127.572v.191h-.636v-.319A.926.926,0,0,1,13.646,14.188Zm.7-1.4c-.422,0-.636.15-.636.446,0,.211.086.318.255.318a.432.432,0,0,0,.382-.191.781.781,0,0,0,.191-.572Zm-4.327,1.337H9.256l.636-3.691h1.146v2.29l.827-2.29h1.209l-.636,3.69h-.764l.445-2.8-1.018,2.8h-.572v-2.8l-.509,2.8Zm19.535,0h-.827l.064-.191c.168-.929.3-1.871.382-2.8h.763a1.451,1.451,0,0,1-.063.446.82.82,0,0,1,.382-.383.675.675,0,0,1,.283-.084.229.229,0,0,1,.1.021,1.7,1.7,0,0,0-.319.891.3.3,0,0,0-.072-.009c-.14,0-.266.11-.374.327a12.9,12.9,0,0,0-.318,1.781Zm-6.935,0h-.827l.063-.191c.162-1.134.29-2.076.382-2.8H23l-.063.446a.818.818,0,0,1,.382-.383.331.331,0,0,1,.229-.114.275.275,0,0,1,.153.051,4.832,4.832,0,0,0-.318.891.3.3,0,0,0-.072-.009c-.14,0-.266.11-.375.327a12.613,12.613,0,0,0-.318,1.781Z"
                      fill="#bcbcbc"
                    />
                  </svg>
                </Button>
              </Box>
            </Box>
          </Container>
        </Paper>
      </Box>
  
  );
}
