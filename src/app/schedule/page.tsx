"use client"

import { useState, useEffect } from "react";

export default function Schedule() {
    const scheduleData = {
        weekOne: [{home: "Team One", away: "Team Two", winner: "Team One", score: "2-1"}, {home: "Team Three", away: "Team Four", winner: "Team Three", score: "2-0"}, {home: "Team Five", away: "Team Six", winner: "Team Six", score: "2-1"}],
        weekTwo: [{home: "Team One", away: "Team Three", winner: "Team Three", score: "2-1"}, {home: "Team Two", away: "Team Five", winner: "Team Three", score: "2-0"}, {home: "Team Four", away: "Team Six", winner: "Team Six", score: "2-1"}],
        weekThree: [{home: "Team One", away: "Team Four", winner: null, score: null}, {home: "Team Two", away: "Team Six", winner: null, score: null}, {home: "Team Five", away: "Team Three", winner: null, score: null}],
        weekFour: [{home: "Team One", away: "Team Five", winner: null, score: null}, {home: "Team Four", away: "Team Five", winner: null, score: null}, {home: "Team Three", away: "Team Six", winner: null, score: null}],
        weekFive: [{home: "Team One", away: "Team Six", winner: null, score: null}, {home: "Team Two", away: "Team Four", winner: null, score: null}, {home: "Team Two", away: "Team Five", winner: null, score: null}]
    }

    return(
        <div> Schedule </div>
    );
}