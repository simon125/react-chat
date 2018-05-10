import React from 'react'
import { database } from '../firebase'
import { darkBaseTheme } from 'material-ui/styles';

class Counter extends React.Component {

    state = {
        counter: 123123
    }

    componentDidMount() {

        database.ref('/counter')
            .on(                               //dziala za jednym razem .on() <- działa wielokrotnie
                'value',                       // event ktory się wydarzy gdy /counter się zmieni
                (snapshot) => {                //rób to gdy zmieni się 'value' (event)
                    this.setState({
                        counter: snapshot.val() // kazda metoda zwraca Promise dlatego mozemy robic .then()
                    })
                }

            )
    }

    saveToDB = (data) => {

        database.ref('/counter')
            .set(data)           // taki PUT firebasowy

    }

    render() {
        return (

            <div>
                <h1>{this.state.counter}</h1>
                <button
                    onClick={() => {    this.saveToDB(this.state.counter -1) }}
                >Dodaj</button>
                <button
                    onClick={() => {this.saveToDB(this.state.counter + 1) }}
                >Odejmij</button>
            </div>

        )
    }
}

export default Counter