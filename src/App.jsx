import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import Loading from "./pages/loading";
import { useState, useEffect } from "react";


function App() {
  const { pathname } = useLocation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
      // Simulando carregamento com timeout
      setTimeout(() => {
          setLoading(false);
      }, 3000); // Aguarde 3 segundos antes de mostrar o conteúdo
  }, []);

  return (
    <>
      <div>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
                     <Navbar routes={routes} />
                    </div>
                    <Routes>
                      {routes.map(
                        ({ path, element }, key) =>
                             element && <Route key={key} exact path={path} element={element} />
                            )}
                          <Route path="*" element={<Navigate to="/home" replace />} />
                          <Route path={pathname} element={<Navigate to="/home" replace />} />
                      </Routes>
                </div>
            )}
        </div>      
    </>
  );
}

export default App;
