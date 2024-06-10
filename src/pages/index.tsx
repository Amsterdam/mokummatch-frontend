import FooterSection from "@/sections/FooterSection";
import React, { ReactNode } from "react";
import NavBarSection from "@/sections/NavBarSection";
import { Box, useTheme } from "@mui/material";

interface IProps {
  children: ReactNode;
  containsFooter?: boolean;
  needMargin?: boolean;
  [x: string]: any;
}

const Page = ({ children, containsFooter, needMargin }: IProps) => {

  const theme = useTheme()

  return (
    <React.Fragment>
      <NavBarSection />
      <Box id='page-container' sx={{
        display: "flex",
        margin: !needMargin ? 0 : "0 120px",
        [theme.breakpoints.down('lg')]: {
          margin: "0 40px",
        },
        [theme.breakpoints.down('sm')]: {
          margin: "0 16px",
        },
        minHeight: 'calc(82vh - 37px)',
      }}>
        <div style={{ marginTop: '12px', width: '100%' }}>{children}</div>
      </Box>
      {containsFooter && <footer style={{ zIndex: '100', marginTop: '10px', bottom: 0, position: 'relative', width: '100%' }} > <FooterSection /> </footer>}
    </React.Fragment>
  );
};

export default Page;
