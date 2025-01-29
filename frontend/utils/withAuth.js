import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
      const token = localStorage.getItem("jwt");
      console.log(token);

      if (!token) {
        router.replace("/");
      } else {
        setIsAuthenticated(true);
      }
    }, []);

    if (isAuthenticated === null) {
      return <p>Cargando...</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;