import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/*Modulo inicio*/
import Home from "./pages/modulo-inicio/Home";
import About from "./pages/modulo-inicio/About";

/*Modulo registro*/
import Login from "./pages/modulo-registro/Login";
import Register from "./pages/modulo-registro/Register";
import Remember from "./pages/modulo-registro/Remember";

/*Modulo Usuarios*/
import Perfil from "./pages/modulo-usuario/perfil-user";
import Reseñas from "./pages/modulo-usuario/reseñas";

/*Modulo productos*/
import Categorias from "./pages/modulo-productos/categorias";
import Productos from "./pages/modulo-productos/productos";
import Promociones from "./pages/modulo-productos/promociones";


/*Modulo Compras*/
import Carrito from "./pages/modulo-compras/carrito-compras";

/*Layouts predeterminados*/
import LoginLayout from "./layouts/LoginLayout";
import MainLayout from "./layouts/MainLayout";
import SimpleLayout from "./layouts/SimpleLayout";
import Compras from "./pages/modulo-compras/carrito-compras";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <MainLayout>
                            <Home />
                        </MainLayout>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <MainLayout>
                            <About />
                        </MainLayout>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <LoginLayout>
                            <Login />
                        </LoginLayout>
                    }
                />
                <Route
                    path="/Register"
                    element={
                        <LoginLayout>
                            <Register />
                        </LoginLayout>
                    }
                />
                <Route
                    path="/Remember"
                    element={
                        <LoginLayout>
                            <Remember />
                        </LoginLayout>
                    }
                />
                <Route
                    path="/Perfil"
                    element={
                        <MainLayout>
                            <Perfil />
                        </MainLayout>
                    }
                />
                <Route
                    path="/Categorias"
                    element={
                        <SimpleLayout>
                            < Categorias/>
                        </SimpleLayout>
                    }
                />
                <Route
                    path="/Productos"
                    element={
                        <SimpleLayout>
                            < Productos/>
                        </SimpleLayout>
                    }
                />
                <Route
                    path="/Promociones"
                    element={
                        <SimpleLayout>
                            < Promociones/>
                        </SimpleLayout>
                    }
                />
                <Route
                    path="/Reseñas"
                    element={
                        <SimpleLayout>
                            < Reseñas/>
                        </SimpleLayout>
                    }
                />
                <Route
                    path="/Compras"
                    element={
                        <SimpleLayout>
                            < Compras/>
                        </SimpleLayout>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;

