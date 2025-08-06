"use client"

import { useState, useEffect } from "react";

export default function Teams() {
    const teamsData = [
        {id: 0, name: "Team One", wins: 0, losses: 0, points: 0, players: [{firstName: "Team One", lastName: "Member 01", nickname: null}, {firstName: "Team One", lastName: "Member 02", nickname: "nickname"}]},
        {id: 0, name: "Team Two", wins: 0, losses: 0, points: 0, players: [{firstName: "Team Two", lastName: "Member 01", nickname: null}, {firstName: "Team Two", lastName: "Member 02", nickname: null}]},
        {id: 0, name: "Team Three", wins: 0, losses: 0, points: 0, players: [{firstName: "Team Three", lastName: "Member 01", nickname: null}, {firstName: "Team Three", lastName: "Member 02", nickname: null}]},
        {id: 0, name: "Team Four", wins: 0, losses: 0, points: 0, players: [{firstName: "Team Four", lastName: "Member 01", nickname: null}, {firstName: "Team Four", lastName: "Member 02", nickname: null}, {firstName: "Team Four", lastName: "Member 03", nickname: "Extra"}]},
        {id: 0, name: "Team Five", wins: 0, losses: 0, points: 0, players: [{firstName: "Team Five", lastName: "Member 01", nickname: null}, {firstName: "Team Five", lastName: "Member 02", nickname: null}]},
        {id: 0, name: "Team Six", wins: 0, losses: 0, points: 0, players: [{firstName: "Team Six", lastName: "Member 01", nickname: null}, {firstName: "Team Six", lastName: "Member 02", nickname: null}]},
    ]

    return(
        <div> Teams </div>
    );
}