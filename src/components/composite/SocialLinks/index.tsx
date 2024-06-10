import React from "react";
import { ISocialLinkData } from "@/commonInterfaces/instances";
import Header from "@/components/base/Header";
import SocialLinksComponent from "@/components/base/SocialLinks";
import Stack from "@mui/material/Stack";

const SocialLinks = (props: ISocialLinkData) => {

  const { name = '', socials } = props;

  return (
    <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} justifyContent={"space-between"} sx={{ width: '100%', margin: '10px' }}>
      <Header text={name} variant='h3' align={'left'} />
      <SocialLinksComponent
        whatsapp={socials?.whatsapp}
        facebook={socials?.facebook}
        instagram={socials?.instagram}
        twitter={socials?.twitter}
      />
    </Stack>
  );
};

export default SocialLinks;
