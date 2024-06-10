// import React, { Component, useRef, useEffect } from "react";
// import * as ReactDOMServer from 'react-dom/server';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';

import Header from '@/components/base/Header';
import { AlgorithmTop3 } from '../../components/special/AlgorithmTop3'
import ProfileCard from '../../components/composite/ProfileCard';

import type { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'

import red_marker from '../../assets/icons/red_marker.jpg'
// import map_marker_frame from '../../assets/map_marker_frame.svg'
import { IInstanceProfile } from '@/components/special/AlgorithmTop3/interfaces';
import { ProfilePicture } from '@/components/base/ProfilePicture';
import { EAnswer } from '@/redux/Questionnaire/interfaces';
import { sortByScores } from '@/helpers/general';
import HeaderComponent from '@/components/base/Header';
import { useTranslation } from "react-i18next";

const MainSection = () => {

  const theme = useTheme()
  const { t } = useTranslation();

  const respondentAnswers =
    useSelector((state: RootState) => state.questionnaire.questionnaire)
      .map(question => question?.answer?.answer!)

  const topResultsByScore = (respondentAnswers: EAnswer[]): IInstanceProfile[] => {

    const results = AlgorithmTop3(respondentAnswers)

    const highestMaleByScore: IInstanceProfile = results.find(instance => instance.gender === 'male')!
    const highestFemaleByScore: IInstanceProfile = results.find(instance => instance.gender === 'female')!

    let resultsNoMale = results.filter(instance => instance !== highestMaleByScore)
    let resultsNoFemale = resultsNoMale.filter(instance => instance !== highestFemaleByScore)

    let sortByScoreWithGender = sortByScores([highestMaleByScore, highestFemaleByScore])

    let endResultList = sortByScoreWithGender.concat(resultsNoFemale)

    return endResultList;
  }

  const markerAutoBounds: [number, number][] = [
    topResultsByScore(respondentAnswers)[0]?.coordinates!,
    topResultsByScore(respondentAnswers)[1]?.coordinates!,
    topResultsByScore(respondentAnswers)[2]?.coordinates!,
  ]

  // const amsterdamNorthCenterView: [number, number] = [52.39048895789024, 4.917834968651421]

  // function CustomMapMarker(profile: any) {
  //   return (
  //     <Box sx={{ position: "relative", width: "0" }}>
  //       <ProfilePicture
  //         props={profile}
  //         sx={{
  //           border: `4px solid ${theme.palette.primary.main}`, marginBottom: "16px", top: '35px',
  //         }}
  //       />
  //       <Box sx={{
  //         position: "absolute",
  //         top: "calc(100%)",
  //         left: "calc(50%)",
  //         transform: "translate(-50%,-50%)",
  //         width: "0", height: "0",
  //         borderTop: `10px solid ${theme.palette.primary.main}`,
  //         borderLeft: `10px solid transparent`,
  //         borderRight: `10px solid transparent`,
  //       }}></Box>
  //     </Box>
  //   );
  // }

  const MapMarker = ({ profile }: { profile: IInstanceProfile }) => {

    let {
      // name,
      coordinates
    } = profile;

    const markerIcon = new L.Icon({
      iconUrl: red_marker,
      iconRetinaUrl: red_marker,
      popupAnchor: [-0, -0],
      iconSize: [45, 50],
    });

    return (
      <Marker icon={markerIcon} position={coordinates!}>
        <Popup>
          <ProfilePicture props={profile} />
        </Popup>
      </Marker>
    )
  }

  return (
    <>
      <Grid
        container
        justifyContent="center"
        columns={{ xs: 4, md: 12 }}
        sx={{
          [theme.breakpoints.down('md')]: {
            justifyContent: "center"
          }
        }}
      >
        <Grid
          container
          item
          justifyContent="center"
          xs={12}
          sm={10}
          md={3}
          xl={3}
          style={{ zIndex: 100, width: '100%' }}>
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            sx={{ flexDirection: "column" }}
          >
            <Header variant='h4' text='Jouw Top 3' sx={{
              fontStyle: 'normal',
              fontWeight: 900,
              color: '#000',
              textAlign: "left",
              [theme.breakpoints.down('md')]: {
                textAlign: "center",
                fontSize: "36px !important"
              },
              [theme.breakpoints.down('sm')]: {
                fontSize: "40px !important",
              },
            }}></Header>
             <HeaderComponent
              variant='body1'
              isParagraph={true}
              text={t("pages.topthree.description")}
              align='left'
              sx={{
                marginBottom: '24px',
                [theme.breakpoints.down('md')]: {
                  textAlign: "center",
                },
                [theme.breakpoints.up('md')]: {
                  marginRight: "16px",
                },
              }}
            />
          
            <Grid
              container item
              justifyContent="center"
              direction={{ xs: "row", sm: "row", md: "column", lg: "column", xl: "column" }}
            >
              <ProfileCard profile={topResultsByScore(respondentAnswers)[0]} />
              <ProfileCard profile={topResultsByScore(respondentAnswers)[1]} />
              <ProfileCard profile={topResultsByScore(respondentAnswers)[2]} />
            </Grid>
            <HeaderComponent
              variant='body1'
              isParagraph={true}
              text={t("pages.topthree.notfound")}
              align='left'
              sx={{
                marginBottom: '24px',
                [theme.breakpoints.down('md')]: {
                  textAlign: "center",
                },
                [theme.breakpoints.up('md')]: {
                  marginRight: "16px",
                },
              }}
            />
          </Grid>

        </Grid>

        <Grid item xs={9} sx={{
          zIndex: 50,
          [theme.breakpoints.down('lg')]: {
            margin: "0 -24px"
          },
          [theme.breakpoints.down('md')]: {
            margin: "0 -40px"
          }
        }}>
          <MapContainer

            style={{
              height: 'calc(100%)',
              minHeight: '540px',
            }}
            // Set a static center or do a calculated bounds based on marker positions
            // center={amsterdamNorthCenterView}
            // zoom={14}
            bounds={markerAutoBounds}
            boundsOptions={{ padding: [50, 50] }}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Profile markers */}
            <MapMarker profile={topResultsByScore(respondentAnswers)[0]} />
            <MapMarker profile={topResultsByScore(respondentAnswers)[1]} />
            <MapMarker profile={topResultsByScore(respondentAnswers)[2]} />
            {/* END */}

          </MapContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default MainSection;
