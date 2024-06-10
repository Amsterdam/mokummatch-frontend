import React from 'react';
import Avatar from '@mui/material/Avatar';
import { ILinkableAvatarProps } from './interfaces';

const LinkableAvatar = (props: ILinkableAvatarProps) => {
  return (
    <a href={props.linkUrl} target="_blank" rel="noreferrer">
      <>
        <Avatar alt={props.alt} src={props.src} sx={{ ...props.style, width: 40, height: 40 }} />
      </>
    </a>
  );
};

export default LinkableAvatar;