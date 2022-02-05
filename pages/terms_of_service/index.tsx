import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "../../components/AppBar";
import { List, ListItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import Footer from "../../components/Footer";

const PrivacyPolicy: NextPage = () => {
  return (
    <Box>
      <ResponsiveAppBar />
      <Box
        sx={{
          bgcolor: "#41AACB",
          width: "100%",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontFamily: "poppins", fontWeight: 600, mt: -4.7 }}
        >
          Terms of Service
        </Typography>
      </Box>
      <Box sx={{ height: "auto" }}>
        <Container>
          <List>
            <ListItem>
              <Typography
                sx={{
                  fontSize: 18,
                  fontFamily: "poppins",
                  fontWeight: "bolder",
                }}
              >
                Terms and Conditions
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                }}
              >
                This Agreement is made between AirDady, a private company with
                limited liability,The Agreement governs Customer’s licensing and
                use of the Services. By executing an Order Form that references
                this Agreement or by using our Services, Customer agrees to the
                terms of this Agreement as of the Effective Date.
                <br />
                <br />
                Any deviation from this Agreement shall only be valid if and
                agreed upon by and between the Parties in writing.
                <br />
                <br />
                <b>WHEAREAS:</b>
                <br />
                <br />
                a. &nbsp; Airdady is a Cloud Communication Platform as a Service
                (CpaaS) provider and offers solutions to companies and
                businesses for the sending and receipt of electronic
                communication.
                <br />
                <br />
                b. &nbsp; Customer wishes to use Airdady’s Cloud Communication
                Service in its business operation.
                <br />
                <br />
                c. &nbsp; Airdady wishes to provide Cloud Communications
                Services to Customer and Customer wishes to use and pay for
                Cloud Communication Services in accordance with the terms of
                this Agreement.
                <br />
                <br />
                NOW, THEREFORE, in consideration of the mutual agreements,
                covenants and representations contained herein, the Parties
                agree to the following:
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 18,
                  fontFamily: "poppins",
                  fontWeight: "bolder",
                }}
              >
                1. &nbsp; Definitions
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                1. &nbsp; <b>“Affiliate”</b> means, in relation to either Party,
                any legal person which is Controlled by, Controls or is under
                common Control with, such person. Control meaning with respect
                to the relevant person, (i) the direct or indirect ownership or
                control of more than 50% of the (a) ownership interests or (b)
                voting power at the general meeting or a similar body, of that
                person, or (ii) the right or ability to appoint or remove such
                number of the members of the board or a similar body of that
                person with decisive voting power in such body.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                2. &nbsp; <b>“Agreement”</b> means the General Terms and
                Conditions and any exhibits, annexes, and addenda hereto.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                3. &nbsp; <b>“API”</b> means application programming interface.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                4. &nbsp; <b>“Applications”</b> means software-based tools that
                provide a visual interface designed to operate and utilize the
                Platform.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                5. &nbsp; <b>“Beta Release”</b> means new services,
                functionality or features (such as an API, Application,
                Solution, Channel, or other functionality) within the Services
                which is enabled for Customer use for the purpose of testing
                such new services, functionality or features, for technical,
                commercial or any other use.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                6. &nbsp; <b>“Channels”</b> means the services that allow
                point-to-point information exchanges between Customer and the
                end-users of the Messages such as SMS, Voice, Chat, and E-mail.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                7. &nbsp; <b>“Claim”</b> means a third-party claim, demand, suit
                or proceeding.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                8. &nbsp; <b>“Commercial Launch Date”</b> means the date
                specified in the Order Form or in the Dashboard as of which
                Airdady shall start charging Customer for the Services.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                9. &nbsp; <b>“Confidential Information”</b> means information
                maintained in confidence by a Party, information which is marked
                as such, or information whether written or oral that by its
                nature would be understood, by a reasonable person under the
                circumstances, to be confidential information of a party. For
                the avoidance of doubt, the specific content of this Agreement,
                details of the Platform, supporting documentation, the Cloud
                Communication Service, any data or information transmitted by
                Customer through the Platform or used by Customer for or in
                connection with the Cloud Communication Service and the results
                of any performance tests will be regarded as Confidential
                Information.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                10. &nbsp; <b>“Cloud Communication Service” or “Services”</b>{" "}
                means all services and subscriptions provided by Airdady to
                Customer, including, without limitation, the Managed Services,
                the Platform, the Dashboard, the Software, the API, the
                Solutions and the Channels (generally referred to, unless the
                context requires otherwise or is differently defined in the
                Order Form or in the Dashboard).
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                11. &nbsp; <b>“Customer”</b> means any company, business or any
                other entity acting in the exercise of a profession or business
                to which Airdady provides Services and which is named as such in
                the Order Form or in the Dashboard.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                12. &nbsp; <b>“Customer Creation”</b> means any type of creation
                (such as, but not limited to, software, source code, APIs, free
                text, pictures or other functionality) which Customer has
                included in the Services.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                13. &nbsp; <b>“DPA”</b> means the Data Processing Annex which
                forms part of this Agreement. In case of conflict or
                inconsistencies between the data protection related provisions
                of the Agreement and the DPA, the DPA will prevail.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                14. &nbsp; <b>“Data Protection Legislation”</b> means all
                relevant requirements of the applicable data protection
                legislation.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                15. &nbsp; <b>“Dashboard”</b> means Airdady’s customer portal
                available on the Site.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                16. &nbsp; <b>“Effective Date”</b> means when (i) both Parties
                execute an Order Form, (ii) when Customer registers an account
                on the Dashboard, or (iii) when Customer starts using the
                Services.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                17. &nbsp; <b>“End-user”</b> means the private individual who
                ultimately receives the communications sent by Customer or its
                Affiliates via the Services.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                18. &nbsp; <b>“Fees”</b> means the prices paid by Customer for
                the access and use of the Cloud Communication Service.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                19. &nbsp; <b>“Guidelines”</b> means the terms outlined in the
                Order Form, in the Dashboard, or on the Site.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                20. &nbsp; <b>“Inappropriate Content”</b> means collectively any
                content that (i) is unsolicited, including without limitation,
                “junk mail”, “bulk email”, spam or other unsolicited material;
                or (ii) qualifies as spam under any applicable laws and
                regulations; or (iii) potentially causes the introduction of
                harmful computer programs or code in the Platform or End-User’s
                devices; or (iv) violates any legal, regulatory,
                self-regulatory, governmental, statutory or telecommunication
                network operator’s requirements or codes of practice, or
                Third-Party Application Terms; or (v) is unlawful, pornographic,
                abusive, racist, obscene, offensive, threatening, harassing,
                defamatory, discriminatory, misleading or inaccurate; or (vi) is
                harmful or malicious content, including but not limited to hate
                speech, and any other material that Airdady reasonably believes
                degrades, intimidates, encourages violence against, or foments
                prejudicial action against anyone based on gender, race, age,
                ethnicity, nationality, religion, sexual orientation,
                disability, geographic location or other discrimination reason;
                or infringes the intellectual property rights of any person or
                entity; or (vi) is illegal in any other way.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                21. &nbsp; <b>“Integrations”</b> means the interoperable and
                coordinated use of the Services within Third-Party Applications.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                22. &nbsp; <b>“Licensed Material”</b> means the Platform, the
                API, Beta Releases and all Software and related documentation
                provided by Airdady.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                23. &nbsp; <b>“Managed Services”</b> means support-based
                services that provide onboarding and support of the Customer as
                they utilize the Platform, such as the Support Plan.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                24. &nbsp; <b>“Message”</b> or <b>“Messages”</b> means a set of
                systematized, textual, numerical, graphical or phonetical
                characters transmitted between Customer and an End-User over the
                Channels.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                25. &nbsp; <b>“Airdady Library”</b> means the developers’
                resources concerning the use of the Cloud Communication Service
                available on the Site.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                26. &nbsp; <b>“Network Adds-on”</b> means additional telecom
                network services.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                27. &nbsp; <b>“Order Form”</b> means the document as referred to
                in clause 17.2 of the Agreement.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                28. &nbsp; <b>“Party”</b> or <b>“Parties”</b> means Airdady and
                Customer individually or together.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                29. &nbsp; <b>“Platform”</b> means the cloud communication
                platform of Airdady.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                30.&nbsp; <b>“Site”</b> means Airdady’s web domains, including
                the pricing and all other webpages thereof, available at
                www.airdady.com and https://developers.airdady.com/.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                31. &nbsp; <b>“Solution”</b> means the prepackaged and
                preconfigured components of the Platform designed to execute a
                predefined process and produce a specific result which uses the
                Platform and enables Customer to communicate with its clients by
                means of the Channels.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                32. &nbsp; <b>“Subscription”</b> means the plan Customer elects
                for access to and/or use of the Services.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                33. &nbsp; <b>“Subscription Fee(s)”</b> means the monthly or
                yearly recurring fees Customer is charged for the Subscription.
                In the event Customer decides to upgrade its Subscription, the
                relevant Subscription Fee of the higher-tier Subscription shall
                apply pro-rata for the remainder of the term of the Services.
                Any changes to the Subscription Fee shall be applicable as of
                the date of renewal of the Services.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                34. &nbsp; <b>“Support Plan”</b> means the managed support
                services provided by Airdady to Customer in accordance with the
                Guidelines. For the avoidance of doubt, Customer may change the
                Support Plan on monthly basis by giving Airdady prior written
                notice except in the event (i) Customer subscribed to the
                Private Support Plan, (ii) Customer purchased a Technical
                Account Manager as a separate add-on to the applicable Support
                Plan, and/or (iii) Customer subscribed to any paid Support Plan
                at a discounted pricing. Customer understands and agrees that
                upon the occurrence of any of the scenarios mentioned above,
                Customer is committed to the applicable Support Plan for a
                minimum period of twelve months.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                35. &nbsp; <b>“Traffic Commitment”</b> means a committed volume
                for use of the Services as specified in the applicable Order
                Form.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                36. &nbsp; <b>“Taxes”</b> means any and all applicable taxes,
                fees, charges, telecommunications provider surcharges,
                withholding taxes or other similar taxes, including, but not
                limited to, VAT, sales tax and/or use tax.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                37. &nbsp; <b>“Third-Party Applications”</b> means third-party
                internet-based or offline enabled software applications, APIs,
                source code, operating systems, databases (including code
                repositories and package managers) and other types of platforms
                that interoperate with the Cloud Communication Service to enable
                its complete range of functionality. For the avoidance of doubt,
                telecom network providers (such as network (mobile) operators or
                virtual (mobile) network operators) are excluded from this
                definition.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                38. &nbsp; <b>“Third-Party Applications Terms”</b> means the
                terms and conditions, and/or usage policies which directly or
                indirectly apply to use of the Third-Party Applications.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                39. &nbsp; <b>“Transactional Fee(s)”</b> means the fees for the
                use of the Services.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                40. &nbsp; <b>“Trial Period”</b> means the period agreed by the
                Parties for the Customer to use the Services in accordance with
                clause 15 of the Agreement.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 18,
                  fontFamily: "poppins",
                  fontWeight: "bolder",
                }}
              >
                2. &nbsp; Fees
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                1. Customer agrees to pay the Fees as set forth on the Site’s
                pricing page, as may be updated from time to time, or as agreed
                otherwise in the Dashboard or the Order Form
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                2. Unless otherwise stated, all Fees excludes any applicable
                Taxes, including any related interest and/or penalties, and
                other government duties, as well as any other costs, such as
                transaction costs or bank transfer fees. In the event that Taxes
                are (or will be) applicable to the Services set out in this
                Agreement, such Taxes shall be added to the Fees. Customer shall
                be responsible for and pay all Taxes as well as any other costs
                imposed on or with respect to the Services that are subject to
                this Agreement. If Customer is exempt from VAT or if VAT should
                be accounted for under a reverse charge mechanism or similar
                procedure, it is the responsibility of Customer to provide a
                valid VAT or registration number. If for any reason the local
                taxing authorities determine that Customer is not exempt from
                any such Taxes and imposed such Taxes to Airdady, Customer
                agrees to promptly pay Airdady such Taxes, including any
                applicable interest or penalties imposed by the local tax
                authorities.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                3. If Customer is required by law to withhold or pay Taxes,
                levies and/or fees of any nature, Customer shall withhold or pay
                such Taxes, levies and/or fees and shall timely pay the full
                amount(s) to the relevant governmental authority in accordance
                with applicable law. Airdady shall not be responsible for such
                Taxes, levies and/or fees. Additionally, the Fees payable by
                Customer to Airdady shall be increased as necessary so that, net
                of such payments, Customer will pay to Airdady such additional
                amounts as are necessary to ensure recipient of the full amount
                which Airdady would have received before the withholding or
                paying of Taxes.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 18,
                  fontFamily: "poppins",
                  fontWeight: "bolder",
                }}
              >
                3. &nbsp; Provision of Services
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                1. &nbsp; The Cloud Communication Service shall be provided
                subject to the terms of this Agreement and according to the
                terms as specified in the Order Form, the Dashboard, and/or the
                Site.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                2. &nbsp; The Services are designed and aimed to serve companies
                and businesses and are not suitable for personal or household
                use by private individuals.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                3. &nbsp; <b>Use of Third-Party Applications.</b> The Cloud
                Communication Service may enable Customer to use, link,
                integrate, or otherwise use Third-Party Applications. By using
                such Third-Party Application with the Cloud Communication
                Service, Customer agrees to comply with the applicable
                Third-Party Applications Terms and where necessary authorises
                Airdady to accept such Third-Party Applications Terms on
                Customer’s behalf. For the avoidance of doubt, Customer warrants
                to comply with any applicable Third- Party Application Terms,
                and Airdady will have no liability in connection therewith.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                4. &nbsp; <b>Changes to the Services.</b> Airdady reserves the
                unilateral right to change the features and functions of its
                Platform, the Software, the Connectivity Services and the Cloud
                Communication Service in general, provided that such changes do
                not adversely affect the use of the Cloud Communication Service
                by Customer.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                5. &nbsp; <b>Pricing and Payment Terms</b>
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                6. &nbsp; <b>Paid Services.</b> For the avoidance of doubt,
                Airdady shall start charging Customer the Fees for the Cloud
                Communication Service as per the Order Form Start Date or, as of
                when Customer starts using the Cloud Communication Services.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                7. &nbsp; <b>Overdue Fees.</b> Airdady may charge interest as
                per the maximum amount permitted by law if the Fees are not paid
                within the term specified in the Order Form, the Dashboard,
                and/or on the Site. If Customer is more than thirty (30) days
                overdue on its payment obligations, this constitutes a material
                breach of this Agreement.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                8. &nbsp; <b>Monthly Credit Limit.</b> If applicable, Customer
                shall adhere to any monthly credit limit. If Customer does not
                reach the monthly credit limit amount by the end of a calendar
                month, Airdady will invoice Customer at the end of such
                corresponding calendar month for its usage of the Services. If
                Customer reaches the monthly credit limit before the end of the
                corresponding calendar month, Airdady will invoice Customer and
                such an invoice shall be due and payable immediately.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                9. &nbsp; <b>Suspension of Service.</b> Airdady may suspend the
                provision of the Cloud Communication Service with immediate
                effect if Customer fails to comply with any applicable payment
                obligations and if Customer exceeds the monthly credit limit as
                specified in the Order Form, the Dashboard, and/or on the Site,
                or if Airdady has substantiated reason to believe that
                Customer’s use of the Service (i) would constitute a breach of
                Third-Party Application Terms or (ii) includes transmission of
                Inappropriate Content or (iii) is in breach of sub-clause 6.12.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                10. &nbsp; <b>Fees changes.</b> Unless differently specified in
                the Order Form, the Dashboard, and/or the Site, Airdady may
                change the Fees for the Services anytime. Any changes of the
                Fees will be published on the website of
                www.Airdady.com/en/pricing.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                11. &nbsp; <b>Prepaid credit.</b> Unless differently specified
                in the Order Form, the Dashboard, or on the Site, any prepaid
                balance or credits purchased by Customer will lapse if Customer
                does not use the balance or credits within one year after the
                purchase date. Airdady is not obliged to refund any prepaid
                balance or credit.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                12. &nbsp; <b>Currency.</b> The currency of this Agreement shall
                be defined in the Order Form, the Dashboard, and/or the Site. If
                any payments are being made in a different currency other than
                EUR, the payment shall be calculated according to the official
                exchange rate as listed on www.oanda.com stated on the day when
                such payment is made.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                13. &nbsp; <b>Invoice Disputes.</b> Customer shall raise any
                dispute or other claim regarding an invoice, including any
                billing discrepancy, or other notice issued by Airdady under
                this Agreement within fifteen (15) days after the date of such
                invoice or notice, in writing to Airdady. If Customer fails to
                raise any dispute or claim, Customer no longer has any right
                under this Agreement to bring any dispute or claim regarding
                such invoice or notice. Customer understands and agrees that any
                billing disputes have to be made specific as to the relevant
                Service and the price charged for such Service. Any such dispute
                does not waive, delay or uphold any payment obligations of
                Customer (other than for disputed amounts).
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                14. &nbsp; <b>Traffic Commitment.</b> Any applicable Traffic
                Commitment is specified in an Order Form. If Customer is subject
                to a Traffic Commitment, Customer shall use Services in an
                amount no less than the applicable Traffic Commitment. If
                Customer fails to meet the Traffic Commitment, Airdady is
                entitled to invoice Customer for the amount that would have been
                due and payable had Customer complied with the Traffic
                Commitment. Any remaining balance of the Traffic Commitment at
                the end of a specified commitment period (e.g. week, month,
                quarter or year) may not be transferred to the subsequent month.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                15. &nbsp; <b>Dunning Notifications.</b> In case of overdue
                Fees, and after sending a notice of overdue unpaid invoices over
                email, as stipulated under clauses 4.2 and 17.1 of this
                Agreement, Airdady holds the right to send overdue payment
                reminder notifications via alternate means of communication such
                as SMS and other communication channels available, on the basis
                of the contact information provided by Customer to Airdady for
                the provision of the Services.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 18,
                  fontFamily: "poppins",
                  fontWeight: "bolder",
                }}
              >
                4. &nbsp; Term and Termination
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                1. &nbsp; <b>Term.</b> This Agreement commences on the Effective
                Date and shall continue as long as Customer uses the Cloud
                Communication Services and to the extent applicable, not later
                until all Services entered into under this Agreement have
                expired or have been terminated. Except as may otherwise be
                expressly specified in an Order Form, in the Dashboard or on the
                Site, the Services will automatically renew for additional
                successive periods of equal duration to the initial term unless
                either Party gives the other notice of non-renewal at least
                thirty (30) days before the end of the Term.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                2. &nbsp; <b>Termination by both Parties.</b> In addition to
                clause 5.1, either Party may suspend or terminate this Agreement
                with immediate effect, without being liable to pay any
                compensation or reimbursement, by notifying the other Party if
                any of the following events occurs and each of these events will
                be deemed to be a cause attributable to such other Party:
                <Typography
                  sx={{
                    fontSize: 16,
                    fontFamily: "poppins",
                    fontWeight: "400",
                    pl: 4.7,
                  }}
                >
                  i. &nbsp; the other Party has ceased to exist or has been
                  dissolved; or
                  <br />
                  ii. &nbsp; the other Party has stopped doing business; or
                  <br />
                  iii. &nbsp; the other Party files for bankruptcy, suspension
                  of payments or similar protection from creditors; or
                  <br />
                  iv. &nbsp; the other Party has been declared bankrupt or has
                  been granted suspension of payments, on a temporary basis or
                  otherwise; or
                  <br />
                  v. &nbsp; the other Party commits a material breach of its
                  obligations under this Agreement which is not remedied within
                  fourteen (14) days of written notice from the non-breaching
                  party requesting the breach to be remedied.
                </Typography>
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                3. &nbsp; <b>Unilateral Termination by Airdady.</b> Airdady may
                terminate this Agreement or the provision of certain Services to
                Customer with immediate effect by notifying Customer in the
                event Customer (i) in breach of its obligations under this
                Agreement or if Airdady has substantiated reason to believe that
                Customer’s use of the Service (a) would constitute a breach of
                Third-Party Application Terms or the terms of this Agreement (b)
                is contrary to applicable laws and regulations or public order
                and morality (c) includes transmission of Inappropriate Content
                or (d) is in breach of sub-clause 6.12.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                4. &nbsp; <b>Effect of Termination.</b> Upon termination of this
                Agreement for any reason:
                <Typography
                  sx={{
                    fontSize: 16,
                    fontFamily: "poppins",
                    fontWeight: "400",
                    pl: 4.7,
                  }}
                >
                  i. &nbsp; any accrued rights or liabilities or payments due or
                  the coming into force or continuing in force of any provision
                  of this Agreement which is expressly or by implication
                  intended to survive after termination will not be affected.
                  Without limitation, clauses 5,6,7,10,16 and those provisions
                  necessary for interpretation or enforcement of this Agreement,
                  survive termination or expiry and continue to apply
                  indefinitely;
                  <br />
                  ii. &nbsp; all Licensed Material granted under this Agreement
                  shall immediately terminate;
                  <br />
                  iii. &nbsp; outstanding and undisputed payment obligations
                  will become immediately due and payable; iv.
                  <br />
                  &nbsp; Customer shall immediately cease all use of the Cloud
                  Communication Service;
                  <br />
                  v. &nbsp; Airdady will reasonably cooperate to the extent
                  required with Customer and its service providers in the
                  migration of the Cloud Communication Service to a successor
                  service provider selected by Customer, except in the event the
                  Agreement’s termination is caused by Customer’s breach of this
                  Agreement;
                  <br />
                  vi. &nbsp; Airdady shall not be obliged to refund any prepaid
                  balance on the account; and
                  <br />
                  vii. &nbsp; Airdady reserves the right to charge any remaining
                  committed Fees despite the termination.
                </Typography>
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 18,
                  fontFamily: "poppins",
                  fontWeight: "bolder",
                }}
              >
                5. &nbsp; Customer Obligations
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                1. &nbsp; Customer shall pay for the Cloud Communication Service
                in accordance with the terms set out in the Order For, the
                Dashboard, and/or on the Site.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                2. &nbsp; Customer acknowledges and understands that Airdady:
                <br />
                <Typography
                  sx={{
                    fontSize: 16,
                    fontFamily: "poppins",
                    fontWeight: "400",
                    pl: 4.7,
                  }}
                >
                  i. &nbsp; is only a conduit for the transmission of
                  information sent by Customer, and Airdady neither initiates
                  the transmission of information, selects the receivers of the
                  transmission, nor selects or modifies the information
                  contained in the transmission;
                  <br />
                  ii. &nbsp; Customer may not use the Cloud Communication
                  Service or permit it to be used to:
                  <br />
                  iii. &nbsp; transmit Inappropriate Content;
                  <br />
                  iv. &nbsp; interfere with or disrupt the integrity or
                  performance of the Cloud Communication Service in whatever
                  way; and
                  <br />
                  v. &nbsp; access the Cloud Communication Service in order to
                  build a competitive product or service that may compete with
                  Airdady’s Services.
                </Typography>
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                3. &nbsp; Customer is solely and fully responsible for:
                <Typography
                  sx={{
                    fontSize: 16,
                    fontFamily: "poppins",
                    fontWeight: "400",
                    pl: 4.7,
                  }}
                >
                  i. &nbsp; the content of the communications sent by Customer
                  or by a third-party on behalf of Customer and shall ensure
                  on-going compliance with the applicable laws and regulations.
                  Customer shall implement adequate measures to prevent the
                  Cloud Communication Service being used directly or indirectly
                  for illegitimate purposes, or in violation of this Agreement
                  or applicable laws and regulations, or Third-Party
                  Applications Terms;
                  <br />
                  ii. &nbsp; procuring and maintaining its network connections
                  and telecommunications links from its systems to Airdady, and
                  all problems, conditions, delays, delivery failures and all
                  other loss or damage arising from or relating to the
                  Customer’s network connections or telecommunication links or
                  caused by the internet;
                  <br />
                  iii. &nbsp; quality, security and performance of any Customer
                  Creation; and
                  <br />
                  iv. &nbsp; legal and regulatory compliance of any Customer
                  Creation, including use thereof in compliance with any
                  applicable Third-Party Application Terms, and that any
                  Customer Creation is free from third party claims
                  (intellectual property rights claims or other claims).
                </Typography>
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                4. &nbsp; Customer shall, at its own expense, take all security
                measures necessary to:
                <Typography
                  sx={{
                    fontSize: 16,
                    fontFamily: "poppins",
                    fontWeight: "400",
                    pl: 4.7,
                  }}
                >
                  i. &nbsp; prevent any unauthorized and/or third-party access
                  to Customer’s passwords, accounts or keys to the Platform
                  and/or the Dashboard;
                  <br />
                  ii. &nbsp; prevent overuse of the Cloud Communication Service
                  such as Denial-of-Service attacks by implementing rate
                  limiting where applicable;
                  <br />
                  iii. &nbsp; prevent spam and fraudulent traffic by
                  implementing blacklists, content filters and other suitable
                  controls; and
                  <br />
                  iv. &nbsp; ensure timely detection of and response to security
                  incidents, by implementing security monitoring tooling and
                  having security incident response plans and procedures in
                  place.
                </Typography>
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                5. &nbsp; Customer shall conduct regular vulnerability
                assessments and penetration testing to ensure its implementation
                of the Cloud Communication Service is secure.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                6. &nbsp; Customer shall inform Airdady by sending an email to
                security@Airdady.com within twenty- four (24) hours of becoming
                aware of any breach or security incident involving the Cloud
                Communication Service.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                7. &nbsp; Customer shall provide promptly all accurate and
                relevant information reasonably requested by Airdady:
                <Typography
                  sx={{
                    fontSize: 16,
                    fontFamily: "poppins",
                    fontWeight: "400",
                    pl: 4.7,
                  }}
                >
                  i. &nbsp; to confirm Customer’s compliance with its
                  obligations under this Agreement, the applicable laws and
                  regulations; or
                  <br />
                  ii. &nbsp; in response to any request made by any legal,
                  regulatory, self-regulatory, supervisory, or governmental
                  authority, supplier, or operator of a telecommunication
                  network or system or
                  <br />
                  iii. &nbsp; as necessary for the provision of the Services.
                </Typography>
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                8. &nbsp; Customer may not use the Cloud Communication Services
                to perform or/and resell services substantially similar to the
                Cloud Communication Services without the express prior written
                consent of Airdady.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                9. &nbsp; Data Protection
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                10. &nbsp; All personal data shared between the Parties shall
                only be used for purposes relating to this Agreement and/or the
                Services. Each Party shall comply with the Data Protection
                Legislation.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                11. &nbsp; The Parties acknowledge that Airdady is a data
                processor for the purpose of processing personal data on behalf
                of Customer when providing the Cloud Communication Service to
                Customer.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                12. &nbsp; Customer shall ensure that it has obtained all
                required and valid consent under the Data Protection Legislation
                to the extent such consent is required for the processing of
                personal data by Airdady for the performance of the Cloud
                Communication Service. Customer acknowledges that Airdady has
                the right to monitor and intercept any electronic communications
                sent or received by Customer under the Cloud Communication
                Service for the purpose of verifying compliance under this
                Agreement.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                13. &nbsp; To the extent Airdady processes personal data on
                behalf of Customer, Airdady shall comply with the DPA.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                14. &nbsp; The privacy statement of Airdady applies to the
                Services, which can be found on the Site.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                15. &nbsp; Airdady will delete Customer’s personal data after
                the end of the provision of the Services unless applicable laws
                and regulations require storage of the personal data.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 18,
                  fontFamily: "poppins",
                  fontWeight: "bolder",
                }}
              >
                6. &nbsp; Proprietary Rights, Licenses and Trademark
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                1. &nbsp; Airdady hereby grants to Customer a personal,
                non-exclusive, non-transferable, royalty-free license during the
                term of this Agreement to use the Licensed Material, which is
                necessary for Customer to use the Cloud Communication Service as
                agreed under this Agreement.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                2. &nbsp; Subject to the limited rights expressly granted
                hereunder, Airdady or, as applicable, its licensors reserve all
                of its right, title and interest in and to the Cloud
                Communication Service and the Licensed Material, including all
                of its related intellectual property rights. No rights are
                granted to Customer hereunder other than as expressly set forth
                herein.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                3. &nbsp; Customer has the right to access and use the Licensed
                Material subject to the terms of this Agreement.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                4. &nbsp; Customer will not sell, resell, license, sublicense,
                distribute, make available, rent or lease any Cloud
                Communication Service or Licensed Material, to any third-party.
                This restriction does not apply to the use of the Services by
                Customer’s Affiliates provided that the Customer remains liable
                for the actions and omissions of its Affiliates in connection
                with the Affiliates’ use of the Services.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                5. &nbsp; Neither Party shall use the trademarks, logos or trade
                names of the other Party for any purpose without the prior
                written consent of the other Party. Customer agrees that
                Airdady, in its sole discretion and respecting any
                confidentiality undertaking in force between Customer and
                Airdady, may, aligned with best industry practices, use
                Customer’s trade names, trademarks, service marks, logos, domain
                names and other distinctive brand features in presentations,
                marketing materials, customer lists, financial reports and Web
                site listings (including links to your website) for the purpose
                of providing the Services to Customer or demonstrating
                Customer’s use of the Services.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                6. &nbsp; Airdady confirms that it has all the rights in
                relation to the Licensed Material that are necessary to grant
                the rights it purports to grant under, and in accordance with,
                the terms of this Agreement.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                7. &nbsp; For the avoidance of doubt, any and all intellectual
                property rights pertaining to Customer Creation is owned by
                Customer or its licensors, as applicable.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                8. &nbsp; Customer hereby grants Airdady a non exclusive,
                perpetual, non revocable, global, free of charge/fully paid up,
                right to use, copy, translate, create derivative works, adapt,
                change, further develop, exploit, distribute, and sublicense to
                third parties, Customer Creation for the purposes of, for
                example but not limited to, (i) supplying the Services under
                this Agreement, and (ii) Airdady’s own commercial purposes as
                defined by Airdady from time to time. Customer hereby waives, to
                the extent permitted under applicable law, any right to being
                mentioned as author as well as the other (droit morales) in
                relation to Customer Creation.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                9. &nbsp; Customer may provide Airdady with recommendations,
                suggestions, requests, comments, or any other feedback about the
                improvement and functioning of the Services (collectively,
                “Feedback”). By submitting Feedback to Airdady, Customer agrees
                that: (a) Feedback will not be treated as Confidential
                Information or Customer Creation; (b) Airdady owns any Feedback
                and may use this as it deems fit, without any restrictions; and
                (c) Customer is not entitled to, and to the extent required
                waives any right to, any credit, compensation or reimbursement
                of any kind from Airdady under any circumstances for Feedback.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 18,
                  fontFamily: "poppins",
                  fontWeight: "bolder",
                }}
              >
                7. &nbsp; Liability and Indemnification
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                1. &nbsp; Indemnification by Airdady. Airdady will defend,
                indemnify and hold Customer harmless from and against any claim
                and related fees and expenses (including reasonable attorney’s
                fees) made or brought against Customer regarding the Services,
                as made available by Airdady under this Agreement to Customer,
                if the Services infringe any third-party patents, copyrights,
                trademarks, or other proprietary rights. If Airdady receives
                information about an infringement related to the Cloud
                Communication Service, Airdady may, in its discretion, and at no
                cost to Customer:
                <Typography
                  sx={{
                    fontSize: 16,
                    fontFamily: "poppins",
                    fontWeight: "400",
                    pl: 4.7,
                  }}
                >
                  i. &nbsp; modify the Cloud Communication Service so that it no
                  longer infringes or misappropriates,
                  <br />
                  ii. &nbsp; obtain a license for Customer’s continued use of
                  that Cloud Communication Service in accordance with this
                  Agreement, or
                  <br />
                  iii. &nbsp; terminate Customer’s use of that infringing
                  Service upon thirty (30) days’ prior written notice and refund
                  Customer any prepaid fees covering the remainder of the term
                  of the terminated subscriptions.
                </Typography>
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                2. &nbsp; The above defense and indemnification obligations do
                not apply to the extent a claim arises from or relates to:
                <Typography
                  sx={{
                    fontSize: 16,
                    fontFamily: "poppins",
                    fontWeight: "400",
                    pl: 4.7,
                  }}
                >
                  i. &nbsp; the Customer, Customer Creation, or End-User data,
                  <br />
                  ii. &nbsp; the Third-Party Applications,
                  <br />
                  iii. &nbsp; the Customer’s or any user’s breach of this
                  Agreement,
                  <br />
                  iv. &nbsp; any modifications of the Service by or for
                  Customer,
                  <br />
                  v. &nbsp; the use of the Cloud Communication Service in
                  combination with another product or service not provided by
                  Airdady, or
                  <br />
                  vi. &nbsp; the failure to timely implement any modifications,
                  upgrades, replacements or enhancements made available by
                  Airdady to Customer.
                  <br />
                  vii. &nbsp; Beta Releases.
                </Typography>
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                3. &nbsp; This clause provides Airdady’s sole and exclusive
                liability, and Customer’s sole and exclusive remedy, for any
                third-party claims related to the Service or this Agreement.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                4. &nbsp; Indemnification by Customer. Customer shall be fully
                responsible, shall hold Airdady fully harmless and shall fully
                reimburse Airdady, without limitation, at its first demand, for
                all and any direct and/or indirect damages, costs, claims,
                expenses and other liabilities of Airdady (including, but not
                limited to, fines, other penalties or damages resulting from any
                sanctions imposed on Airdady or claims made against Airdady, by
                any End-Users, and/or supervisory or governmental authorities,
                Third-Party Applications and/or any other third parties)
                resulting from:
                <Typography
                  sx={{
                    fontSize: 16,
                    fontFamily: "poppins",
                    fontWeight: "400",
                    pl: 4.7,
                  }}
                >
                  i. &nbsp; any allegation that the use of the Cloud
                  Communication Service by Customer results in any infringement
                  of the rights of any third-party, including End-Users, anylaw
                  or regulation;
                  <br />
                  ii. &nbsp; Customer's breach of any of its obligations under
                  this Agreement;
                  <br />
                  iii. &nbsp; any content, in particular (i) any Inappropriate
                  Content transmitted by Customer, (ii) any use of Third-Party
                  Applications, (iii) any Customer Creation, including offering
                  it as part of the Services, or use of any Customer Creation;
                  and/or
                  <br />
                  iv. &nbsp; alleged infringement of any Third-Party Application
                  Terms, third- party rights, including patents, copyrights
                  (including in open source software), open source license
                  terms, trademarks, or other proprietary rights resulting from
                  offering any Customer Creation as part of the Services, or use
                  of any Customer Creation.
                </Typography>
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                5. &nbsp; Indemnification Procedures. The indemnifying party’s
                obligations are conditioned upon the indemnified party (i)
                giving the indemnifying party prompt written notice of the claim
                to the extent possible, and (ii) granting full control of the
                defense and settlement to the indemnifying party (provided
                however, the indemnified party may participate with counsel of
                its choosing at its own expense).
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                6. &nbsp; Exclusion of Liability. Airdady shall in no way or
                manner be responsible or liable to Customer, its contractual
                partners or End-Users for:
                <Typography
                  sx={{
                    fontSize: 16,
                    fontFamily: "poppins",
                    fontWeight: "400",
                    pl: 4.7,
                  }}
                >
                  i. &nbsp; faults, errors or delays in the delivery,
                  transmission, re-transmission or reception of, or parts
                  thereof, the Services if this is not covered under the SLA;
                  <br />
                  ii. &nbsp; any content and any Inappropriate Content
                  transmitted by Customer;
                  <br />
                  iii. &nbsp; damages resulting from Beta Releases, or the use
                  thereof; and/or
                  <br />
                  iv. &nbsp; availability of any Customer Creation as part of
                  the Services, or use of any Customer Creation.
                </Typography>
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                7. &nbsp; Limitation of Liability
                <Typography
                  sx={{
                    fontSize: 16,
                    fontFamily: "poppins",
                    fontWeight: "400",
                    pl: 4.7,
                  }}
                >
                  i. &nbsp; Airdady’s cumulative liability to customer for all
                  claims arising from or relating to the Agreement or the Cloud
                  Communication Service, whether in contract, tort, or relating
                  to otherwise, will not exceed the total amount of all Fees
                  paid to Airdady in accordance with the Agreement and all
                  orders hereunder during the twelve (12) months immediately
                  prior to the date upon which any such liability arises.
                  Customer acknowledges and agrees that the allocation of the
                  risks under this Agreement is the essential purpose of this
                  clause and that the Fees would be substantially higher if
                  Airdady were to assume any further liability other than as set
                  forth in this Agreement.
                  <br />
                  ii. &nbsp; Except if explicitly provided otherwise in this
                  Agreement, no Party is ever liable (whether in contract, tort
                  – including negligence – or otherwise) for indirect damages,
                  consequential damages, loss of revenue, business, anticipated
                  savings or profits, damages resulting from third-party claims
                  or loss of data.
                </Typography>
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 18,
                  fontFamily: "poppins",
                  fontWeight: "bolder",
                }}
              >
                8. &nbsp; Warranties
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                1. &nbsp; Airdady makes no warranties, whether express, implied
                or statutory with respect to the Cloud Communications Services,
                the Platform or the Services and Airdady expressly disclaims any
                implied warranties to merchantability, merchantable quality or
                fitness for a particular purpose.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                2. &nbsp; Airdady expressly does not guarantee that the Cloud
                Communication Services will be uninterrupted or error free, are
                received properly and/or on time by the end-user. Customer
                acknowledges in this respect that Airdady only operates as a
                conduit for the transmission of electronic communications.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                3. &nbsp; By using the Services, Customer represents and
                warrants that it is a company and/or business and has the power
                to enter into this Agreement. In case of any misrepresentation
                by Customer in regard to the aforementioned confirmation,
                Airdady reserves the right to immediately withdraw from this
                Agreement, without being liable for any damages or costs related
                to such withdrawal.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                4. &nbsp; Customer represents and warrants that it has full
                knowledge of and fully complies with all local requirements
                applicable to the use of the Cloud Communications Services in
                the jurisdictions where it operates.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                5. &nbsp; The Customer guarantees and warrants that it has and
                will maintain all necessary licenses, consents and permissions
                necessary for the use of the Cloud Communication Service.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                6. &nbsp; Customer warrants that any Customer Creation is free
                from any third party claims (including intellectual property
                rights claims) which could limit Airdady’s rights to the Service
                (such as, but not limited to copyleft claims) or in any other
                way cause Airdady damage. Customer shall, in relation to all
                Customer Creation, perform any necessary checks and research to
                confirm this aforementioned freedom to operate.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 18,
                  fontFamily: "poppins",
                  fontWeight: "bolder",
                }}
              >
                9. Force Majeure
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                1. &nbsp; Except for the payment of Fees, each Party will be
                excused from any failure or delay caused by or the result of
                causes beyond its reasonable control in the event (i) it could
                not have been avoided or corrected through (a) the exercise of
                reasonable diligence, including, but not limited to, acts of
                God, fire, flood, hurricane or other natural catastrophe,
                terrorist actions, laws, orders, regulations, directions or
                actions of governmental authorities having jurisdiction over the
                subject matter hereof, or any civil or military authority,
                national emergency, insurrection, riot or war, labor strikes not
                involving either party’s employees, general failure of
                telecommunication or digital transmission links, general failure
                of the Internet, failure of Third-Party Applications, failure of
                any third-party operating systems, platforms, applications or
                networks not under reasonable control of Airdady, or (b) other
                similar occurrence; in addition, the Parties will be excused
                from future performance under this Agreement, if (ii) any Party
                becomes the subject or target of economic or financial sanctions
                or restrictive measures administered or enforced by competent
                governmental authorities, or (iii) the performance of any aspect
                of this Agreement would require a Party to this Agreement to
                engage in a transaction with a person that is or is owned fifty
                percent (50%) or more in the aggregate by any person that is the
                target of economic or financial sanctions or restrictive
                measures administered or enforced by competent governmental
                authorities or is otherwise subject to restrictive measures.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 18,
                  fontFamily: "poppins",
                  fontWeight: "bolder",
                }}
              >
                10. Injunctive Relief
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                1. &nbsp; Both Parties acknowledge that any unauthorized use of
                the Cloud Communication or breach of confidentiality or
                intellectual property provisions herein may cause irreparable
                harm to the other Party, the extent of which would be difficult
                to ascertain. Accordingly, both Parties agree that, in addition
                to any other remedies to which a Party may be legally entitled
                to, either Party will have the right to seek injunctive relief
                in the event of such a breach.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 18,
                  fontFamily: "poppins",
                  fontWeight: "bolder",
                }}
              >
                11. Early Access and Beta Releases.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                1. &nbsp; Airdady may offer Beta Releases for Customers to test
                new services, functionality or new features. In many cases,
                Airdady will invite Customers in writing to test Beta Releases.
                For the avoidance of doubt, Beta Releases are made available on
                an “as is, where is” and “as available” basis and, to the extent
                permitted under applicable law, without any implicit and
                explicit warranties, indemnities, or contractual commitments of
                any kind. Airdady does not provide any support for Beta Releases
                and Beta Releases fall outside the scope of Managed Services and
                Support Plans.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                }}
              >
                2. &nbsp; Beta Releases which are enabled within the Service may
                include a visual indication of it being a Beta Release (such as
                a banner) in order for Customer to know when Customer is using a
                Beta Release.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 18,
                  fontFamily: "poppins",
                  fontWeight: "bolder",
                }}
              >
                12. Trial Period
              </Typography>
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  pl: 7,
                  pb: 3,
                }}
              >
                1. &nbsp; The rights and obligations set out in the Agreement
                apply to the use of the Services in the Trial Period. Customer
                is entitled to terminate the Agreement before the Trial Period
                expires free of charge. Failure to terminate the Agreement
                before the end of the Trial Period, as per the terms and
                conditions indicated in the Dashboard, the Order Form, or on the
                Site will result in the applicable Fees to apply for the period
                agreed on the Site, Dashboard, or Order Form.
              </Typography>
            </ListItem>
          </List>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default PrivacyPolicy;
