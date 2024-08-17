// // src/components/PetCounter.js
// import React from 'react';
// import CountUp from 'react-countup';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// const PetCounter = ({ dailyCount, yearlyCount, foundCount }) => {
//   return (
//     <Box textAlign="center" p={3} bgcolor="#f7f9fd" borderRadius="8px" mt={2}>
//       <Typography variant="h4" color="#22badf">
//         Pets Lost
//       </Typography>
//       <Box mt={2}>
//         <Typography variant="h6">
//           Daily: <CountUp end={dailyCount} duration={2} />
//         </Typography>
//         <Typography variant="h6">
//           Annually: <CountUp end={yearlyCount} duration={2} />
//         </Typography>
//         <Typography variant="h6">
//           Have found their way back home!: <CountUp end={foundCount} duration={2} /> %
//         </Typography>
//         <Typography variant="h6" color="#ff5722" mt={2}>
//           We’re here to help increase this number.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default PetCounter;
import React from 'react';
import CountUp from 'react-countup';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const CounterBox = styled(Box)({
  textAlign: 'center',

  //   backgroundColor: '#ffffff',
  //   borderRadius: '12px',
  //   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const CountText = styled(Typography)({
  fontSize: '1.2rem',
  color: '#333',
});

const HighlightText = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.8rem',
  color: '#22badf',
});

const PetCounter = ({ dailyCount, yearlyCount, foundCount }) => {
  return (
    <CounterBox>
      <Box mt={2} textAlign="center" style={{ marginTop: '3rem' }}>
        {/* <CountText
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContents: 'center',
            alignItems: 'center',
          }}
        >
          Daily lost pets:{' '}
          <HighlightText style={{ marginLeft: '1rem' }}>
            <CountUp end={dailyCount} duration={2} />
          </HighlightText>
        </CountText> */}

        <CountText>
          Each year, an estimated
          <HighlightText style={{ marginLeft: '1rem', marginRight: '1rem', display: 'inline' }}>
            <CountUp end={yearlyCount} duration={2} />
          </HighlightText>
          pets are reported lost in Latvia!
        </CountText>
      </Box>
    </CounterBox>
  );
};

export default PetCounter;
