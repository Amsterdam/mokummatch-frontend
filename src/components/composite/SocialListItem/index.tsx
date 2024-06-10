import React from "react";
import SocialLinks from "@/components/composite/SocialLinks";
import { ListItem } from "@mui/material";
import Box from "@mui/system/Box";
import { ISocialListItemProp } from "./interfaces";
import StyledGridContainer from "@/components/base/StyledGridContainer";

const SocialListItem = ({ data }: ISocialListItemProp) => {

  return (
    <StyledGridContainer xs={12} sm={12} md={9} lg={9} xl={9}>
      <Box>
        <ListItem style={{ border: '1px solid #E6E6E6', marginTop: '10px' }}>
          <SocialLinks name={data?.name} id={data?.id} socials={data?.socials} />
        </ListItem>
      </Box>
    </StyledGridContainer>
  );
};

export default SocialListItem;
