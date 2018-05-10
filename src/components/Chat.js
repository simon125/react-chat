import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { database } from '../firebase'
import { mapObjectToArray } from '../utils'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper';
import moment from 'moment'

class Chat extends React.Component {

    state = {

        name: 'Właściwy Szymon',
        newMessage: '',
        messages: []

    }

    componentDidMount() {

        database.ref('/chat').on('value', (snapshoot) => (

            this.setState({

                messages: mapObjectToArray(snapshoot.val()).reverse()

            })

        ))

    }

    onNewMessageChangeHandler = (event, value) => this.setState({ newMessage: value })

    addMessage = () => {
        database.ref('/chat').push({
            message: this.state.newMessage,
            user: this.state.name,
            timestamp: Date.now()
        }).then(() => this.setState({ newMessage: '' }))
    }
    


 
    
    render() {
                return(
            <div>

            {/*style={padding: '20px';}*/ }

            < TextField
                    hintText = "Type the message"
                    onChange = { this.onNewMessageChangeHandler }  // onchange przyjmuje dwa paramtery event i value czyli wartośc  wpisanego textfielda
                    value = { this.state.newMessage }
                    fullWidth = { true}
            />


            <RaisedButton
                onClick={this.addMessage}
                label="Send message"
                primary={true}
                fullWidth={true}

            />

            <Paper>
                {
                    this.state.messages.map((el) => (
                        <Paper>
                            <MenuItem
                                key={el.key}
                                primaryText={'name: ' + el.user + '\ntreść: ' + el.message + ' '+ moment(el.timestamp).format('MMMM Do YYYY, h:mm:ss a')} />

                        </Paper>
                    ))
                }

            </Paper>



            </div >
        )
    }
}

export default Chat 