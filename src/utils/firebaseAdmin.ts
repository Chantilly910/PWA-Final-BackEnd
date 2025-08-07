import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(), // o usando serviceAccountKey.json
  });
}

export default admin;
