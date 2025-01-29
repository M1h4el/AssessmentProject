import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(null); // Estado inicial como `null` para esperar validación

    useEffect(() => {
      const token = localStorage.getItem("jwt");
      console.log(token);

      if (!token) {
        router.replace("/");
      } else {
        setIsAuthenticated(true); // Usuario autenticado
      }
    }, []);

    if (isAuthenticated === null) {
      return <p>Cargando...</p>; // Evita renderizar el contenido hasta validar el token
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;