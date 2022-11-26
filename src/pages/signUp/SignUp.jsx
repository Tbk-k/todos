import React, { useState } from "react";
import { StyledDiv, Wrapper } from "./SignUp.styles";
import Btn from "../../components/atoms/btn/Btn";
import { Link, useNavigate } from "react-router-dom";
import AppHeader from "../../components/atoms/appHeader/AppHeader";
import axios from "axios";
import ErrMsg from "../../components/atoms/errMsg/ErrMsg";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirme: "",
  });
  const [errors, setErrors] = useState("");

  const navigate = useNavigate();

  const changeHadler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const auth = async (data) => {
    try {
      await axios.post("http://localhost:3005/api/auth/signUp", data, {
        withCredentials: true,
      });
      navigate("/profil");
    } catch (err) {
      setErrors(err.response.data);
      console.log(errors);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    auth(inputs);
  };

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
          Zacznij planować
          <br /> z <span>taskoo</span>
        </h2>
        <form onSubmit={submitHandler}>
          {errors ? <ErrMsg msg={errors} /> : null}
          <label htmlFor="email">Adres e-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={inputs.email}
            required
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
          <label htmlFor="confirme">Potwierdź hasło</label>
          <input
            type="password"
            id="confirme"
            name="confirme"
            value={inputs.confirme}
            required
            onChange={changeHadler}
            pattern={inputs.password}
          />
          <StyledDiv>
            <p>
              Masz już konto?
              <br /> Możesz zalogować się <Link to="/login">tutaj</Link>.
            </p>
          </StyledDiv>
          <Btn width="70%" label="zarestruj" />
        </form>
      </Wrapper>
    </>
  );
};

export default SignUp;
