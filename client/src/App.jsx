import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Button, Container, Card, Row } from 'react-bootstrap'

// What do we need to happen?
// We need to populate the button with a sound pre-loaded
// We need the button to play the sound on click
// We need further clicks to be disabled until sound is done playing
// When the sound is done playing, load another
// When the sound is loaded, enable the button.
getRandomSound = () => {
  axios.get("/api/get")
    .then((response) => {
      this.setState({
        fetchUrl: response.data
      })
    })
}


// class App extends Component {
//   constructor(props) {
//     super(props)
//       this.state = {
//         clicked: false,
//         idle: true,
//         fetchUrl: "",
//         clickCount: 0
//       }
//   }

//   const play = () => {
//     axios.get("/api/get")
//         .then((response) => {
//             this.setState({
//               fetchUrl: response.data
//             })
//         })
//   }
//   render() {
//     let button = this.state.
//       return (
//         <React.Fragment>
//           <Card style={{ width: '18rem' }} className='m-2'>
//             <Card.Body>
//               <Button className='m-2' onClick={() => { this.play() }}>Update</Button>
//             </Card.Body>
//           </Card>
//         </React.Fragment>
//       )


//     return (
//       <div className='App'>
//         <h1>Dockerized Fullstack React Application</h1>
//         <Button className='my-2' variant="primary" onClick={this.submit}>Submit</Button> <br /><br/>
//         <Container>
//           <Row>
//             {button}
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }

// export default App;
