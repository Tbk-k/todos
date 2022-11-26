import React, { useState } from "react";
import { StyledDiv, Wrapper } from "./Login.styles";
import Btn from "../../components/atoms/btn/Btn";
import { Link, useNavigate } from "react-router-dom";
import AppHeader from "../../components/atoms/appHeader/AppHeader";
import ErrMsg from "../../components/atoms/errMsg/ErrMsg";
import axios from "axios";

const Login = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState("");

  const changeHadler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3005/api/auth/login", inputs, {
        withCredentials: true,
      });
      navigate("/profil");
    } catch (err) {
      setErrors(err.response.data);
    }
  };
  console.log(inputs);
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Athiti:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <AppHeader />
      <Wrapper>
        <h2>
          Zaloguj się <br /> do <span>taskoo</span>
        </h2>
        <form onSubmit={submitHandler}>
          {errors ? <ErrMsg msg={errors} /> : null}
          <label htmlFor="email">Adres e-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={inputs.email}
            onChange={changeHadler}
          />
          <label htmlFor="pwd">Hasło</label>
          <input
            type="password"
            id="pwd"
            name="password"
            required
            value={inputs.password}
            onChange={changeHadler}
          />
          <StyledDiv>
            <p>
              Nie masz jeszcze konta?
              <br /> <Link to="/signUp">Utwórz</Link> je teraz.
            </p>
          </StyledDiv>
          <Btn width="70%" label="zaloguj" />
        </form>
      </Wrapper>
    </>
  );
};

export default Login;
