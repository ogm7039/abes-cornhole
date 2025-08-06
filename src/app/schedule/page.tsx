"use client"

import { useState, useEffect } from "react";
import ScheduleWeek from "./scheduleWeek";

export default function Schedule() {
    const scheduleData = [
        [{home: "Team One", away: "Team Two", homeScore: "1", awayScore: "2"}, {home: "Team Three", away: "Team Four", homeScore: "1", awayScore: "2"}, {home: "Team Five", away: "Team Six", homeScore: "1", awayScore: "2"}],
        [{home: "Team One", away: "Team Three", homeScore: "1", awayScore: "2"}, {home: "Team Two", away: "Team Five", homeScore: "1", awayScore: "2"}, {home: "Team Four", away: "Team Six", homeScore: "1", awayScore: "2"}],
        [{home: "Team One", away: "Team Four", winner: null, score: null}, {home: "Team Two", away: "Team Six", winner: null, score: null}, {home: "Team Five", away: "Team Three", winner: null, score: null}],
        [{home: "Team One", away: "Team Five", winner: null, score: null}, {home: "Team Four", away: "Team Five", winner: null, score: null}, {home: "Team Three", away: "Team Six", winner: null, score: null}],
        [{home: "Team One", away: "Team Six", winner: null, score: null}, {home: "Team Two", away: "Team Four", winner: null, score: null}, {home: "Team Two", away: "Team Five", winner: null, score: null}]
    ]

    return(
        <>
      {scheduleData.map((games, index) => (
        <ScheduleWeek key={index} games={games} weekNumber={index+1} />
      ))}
    </>
    );
}