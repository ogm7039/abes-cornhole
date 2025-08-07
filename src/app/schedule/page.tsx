"use client"
import ScheduleWeek from "./scheduleWeek";

export default function Schedule() {
    const scheduleData = [
        [{home: "Team One", away: "Team Two", homeScore: "1", awayScore: "2"}, {home: "Team Three", away: "Team Four", homeScore: "1", awayScore: "2"}, {home: "Team Five", away: "Team Six", homeScore: "1", awayScore: "2"}],
        [{home: "Team One", away: "Team Three", homeScore: "1", awayScore: "2"}, {home: "Team Two", away: "Team Five", homeScore: "1", awayScore: "2"}, {home: "Team Four", away: "Team Six", homeScore: "1", awayScore: "2"}],
        [{home: "Team One", away: "Team Four", homeScore: null, awayScore: null}, {home: "Team Two", away: "Team Six", homeScore: null, awayScore: null}, {home: "Team Five", away: "Team Three", homeScore: null, awayScore: null}],
        [{home: "Team One", away: "Team Five", homeScore: null, awayScore: null}, {home: "Team Four", away: "Team Five", homeScore: null, awayScore: null}, {home: "Team Three", away: "Team Six", homeScore: null, awayScore: null}],
        [{home: "Team One", away: "Team Six", homeScore: null, awayScore: null}, {home: "Team Two", away: "Team Four", homeScore: null, awayScore: null}, {home: "Team Two", away: "Team Five", homeScore: null, awayScore: null}]
    ]

    return(
        <>
      {scheduleData.map((games, index) => (
        <ScheduleWeek key={index} games={games} weekNumber={index+1} />
      ))}
    </>
    );
}