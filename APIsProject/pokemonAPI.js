import React, {useState, useEffect} from 'react';

const pokemonAPI = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(() => {
            return response.json()
        })
        .then(response => {
            setPeople({
                people: response.abilitities.ability
            })
        }),[]})
    return (
        <div>
            {people.map((element, index => {
                console.log(element)
            }))}
        </div>
    );
}
 
export default pokemonAPI;