import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  getSocialLinks,
  getSocialLinksData,
} from "@/redux/Instances/instances";
import { List } from "@mui/material";
import React, { useEffect } from "react";
import SocialListItem from "@/components/composite/SocialListItem";

const SocialListsSection = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSocialLinks());
  }, [dispatch]);

  const socialLinksData = useAppSelector(getSocialLinksData);

  return (
    <>
      <List>
        {socialLinksData?.map((data: any) => {
          return (
            <React.Fragment key={data.id}>
              <SocialListItem data={data} />
            </React.Fragment>
          );
        })}
      </List>
    </>
  );
};

export default SocialListsSection;
