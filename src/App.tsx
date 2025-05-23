import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Form from './components/Form';

function App() {
  return (
    <Box sx={{ pb: 28 }}>
      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          '&:after': {
            position: 'absolute',
            content: '""',
            inset: 0,
            bottom: '10%',
            background:
              'linear-gradient(to right, white, var(--clr-gradient-end))',
            borderBottomLeftRadius: '35px',
            borderBottomRightRadius: '35px',
            zIndex: -1,
          },
        }}
      >
        <Box
          sx={{
            xs: '40px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
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
          elevation={24}
          sx={{
            height: 'fit-content',
            mt: 3,
            p: 3,
            borderRadius: '16px',
            boxShadow: '0 10px 20px 10px var(--clr-blue-100)',
          }}
        >
          <Form />
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
