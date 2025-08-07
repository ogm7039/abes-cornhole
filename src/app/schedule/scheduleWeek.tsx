import Card from 'react-bootstrap/Card';

type ScheduleWeekProps = {
  date: string;
  games: {
    home: string;
    away: string;
    homeScore: string | null;
    awayScore: string | null;
  }[];
  weekNumber: number;
};

export default function ScheduleWeek({ games, weekNumber, date }: ScheduleWeekProps) {
    return (
      <Card className="mb-4">
        <Card.Body>
            <Card.Title>Week {weekNumber} ({date})</Card.Title>
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