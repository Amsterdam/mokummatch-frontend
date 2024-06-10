import React from 'react';
import { Grid } from '@mui/material';
import { IdeaBox } from '@/components/composite/IdeaBox';
import { useTranslation } from 'react-i18next';

const IdeaBoxSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <Grid item>
        <IdeaBox
          headerText={t('pages.ideabox.ideaboxHeader')}
          subHeaderText={t('pages.ideabox.ideaboxSubHeader')}
          defaultTextValue={t('pages.ideabox.defaultTextValue')}
          buttonLabel={t('pages.ideabox.ideaboxSendButton')}
        />
      </Grid>
    </>
  );
};

export default IdeaBoxSection;