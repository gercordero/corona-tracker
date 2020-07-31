import React from "react";
import { CardComponent } from "./Card/Card";
import { CardsContainer } from "./Cards.styles";
import { Grid, CircularProgress } from "@material-ui/core";

const Cards = ({ data }) => {
  const cardTypes = [
    {
      dataKey: "confirmed",
      name: "infected",
      message: "Number of active cases from COVID-19.",
    },
    {
      dataKey: "recovered",
      name: "recovered",
      message: "Number of recoveries from COVID-19.",
    },
    {
      dataKey: "deaths",
      name: "deaths",
      message: "Number of deaths caused by COVID-19.",
    },
  ];
  if (!data.confirmed) {
    return <CircularProgress />;
  }
  return (
    <CardsContainer>
      <Grid container spacing={3} justify="center">
        {cardTypes.map((type, i) => (
          <CardComponent
            key={type.dataKey + i}
            cardTitle={type.name.charAt(0).toUpperCase() + type.name.slice(1)}
            className={type.name}
            value={data[type.dataKey].value}
            lastUpdate={data.lastUpdate}
            cardSubtitle={type.message}
          />
        ))}
      </Grid>
    </CardsContainer>
  );
};

export default Cards;
