import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React, { useState } from "react";
import ProfileIcon from "../../components/atoms/profilIcon/ProfileIcon";

import {
  BtnWrapper,
  FormGroup,
  FormInnerWrapper,
  StyledForm,
  StyledTxtArea,
  Wrapper,
} from "./NewTask.styles";
import DiamondIcon from "@mui/icons-material/Diamond";
import { Link } from "react-router-dom";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

const NewTask = () => {
  const date = {
    fullDate: "",
    time: "",
  };
  const getFullDate = () => {
    date.fullDate = new Date().toJSON().slice(0, 10);
  };

  const getCurrentTime = () => {
    date.time = new Date().toLocaleTimeString("pl-PL", {
      hour: "numeric",
      minute: "numeric",
    });
  };

  getFullDate();
  getCurrentTime();

  const [inputs, setInputs] = useState({
    title: "",
    date: date.fullDate,
    color: "",
    start: date.time,
    end: "",
    dsc: "",
  });

  const data = [
    {
      id: 1,
      type: "date",
      name: "date",
      label: "Data",
      img: <EventNoteIcon />,
      value: inputs.date,
    },
    {
      id: 2,
      type: "color",
      name: "color",
      label: "Kolor",
      img: <ColorLensIcon />,
      value: inputs.color,
    },
    {
      id: 3,
      type: "time",
      name: "start",
      label: "Start",
      img: <WatchLaterIcon />,
      value: inputs.start,
    },
    {
      id: 4,
      type: "time",
      name: "end",
      label: "Koniec",
      img: <WatchLaterIcon />,
      value: inputs.end,
    },
  ];

  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Athiti:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <Wrapper>
        <header>
          <Link to="/profil">
            <ArrowBackIosIcon />
          </Link>
          <Link to="../">
            <DiamondIcon />
            <p>Taskoo</p>
          </Link>
          <ProfileIcon />
        </header>
        <h2>
          Dodaj <br />
          Nowe Zadanie
        </h2>
        <StyledForm action="">
          <label htmlFor="title">Nazwa</label>
          <input
            type="text"
            name="title"
            id="title"
            value={inputs.title}
            onChange={changeHandler}
          />
          <FormInnerWrapper>
            {data.map(({ id, img, label, type, name, value, color }) => (
              <FormGroup key={id}>
                {img}
                <div>
                  <label htmlFor={name}>{label}</label>
                  <input
                    type={type}
                    id={name}
                    value={value}
                    name={name}
                    onChange={changeHandler}
                  />
                </div>
              </FormGroup>
            ))}
          </FormInnerWrapper>
          <StyledTxtArea>
            <label htmlFor="dsc">Opis</label>
            <textarea
              name="dsc"
              id="dsc"
              cols="30"
              rows="7"
              placeholder="Dodaj opis"
              onChange={changeHandler}
              value={inputs.dsc}
            ></textarea>
          </StyledTxtArea>
          <BtnWrapper>
            <button>Utwórz Zadanie</button>
          </BtnWrapper>
        </StyledForm>
      </Wrapper>
    </>
  );
};

export default NewTask;
