// // src/OneSignalSetup.js
// import OneSignal from 'react-onesignal';

// export const initOneSignal = async () => {
//   await OneSignal.init({
//     appId: '77604419-ceb9-4dbe-b27b-259e5a1ff5ba',
//   });
//   OneSignal.showSlidedownPrompt();
// };
// import OneSignal from 'react-onesignal';

// export const initOneSignal = async () => {
//   console.log('Initializing OneSignal'); // Add this line
//   await OneSignal.init({
//     appId: '77604419-ceb9-4dbe-b27b-259e5a1ff5ba',
//     allowLocalhostAsSecureOrigin: true,
//   });
//   console.log('OneSignal Initialized'); // Add this line
//   OneSignal.showSlidedownPrompt();
// };
import OneSignal from 'react-onesignal';

let isOneSignalInitialized = false;

export const initOneSignal = async () => {
  if (isOneSignalInitialized) {
    console.log('OneSignal is already initialized');
    return;
  }
  console.log('Initializing OneSignal');
  await OneSignal.init({
    appId: '07831676-ef12-409c-895e-3352642c136d',
    allowLocalhostAsSecureOrigin: true,
  });
  console.log('OneSignal Initialized');
  OneSignal.showSlidedownPrompt();
  isOneSignalInitialized = true;
};
