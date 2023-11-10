import { Stack } from '@mui/material';
import Characters from './characters';

const Home = () => {
  return (
    <Stack spacing={1}>
      <h1>Simpsons Characters</h1>
      <Characters />
    </Stack>
  );
};

export default Home;
