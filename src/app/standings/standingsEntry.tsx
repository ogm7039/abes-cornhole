type StandingsEntryProps = {
    name: string,
    wins: number,
    losses: number,
    points: number
  };

export default function StandingsEntry({ name, wins, losses, points }: StandingsEntryProps) {
    return (
      <tr>
        <td className="text-center">{name}</td>
        <td className="text-center">{wins} - {losses} </td>
        <td className="text-center">{points}</td>
      </tr>
    );
  }