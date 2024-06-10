import React, { useState } from 'react';
import { Grid } from '@mui/material';
import HCaptcha from '@hcaptcha/react-hcaptcha';

import Button from '@/components/base/Button'
import HeaderComponent from '@/components/base/Header';
import { InputTextField } from '@/components/base/InputTextField';

import { POST } from '@/services/http';

import { IdeaBoxProps } from './interfaces';

export const IdeaBox = (props: IdeaBoxProps) => {

  const {
    headerText = 'header',
    // subHeaderText = 'sub-header',
    defaultTextValue = 'Default value',
    buttonLabel = 'send'
  } = props

  const captchaActive: any = process.env.REACT_APP_HCAPTCHA_ACTIVE
  const siteKey: string = process.env.REACT_APP_HCAPTCHA_SITEKEY || ''
  // const eKey: string = process.env.REACT_APP_HCAPTCHA_TOKEN || ''

  // const [placeholderText, setPlaceholderText] = useState<string>(defaultTextValue)
  const [text, setText] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [captchaValidated, setCaptchaValidated] = React.useState(captchaActive === 'true' ? false : true)

  const handleChange = (data: string) => {
    setText(data!);
  }

  const sendIdea = async () => {

    setLoading(true)

    const response = await POST<{}>(process.env.REACT_APP_IDEABOX_ENDPOINT!, { "idea": text });

    if (response) {
      setLoading(false)
      console.log("response: ", response.body)
    }
  }

  const handleVerificationSuccess = (token: any, ekey: any) => {
    setCaptchaValidated(true)
  }

  return (
    <Grid
      container
      item
      xs={12}
      sm={8}
      md={6}
      lg={6}
      xl={5}

      direction="row"
      spacing={0}
      sx={{
        // backgroundColor: '#E6E6E6',
        margin: 'auto',
        padding: 0,
      }}
    >

      {captchaValidated &&
        <HeaderComponent
          variant={'h4'}
          text={headerText}
          align={'left'}
          sx={{ fontWeight: 900, marginTop: '48px', textAlign: 'center' }}
        />
      }

      {!captchaValidated &&
        <Grid
          sx={{
            textAlign: "center",
            width: "100%",
            marginTop: "72px"
          }}>
          <HCaptcha
            sitekey={siteKey}
            onVerify={(token, ekey) => handleVerificationSuccess(token, ekey)}
          />
        </Grid>
      }

      {captchaValidated && <>
        <InputTextField
          id="idea-text"
          defaultValue={defaultTextValue}
          handleChange={handleChange}
        >
        </InputTextField>

        <Grid
          item
          container
          justifyContent="flex-end"
          style={{ padding: '0', width: '100%' }}>
          <Button
            loading={loading}
            color='#ffffff'
            margin='8px 0'
            label={buttonLabel}
            onClick={() => {
              sendIdea()
            }
            }
          />
        </Grid>
      </>
      }

    </Grid >
  );
}
