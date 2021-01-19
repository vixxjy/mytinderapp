import React, {useState} from 'react'
import TinderCard from 'react-tinder-card'
import "./TinderCards.css"

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://cdn.britannica.com/s:250x250,c:crop/88/154388-050-11BCAE3C/CEO-Elon-Musk-SpaceX-car.jpg'
        },
        {
            name: 'Donald Trump',
            url: 'https://static.politico.com/dims4/default/67937a7/2147483647/resize/971x/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F28%2Fcb%2F39d32f384be4b94be37117d43ba6%2Fgettyimages-1223507869.jpg'
        },
        {
            name: 'Joe Biden',
            url: 'https://www.catholicnewsagency.com/images/shutterstock_1786934054.jpg?w=760'
        },
    ])

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete)
        //setLastDirection(direction)
    }

    const outOfFrame = name => {
        console.log(name + " left the screen!")
    }

    return (
        <div className="tinderCards">
            <div className="tindercards__cardContainer">      
                {
                    people.map((person) => (
                        <TinderCard
                            className="swipe"
                            key={person.name}
                            preventSwipe={["up", "down"]}
                            onSwipe={(dir) => swiped(dir, person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                            <div
                                style={{ backgroundImage: `url(${person.url})`}}
                                className="card"
                            >
                            <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))
                }
            </div>
        </div>
    )
}

export default TinderCards
