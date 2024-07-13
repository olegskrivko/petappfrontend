// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// // Custom Components
// import Footer from '../components/footer/Footer';
// import DrawerAppBar from '../components/navbar/DrawerAppBar';

// const Layout = () => {
//   return (
//     <Box style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <DrawerAppBar />

//       <Box style={{ flex: '1 0 auto', width: '100%' }}>
//         <Container
//           component="main"
//           sx={{
//             flexGrow: 1,
//             paddingTop: '2rem',
//             paddingBottom: '2rem',
//             width: '100%',
//             overflowX: 'hidden',
//           }}
//         >
//           <Outlet />
//         </Container>
//       </Box>
//       <Footer />
//     </Box>
//   );
// };

// export default Layout;
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
// Custom Components
import Footer from '../components/footer/Footer';
import DrawerAppBar from '../components/navbar/DrawerAppBar';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header>
        <DrawerAppBar />
      </header>
      <main style={{ flex: '1 0 auto', width: '100%' }}>
        <Container
          component="main"
          sx={{
            flexGrow: 1,
            pt: '2rem',
            pb: '2rem',
            width: '100%',
            overflowX: 'hidden',
          }}
        >
          <Suspense fallback={<CircularProgress />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </Box>
  );
};

export default Layout;
