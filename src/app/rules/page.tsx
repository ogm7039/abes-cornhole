// app/rules/page.tsx
'use client';

import { Accordion, ListGroup } from 'react-bootstrap';
import { URL } from 'url';
import AccordionBody from '../../../node_modules/react-bootstrap/esm/AccordionBody';

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
                        <li>Bust rule: if you go over 21 you reset to 15.</li>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>League Rules</Accordion.Header>
          <Accordion.Body>
          <Accordion alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Team Fee</Accordion.Header>
                    <Accordion.Body>
                            <li>$100 per team, or $50 a player (to discourage no shows).</li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Gameplay</Accordion.Header>
                    <Accordion.Body>
                        <li>Matches will consist of two teams playing a best two out of three.</li>
                        <li>Bust rule: if you go over 21, you reset to 15.</li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Subs</Accordion.Header>
                    <Accordion.Body>
                        <li>Teams are allowed to get a sub to fill in for a team member that can’t make it.</li>
                        <li>Subs can be from other teams.</li>
                        <li>If there are two teams that only have one player, they may team up and split the points earned between their respective teams.</li>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Standings/Points</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <Accordion alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Teams are awarded one point for each game they win in a match</Accordion.Header>
                    <Accordion.Body>
                        <li>Winning team gets 2 points no matter what.</li>
                        <li>If a team forces a game three, they will be awarded 1 point.</li>
                        <li>(Think of it as similar to the NHL’s 1 point for overtime losses).</li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Teams are redacted 0.5 points if they forfeit</Accordion.Header>
                    <Accordion.Body>
                        <li>Done to discourage no-shows.</li>
                        <li>Team opposite the forfeit will receive one point.</li>
                    </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Playoff Format</Accordion.Header>
          <Accordion.Body>
            <Accordion alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Each team will make playoffs.</Accordion.Header>
                    <Accordion.Body>
                            <li>Just like all the sports we've played, we'll still get participation trophies.</li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Will use a standard playoff bracket</Accordion.Header>
                    <Accordion.Body>
                        <li>Will add a “play in” if we have an odd number of teams.</li>
                        <li>High seed will play low seed.</li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Winnings (assuming a 6 team league)</Accordion.Header>
                    <Accordion.Body>
                        <li>1st place: $300</li>
                        <li>2nd place: $200</li>
                        <li>3rd place: $100</li>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
  );
}