import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import BpRadio from './CustomRadio';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';

type ResultData = {
  title: string;
  bmiValue: string;
  description: string;
};

const Form = () => {
  const [height, setHeight] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [resultCardData, setResultCardData] = useState<ResultData>({
    title: '',
    bmiValue: '',
    description: '',
  });

  useEffect(() => {
    const results = calculateResultData();
    setResultCardData(results);
  }, [height, weight]);

  const calculateBmi = () => {
    if (!height || !weight || height <= 0 || weight <= 0) {
      console.error('invalid weight or height value');
      return null;
    }

    const bmiValue = weight / (height * height);
    return bmiValue;
  };

  const calculateIdealWeight = (height: number) => {
    const bmiLowEnd = 18.5;
    const bmiTopEnd = 24.9;

    const targetWeightLow = Number((bmiLowEnd * (height * height)).toFixed(2));
    const targetWeightTop = Number((bmiTopEnd * (height * height)).toFixed(2));

    return {
      targetLow: targetWeightLow,
      targetTop: targetWeightTop,
    };
  };

  const calculateResultData = (): ResultData => {
    // Handle edge cases
    if (!height || !weight || height <= 0 || weight <= 0) {
      return {
        title: 'Welcome!',
        bmiValue: '',
        description:
          "Ener your height and weight and you'll see your BMI result here",
      };
    }

    // DATA to work with
    let result;
    const bmiValue = calculateBmi();
    const idealWeights = calculateIdealWeight(height);

    if (!bmiValue) {
      console.error('something went wrong in calculating bmi');
      return {
        title: '',
        bmiValue: '',
        description: '',
      };
    }

    // Possible results
    if (bmiValue < 18.5) {
      result = {
        title: 'Your BMI is..',
        bmiValue: bmiValue.toFixed(2),
        description: `Your BMI suggests your weight is too low. Your ideal weight is between ${idealWeights.targetLow}kgs - ${idealWeights.targetTop}kgs`,
      };
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      result = {
        title: 'Your BMI is..',
        bmiValue: bmiValue.toFixed(2),
        description: `Your BMI suggests you’re a healthy weight. Your ideal weight is between ${idealWeights.targetLow}kgs - ${idealWeights.targetTop}kgs`,
      };
    } else {
      result = {
        title: 'Your BMI is..',
        bmiValue: bmiValue.toFixed(2),
        description: `Your BMI suggests your weight is too high. Your ideal weight is between ${idealWeights.targetLow}kgs - ${idealWeights.targetTop}kgs`,
      };
    }

    return result;
  };

  return (
    <form>
      <FormLabel sx={{ display: 'block', mb: 3 }}>
        <Typography className="text-4-sb text-dark">
          Enter your details below
        </Typography>
      </FormLabel>

      <Grid container spacing={4} data-name="outer grid">
        {/*------- RADIO BUTTONS -------*/}
        <Grid size={12}>
          <FormControl sx={{ width: '100%' }}>
            <RadioGroup
              row
              aria-label=""
              name=""
              defaultValue="imperial"
              sx={{ width: '100%' }}
            >
              <Grid container sx={{ width: '100%' }}>
                <Grid size={6}>
                  <FormControlLabel
                    value="metric"
                    control={<BpRadio />}
                    label="Metric"
                  />
                </Grid>
                <Grid size={6}>
                  <FormControlLabel
                    value="imperial"
                    control={<BpRadio />}
                    label="Imperial"
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
        </Grid>

        {/*----------- TEXT FIELDS ---------*/}
        <Grid size={12}>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                type="number"
                id=""
                label="height"
                value={height}
                fullWidth
                onChange={({ target }) => setHeight(Number(target.value))}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                id=""
                label="weight"
                value={weight}
                fullWidth
                onChange={({ target }) => setWeight(Number(target.value))}
              />
            </Grid>
          </Grid>
        </Grid>

        {/*------- RESULTS -------*/}
        <Grid size={{ xs: 12 }}>
          <Stack
            spacing={2}
            sx={{
              p: 3,
              background: 'var(--clr-blue-500)',
              borderRadius: '16px',
              width: '100%',
              color: 'white',
            }}
          >
            <div>
              <Typography className="text-6-sb">
                {resultCardData.title}
              </Typography>
              {resultCardData.bmiValue && (
                <Typography className="text-2-sb">
                  {resultCardData.bmiValue}
                </Typography>
              )}
            </div>
            <Typography className="text-7-reg">
              {resultCardData.description}
              {/* Your BMI suggests you’re a healthy weight. Your ideal weight is
              between <strong>63.3kgs - 85.2kgs.</strong> */}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
