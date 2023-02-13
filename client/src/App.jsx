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
    .then((response) => response.data)
    .then((urlResponse) => {
      const fetchUrl = urlResponse
      return fetchUrl
    })
}

playState = () => {
  this.setState({
    idle: false,
    disabled: true,
  })
}

idleState = () => {
  this.setState({
    idle: true,
    disabled: false,
  })
}

loadButton = () => {
  const [soundUrl, setSoundUrl] = React.useState('')

    playSound = () => {
    const fetchUrl = getRandomSound()
    setSoundUrl(fetchUrl)

  }
  return (
    <div>
      <audio id="sound">
        <source src={soundUrl} type="audio/mp3">
        </source>
      </audio>
      <button onclick={document.getElementById('sound').play()}>Play Sound</button>
    </div>

  );
}

ReactDom.render(
  <loadButton/>,
  document.querySelector("#root")
)

// document.querySelector("#sound").addEventListener("ended", yourFunction, false);

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
