const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BALoo-2Ri5CexaKRh_6KKjamsoK8X4YMiTZsjIUsmWDTDe8vTfAMkfsCAv3p_4Ot15N9QlIc_d4xCGAfJxjbeT8',
  privateKey: '1kcZPdDHlosEtGvXkz5VdAdoFHdqQMyl4EEvmhk7Geo'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: '.....',
  keys: {
    auth: '.....',
    p256dh: '.....'
  }
};

webpush.sendNotification(vapidKeys, 'Your Push Payload Text');
