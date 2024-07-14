// src/OneSignalSetup.js
import OneSignal from 'react-onesignal';

const OneSignalSetup = async () => {
  await OneSignal.init({ appId: '3735c0a8-cefd-4761-8ace-e6d44920aadd' });
  OneSignal.showSlidedownPrompt();
};

export default OneSignalSetup;
