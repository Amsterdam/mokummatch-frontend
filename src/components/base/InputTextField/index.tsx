import React from "react";
import { IInputTextField } from './interfaces';
import { TextField } from '@mui/material';

export const InputTextField = ({ ...props }: IInputTextField) => {

  const { defaultValue = '', } = props

  const [textFieldValue, setTextFieldValue] = React.useState(defaultValue);
  const [initialTextClear, setInitialTextClear] = React.useState(false)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextFieldValue(event.target.value);
    props.handleChange(event.target.value);
  };

  const handleInitialClear = () => {
    if (!initialTextClear) {
      setTextFieldValue('')
      setInitialTextClear(true)
    }
  }

  return (
    <>
      <TextField
        id="filled-multiline-static"
        multiline
        rows={8}
        value={textFieldValue}
        onFocus={handleInitialClear}
        onChange={onChange}
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? '#fcfcfb' : 'rgba(255, 255, 255, 1)',
          width: '100%',
          margin: 'auto',
          '&.MuiFilledInput-root &:hover': { backgroundColor: 'rgba(255, 255, 255, 1)' },
        }}
        aria-describedby="my-helper-text"
      />
    </>
  )
}
