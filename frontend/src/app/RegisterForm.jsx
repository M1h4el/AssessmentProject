import { useState } from "react";
import { useRouter } from "next/navigation";
import { fetchData } from "../../utils/api";
import "../styles/RegisterForm.scss";

function BodyLogin() {
  const router = useRouter();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeName = (e) => {
    const { value } = e.target;
    setUserName(value);
  };

  const handleChangeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleChangePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleSubmit = (e) => {
    fetchData("users", "POST", {
      userName,
      email,
      password,
    });
    alert("Usuario registrado satisfactoriamente");
    window.location.reload();
  };

  return (
    <div className="body-login">
      <section className="container-1">
        <div className="PresentationMP4">asdasdasd</div>
        <div>
          <h3 className="Slogan">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolor.
          </h3>
        </div>
      </section>
      <section className="container-2">
        <div className="form">
          <div className="TitleForm">
            <h2>Registrate</h2>
          </div>
          <div className="SignInForm">
            <div className="inputLogin">
              <input
                placeholder="Usuario"
                value={userName}
                onChange={(e) => handleChangeName(e)}
              ></input>
            </div>
            <div className="inputLogin">
              <input
                placeholder="E-mail"
                value={email}
                onChange={(e) => handleChangeEmail(e)}
              ></input>
            </div>
            <div className="inputLogin">
              <input placeholder="Confirmar E-mail"></input>
            </div>
            <div className="inputLogin">
              <input
                placeholder="Contraseña"
                value={password}
                onChange={(e) => handleChangePassword(e)}
              ></input>
            </div>
            <div className="inputLogin">
              <input placeholder="Confimar Contraseña"></input>
            </div>
          </div>
        <div className="divButtom">
          <button
            className="custom-buttonSignup"
            onClick={(e) => handleSubmit(e)}
          >
            Sign up
          </button>
        </div>
        </div>
      </section>
    </div>
  );
}

export default BodyLogin;
