import React from "react";
import CountUp from "react-countup";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

export const CardComponent = ({
  cardTitle,
  className,
  value,
  lastUpdate,
  cardSubtitle,
}) => {
  return (
    <Grid item component={Card} xs={12} md={3} className={`card ${className}`}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {cardTitle}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={value} separator="," duration={2.5} />
        </Typography>
        <Typography color="textSecondary">
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2">{cardSubtitle}</Typography>
      </CardContent>
    </Grid>
  );
};
