import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import { type RadioProps } from '@mui/material/Radio';

const BpIcon = styled('span')({
  borderRadius: '50%',
  width: 30,
  height: 30,
  boxShadow: 'inset 0 0 0 0.5px black',
  backgroundColor: 'transparent',
  '.Mui-focusVisible &': {
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: 'rgba(206,217,224,.5)',
  },
});

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: 'var(--clr-blue-100)',
  boxShadow: 'none',
  position: 'relative',
  '&::before': {
    display: 'block',
    position: 'absolute',
    inset: '8px',
    borderRadius: '50%',
    backgroundColor: 'var(--clr-blue-500)',
    content: '""',
  },
  'input:hover ~ &': {
    filter: 'brightness(102%)',
  },
});

// Inspired by blueprintjs
function BpRadio(props: RadioProps) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

export default BpRadio;
