import admin from "firebase-admin";
import path from "path";

const serviceAccountPath = path.resolve(
  __dirname,
  "Credencials/ServiceAccountKey.json"
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountPath),
});

const db = admin.firestore();

export { db };
