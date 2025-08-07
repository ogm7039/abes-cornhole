import Card from 'react-bootstrap/Card';

type Player = {
    firstName: string;
    lastName: string;
    nickname: string | null;
  };
  
  type TeamCardProps = {
    id: number;
    name: string;
    players: Player[];
    wins: number;
    losses: number;
    points: number;
  };

export default function TeamCard({ name, players, wins, losses, points }: TeamCardProps) {
  return (
    <Card className="mb-4">
      <Card.Body className="d-flex align-items-center">
        <div className="me-3 d-flex align-items-center">
            <img
                src="/images/profile-icon-9.png"
                alt={`${name} logo`}
                style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "8px" }}
            />
        </div>
        <div>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
            W: {wins} | L: {losses} | Pts: {points}
            </Card.Subtitle>
            <Card.Text>
            {players.map((player, i) => (
                <div key={i}>
                {player.firstName} {player.nickname ? `"${player.nickname}"` : ''} {player.lastName}
                </div>
            ))}
            </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}