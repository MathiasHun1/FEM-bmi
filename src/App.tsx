import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { styled } from '@mui/material/styles';

function App() {
  return (
    <Box>
      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          '&:after': {
            position: 'absolute',
            content: '""',
            inset: 0,
            bottom: '30%',
            background:
              'linear-gradient(to right, white, var(--clr-gradient-end))',
            borderBottomLeftRadius: '35px',
            borderBottomRightRadius: '35px',
            zIndex: -1,
          },
        }}
      >
        <Box sx={{ xs: '40px', display: 'flex', justifyContent: 'center' }}>
          <img src="/images/logo.svg" alt="" />
        </Box>

        <Stack spacing={2} sx={{ textAlign: { xs: 'center' } }}>
          <Typography className="text-2-sb text-dark">
            Body Mass Index Calculator
          </Typography>

          <Typography className="text-6-reg text-light">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </Typography>
        </Stack>

        <Paper
          elevation={0}
          sx={{ height: '400px', mt: 3, p: 3, borderRadius: '16px' }}
        >
          <Box component="form" noValidate>
            <FormControl>
              <FormLabel>
                <Typography className="text-4-sb text-dark">
                  Enter your details below
                </Typography>
              </FormLabel>

              <RadioGroup row aria-label="" name="" defaultValue="imperial">
                <FormControlLabel
                  value="metric"
                  control={<StyledRadio />}
                  label="Metric"
                />
                <FormControlLabel
                  value="imperial"
                  control={<Radio />}
                  label="Imperial"
                />
              </RadioGroup>
              <FormHelperText></FormHelperText>
            </FormControl>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

const StyledRadio = styled(Radio)({
  width: '30px',
  height: '30px',
  outline: '1px solid var(--clr-grey-500)',
  border: 'none',
  '&.MuiRadio-root': { display: 'none' },
});

export default App;
