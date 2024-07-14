// // src/OneSignalSetup.js
// import OneSignal from 'react-onesignal';

// export const initOneSignal = async () => {
//   await OneSignal.init({
//     appId: '77604419-ceb9-4dbe-b27b-259e5a1ff5ba',
//   });
//   OneSignal.showSlidedownPrompt();
// };
import OneSignal from 'react-onesignal';

export const initOneSignal = async () => {
  console.log('Initializing OneSignal'); // Add this line
  await OneSignal.init({
    appId: '77604419-ceb9-4dbe-b27b-259e5a1ff5ba',
  });
  console.log('OneSignal Initialized'); // Add this line
  OneSignal.showSlidedownPrompt();
};
