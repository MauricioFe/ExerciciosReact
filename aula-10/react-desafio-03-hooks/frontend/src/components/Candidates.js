import React from 'react'
import Card from './Card';
import Cadidate from './Cadidate';
import FlipMove from 'react-flip-move'

export default function Candidates({ candidates, previousVotes, previousPercentages }) {
    return (
        <div>
            <FlipMove>
                {
                    candidates.map((candidate, index) => {
                        const { id } = candidate;
                        const previousVoteObject = previousVotes.find((item) => item.id === id);
                        const previousVote = !!previousVoteObject ? previousVoteObject.votes : 0;
                        
                        const previousPercentageObject = previousPercentages.find((item) => item.id === id);
                        const previousPercentage = !!previousPercentageObject ? previousPercentageObject.percentage : 0;
                        return (
                            <div key={id} className="row">
                                <Card>
                                    <Cadidate previousVote={previousVote} previousPercentages={previousPercentage} candidate={candidate} position={index + 1} />
                                </Card>
                            </div>
                        );
                    })
                }
            </FlipMove>
        </div>
    )
}
