import { useData } from "@/context/DataContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

function BodyLogin() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let { login } = useData();

  const handleChangeName = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleChangeLastName = (e) => {
    const { value } = e.target;
    setLastName(value);
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
    login();
    router.push("/Dashboard");
  };

  return (
    <div className="body-login">
      <container id="Container1">
        <div className="PresentationMP4">
          {/* <video autoPlay loop className="Video1">
              <source src={VideoLogin} type="video/mp4" />
            </video> */}
        </div>
        <div>
          <h3 className="Slogan">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolor.
          </h3>
        </div>
      </container>
      <container id="Container2">
        <div className="TitleForm">
          <h2>Registrate</h2>
        </div>
        <div className="SignInForm">
          <div className="inputLogin">
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => handleChangeName(e)}
            ></input>
          </div>
          <div className="inputLogin">
            <input
              placeholder="LastName"
              value={lastName}
              onChange={(e) => handleChangeLastName(e)}
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
      </container>
    </div>
  );
}

export default BodyLogin;
