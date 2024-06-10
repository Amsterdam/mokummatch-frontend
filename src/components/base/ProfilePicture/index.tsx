import { IInstanceProfile } from '@/components/special/AlgorithmTop3/interfaces';
import { SxProps } from '@mui/material';
import Avatar from '@mui/material/Avatar';

export const ProfilePicture = ({
  size = 72,
  top = "42px",
  props,
  sx,
}: { size?: number, top?: string, props: IInstanceProfile, sx?: SxProps }) => {

  const { profilePicture, name } = props

  const firstLetterAvatar = (name: string) => name.substring(0, 1)

  return (
    <Avatar
      src={profilePicture}
      sx={{
        position: 'relative',
        top: top,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: size,
        height: size,
        bgcolor: "#222",
        ...sx
      }} variant="rounded">
      {firstLetterAvatar(name!)}
    </Avatar>
  )
}
