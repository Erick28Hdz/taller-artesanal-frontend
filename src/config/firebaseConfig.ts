// Importa las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ Agregar esto
import { getAnalytics } from "firebase/analytics";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA-3vmZia-YuGvYR2__Lxbb2zHOady_M6Y",
  authDomain: "taller-artesanal-ag.firebaseapp.com",
  projectId: "taller-artesanal-ag",
  storageBucket: "taller-artesanal-ag.appspot.com", // ✅ Corrección del dominio de Storage
  messagingSenderId: "451650035130",
  appId: "1:451650035130:web:ad93ca98cec34899405183",
  measurementId: "G-DVWKK6NY8B",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ Inicializar autenticación
const analytics = getAnalytics(app);

// Exportar lo necesario para usar en otros archivos
export { app, auth, analytics };