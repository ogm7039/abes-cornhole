"use client"
import TeamCard from './teamCard'

export default function Teams() {
    const teamsData = [
        {id: 0, name: "Team One", wins: 2, losses: 1, points: 5, players: [{firstName: "Team One", lastName: "Member 01", nickname: null}, {firstName: "Team One", lastName: "Member 02", nickname: "nickname"}]},
        {id: 0, name: "Team Two", wins: 3, losses: 0, points: 6, players: [{firstName: "Team Two", lastName: "Member 01", nickname: null}, {firstName: "Team Two", lastName: "Member 02", nickname: null}]},
        {id: 0, name: "Team Three", wins: 1, losses: 2, points: 2, players: [{firstName: "Team Three", lastName: "Member 01", nickname: null}, {firstName: "Team Three", lastName: "Member 02", nickname: null}]},
        {id: 0, name: "Team Four", wins: 0, losses: 3, points: 3, players: [{firstName: "Team Four", lastName: "Member 01", nickname: null}, {firstName: "Team Four", lastName: "Member 02", nickname: null}, {firstName: "Team Four", lastName: "Member 03", nickname: "Extra"}]},
        {id: 0, name: "Team Five", wins: 2, losses: 1, points: 4, players: [{firstName: "Team Five", lastName: "Member 01", nickname: null}, {firstName: "Team Five", lastName: "Member 02", nickname: null}]},
        {id: 0, name: "Team Six", wins: 1, losses: 2, points: 4, players: [{firstName: "Team Six", lastName: "Member 01", nickname: null}, {firstName: "Team Six", lastName: "Member 02", nickname: null}]},
    ]

    return (
        <>
          {teamsData.map((team) => (
            <TeamCard 
              key={team.id} 
              id={team.id}
              name={team.name} 
              players={team.players} 
              wins={team.wins} 
              losses={team.losses} 
              points={team.points} 
            />
          ))}
        </>
      );
}