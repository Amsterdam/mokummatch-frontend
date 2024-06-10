import React from 'react';
import { Grid } from '@mui/material';
import HeaderComponent from '@/components/base/Header';
import { useTranslation } from 'react-i18next';
import StyledGridContainer from '@/components/base/StyledGridContainer';

const HeaderSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <Grid
        container
        item
        xs={12}
        sm={8}
        md={8}
        lg={8}
        xl={8}
        direction="row"
        sx={{
          margin: 'auto',
          padding: 0,
        }}
      >
        <HeaderComponent
          variant='h2'
          text={t('pages.ideabox.header')}
          sx={{ width: '100%', }}
        />
        <StyledGridContainer xs={12} sm={8} md={5} lg={5} xl={5}>
        <HeaderComponent
          variant='body1'
          text={t('pages.ideabox.subHeader')}
          isParagraph={true}
          sx={{ width: '100%', }}
        />
        </StyledGridContainer>
      </Grid>
    </>
  );
};

export default HeaderSection;
