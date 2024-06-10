import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Header from '@/components/base/Header';
import { useTheme } from '@mui/material/styles';
import { ProfilePicture } from '@/components/base/ProfilePicture';
import { IInstanceProfile } from '@/components/special/AlgorithmTop3/interfaces';

const ProfileCard = ({ profile }: { profile: IInstanceProfile }) => {

  const theme = useTheme();

  const {
    name = 'Name',
    // gender = 'male',
    description = 'description',
    biography = `This is a small biography section to describe \n
                 what this person or organisation does.`,
  } = profile;

  return (
    <Paper
      // elevation={0}
      sx={{
        marginBottom: '24px',
        maxWidth: 500,
        minWidth: 550,
        width: "100%",
        // zIndex: -100,
        boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.1)",
        [theme.breakpoints.down('xl')]: {
          minWidth: "450px",
          maxWidth: "550px",
        },
        [theme.breakpoints.down('lg')]: {
          minWidth: "450px",
          maxWidth: "450px",
        },
        [theme.breakpoints.down('md')]: {
          minWidth: "300px",
          maxWidth: "450px",
        },
      }}
    >
      <Card sx={{
        borderLeft: '4px solid #EC0000',
        // minWidth: 275,
        minHeight: 150,
      }}>
        <CardContent sx={{'&:last-child': { pb: '8px' }}}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <ProfilePicture props={profile} />
            </Grid>

            <Grid item pt={0} style={{paddingTop: "8px"}} xs={9}>
              <Header variant='h4' align='left' text={name} sx={{
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '32px !important',
                color: theme.palette.primary.main
              }}></Header>

              <Header variant='h5' align='left' text={`${description}`} sx={{
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '18px'
              }}></Header>

              <Typography align='left' variant="body2" sx={{ padding: "4px 0", }}>
                {biography}
              </Typography>

            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default ProfileCard;
