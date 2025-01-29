import { useData } from "@/context/DataContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { fetchData } from "../../utils/api";

function BodyLogin() {
  const router = useRouter();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let { login } = useData();

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
      <div id="Container1">
        <div className="PresentationMP4">

        </div>
        <div>
          <h3 className="Slogan">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolor.
          </h3>
        </div>
      </div>
      <div id="Container2">
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
            <input placeholder="Confirm E-mail"></input>
          </div>
          <div className="inputLogin">
            <input
              placeholder="Password"
              value={password}
              onChange={(e) => handleChangePassword(e)}
            ></input>
          </div>
          <div className="inputLogin">
            <input placeholder="Confim Password"></input>
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
    </div>
  );
}

export default BodyLogin;
