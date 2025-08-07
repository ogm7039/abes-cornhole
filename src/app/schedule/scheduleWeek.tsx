import Card from 'react-bootstrap/Card';

type ScheduleWeekProps = {
    games: {
      home: string;
      away: string;
      homeScore: string | null;
      awayScore: string | null;
    }[];
    weekNumber: number;
  };

export default function ScheduleWeek({ games, weekNumber }: ScheduleWeekProps) {
    return (
      <Card className="mb-4">
        <Card.Body>
            <Card.Title>Week {weekNumber} Schedule</Card.Title>
            <Card.Text>
                {games.map((game, i) => (
                    <div key={i}>
                        {game.home} ({game.homeScore}) vs ({game.awayScore}) {game.away} 
                    </div>
                ))}
            </Card.Text>
        </Card.Body>
      </Card>
    );
  }