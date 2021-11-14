import React from 'react';
import './Teams.css'
import person1 from '../../../images/first.jpg'
import person2 from '../../../images/second.jpg'
import person3 from '../../../images/third.jpg'
import person4 from '../../../images/fourth.jpg'
import Team from '../Team/Team';

const teams = [
    {
        name: 'Neil Brain',
        profession: 'Expert in Physical therapy',
        
        picture: person1
    },
    {
        name: 'Sabrina cardone',
        profession: 'Expert in Physical therapy',
        picture: person2
    },
    {
        name: 'Bill hammer',
        profession: 'Expert in Physical therapy',
        picture: person3
    },    {
        name: 'Rio fernandez',
        profession: 'Expert in Physical therapy',
        picture: person4
    }
]
const Teams = () => {
    return (
        <div id="teams" className="team-container">
            <h2 style={{color: 'red', marginTop:'5%', fontSize:'4em', fontWeight:'bold'}}>Introducing our experts</h2>
            <div>
                {
                    teams.map(team => <Team key={team._id} name={team.name} team={team}></Team>)
                }
            </div>
        </div>
    );
};

export default Teams;