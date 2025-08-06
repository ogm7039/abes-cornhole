"use client"

import { useState, useEffect } from "react";

export default function Standings() {
    const standingsData = [
        {id: 0, name: "Team One", wins: 2, losses: 1, points: 5},
        {id: 0, name: "Team Two", wins: 3, losses: 0, points: 6},
        {id: 0, name: "Team Three", wins: 1, losses: 2, points: 2},
        {id: 0, name: "Team Four", wins: 0, losses: 3, points: 3},
        {id: 0, name: "Team Five", wins: 2, losses: 1, points: 4},
        {id: 0, name: "Team Six", wins: 1, losses: 2, points: 4},
    ]

    return(
        <div> Standings </div>
    );
}