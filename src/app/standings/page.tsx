"use client"

import { Container } from "@/components/bootstrap";
import StandingsEntry from "./standingsEntry";

export default function Standings() {
    const standingsData = [
        {id: 0, name: "Team One", wins: 2, losses: 1, points: 5},
        {id: 0, name: "Team Two", wins: 3, losses: 0, points: 6},
        {id: 0, name: "Team Three", wins: 1, losses: 2, points: 2},
        {id: 0, name: "Team Four", wins: 0, losses: 3, points: 3},
        {id: 0, name: "Team Five", wins: 2, losses: 1, points: 4},
        {id: 0, name: "Team Six", wins: 1, losses: 2, points: 4},
    ]

    const sortedStandings = [...standingsData].sort((a, b) => b.points - a.points);

    return(
        <div>
            <h2 className="text-center mb-4">Standings</h2>
            <table className="table table-striped table-fixed table-bordered">
                <thead>
                    <tr>
                        <th className="text-center w-10">
                            Team
                        </th>
                        <th className="text-center w-10">
                            Record
                        </th>
                        <th className="text-center w-10">
                            Points 
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedStandings.map((team, index) => (
                        <StandingsEntry key={index} {...team} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}