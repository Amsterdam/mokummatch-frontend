import React, { useEffect } from 'react';
import Page from '..';
import { Box, Grid } from '@mui/material';
import HeadingSection from '@/sections/IdeenBak/HeaderSection';
import IdeaBoxSection from '@/sections/IdeenBak/IdeaBoxSection';
import { useAppDispatch } from '@/redux/hooks';
import { setIsQuestion } from '@/redux/Questionnaire/questionnaire';
import { setActiveIndex } from '@/redux/Navbar/navbar';

const IdeaBox = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsQuestion(false));
    dispatch(setActiveIndex(3));
  }, [dispatch]);

  return (
    <Page containsFooter={true} needMargin>
      <Grid item>
        <Box>
          <HeadingSection />
        </Box>
      </Grid>

      <Grid>
        <IdeaBoxSection />
      </Grid>
    </Page>
  );
};

export default IdeaBox;