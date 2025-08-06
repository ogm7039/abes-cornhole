// app/rules/page.tsx
'use client';

import { Accordion, ListGroup } from 'react-bootstrap';
import { URL } from 'url';

export default function RulesPage() {
  return (
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Basic Rules</Accordion.Header>
          <Accordion.Body>
            <Accordion alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Teams and Players</Accordion.Header>
                    <Accordion.Body>
                            <li>Cornhole is played with 2 teams of 2 players.</li>
                            <li>Partners stand opposite each other at opposite boards.</li>
                            <li>One player from each team throws from the same side each round.</li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>The Equipment</Accordion.Header>
                    <Accordion.Body>
                        <li>Boards are placed 27 feet apart.</li>
                        <li>Each team has 4 bags of one color.</li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Gameplay</Accordion.Header>
                    <Accordion.Body>
                        <li>Players alternate tossing bags toward the opposite board.</li>
                        <li>Bags must be thrown underhand.</li>
                        <li>Players must stay behind the front edge of the board when throwing.</li>
                        <li>A round ends after all 8 bags have been thrown (4 per player).</li>
                        <li>The team that scored more points in the previous round must throw first.</li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Scoring</Accordion.Header>
                    <Accordion.Body>
                        <li>3 points for a bag in the hole.</li>
                        <li>1 point for a bag on the board.</li>
                        <li>0 points for bags that hit the ground first or are hanging off the front edge.</li>
                        <li>If a bag touches the ground before landing on the board, it should be removed before scoring.</li>
                        <li>Cancellation Scoring: Only the difference in scores is counted.</li>
                        <li>First team to 21 points wins.</li>
                        <li>Bust rule: if you go over 21 you reset to 15</li>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>League Rules</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <li>Games played weekly on Wednesday nights</li>
              <li>Best of 3 matches per night</li>
              <li>2–4 players per team (subs allowed)</li>
              <li>1 point per match win; top 4 teams make playoffs</li>
              <li>Forfeits = -1 point; 10-minute grace period</li>
              <li>Fun theme nights, bar specials, and light trash talk encouraged</li>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Standings/Points</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <li>Games played weekly on Wednesday nights</li>
              <li>Best of 3 matches per night</li>
              <li>2–4 players per team (subs allowed)</li>
              <li>1 point per match win; top 4 teams make playoffs</li>
              <li>Forfeits = -1 point; 10-minute grace period</li>
              <li>Fun theme nights, bar specials, and light trash talk encouraged</li>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Playoff Format</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <li>Games played weekly on Wednesday nights</li>
              <li>Best of 3 matches per night</li>
              <li>2–4 players per team (subs allowed)</li>
              <li>1 point per match win; top 4 teams make playoffs</li>
              <li>Forfeits = -1 point; 10-minute grace period</li>
              <li>Fun theme nights, bar specials, and light trash talk encouraged</li>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
  );
}