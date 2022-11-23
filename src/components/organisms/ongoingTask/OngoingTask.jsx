import React from "react";
import { OngoingCard, OngoingWrapper } from "./OngoingTask.styles";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

const OngoingTask = () => {
  const data = [
    {
      id: 1,
      title: "Wallet App Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      start: "14:30",
      end: "18:00",
    },
    {
      id: 2,
      title: "Dashborad & Mobile App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      start: "12:30",
      end: "14:00",
    },
  ];

  return (
    <OngoingWrapper>
      <div>
        <h2>Rozpoczęte zadania</h2>
        <button>Wszystkie</button>
      </div>
      {data.map((item) => (
        <OngoingCard key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <span>
            <WatchLaterIcon />
            {item.start} - {item.end}
          </span>
        </OngoingCard>
      ))}
    </OngoingWrapper>
  );
};

export default OngoingTask;
