// import React, { Component } from 'react';
// import './App.css';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
// import Polarity from "./components/Polarity";

// const theme = createMuiTheme();

// const style = {
//   marginLeft: 12,
// };

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sentence: '',
//       polarity: undefined
//     };
//   }

//   analyzeSentence() {
//     fetch('http://localhost:8080/sentiment', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ sentence: this.textField.value })
//     })
//     .then(response => response.json())
//     .then(data => this.setState(data));
//   }

//   onEnterPress = e => {
//     if (e.key === 'Enter') {
//       this.analyzeSentence();
//     }
//   };

//   render() {
//     const polarityComponent = this.state.polarity !== undefined ?
//       <Polarity sentence={this.state.sentence} polarity={this.state.polarity}/> :
//       null;
//     return (
//       <MuiThemeProvider theme={theme}>
//         <div className="centerize">
//           <Paper elevation={1} className="content">
//             <h2>CSYE 7220 Sentiment Analyser</h2>
//             <TextField 
//               inputRef={ref => this.textField = ref}
//               onKeyUp={this.onEnterPress}
//               placeholder="Type your sentence."
//             />
//             <Button 
//               variant="contained" 
//               style={style} 
//               onClick={this.analyzeSentence.bind(this)}
//             >
//               Send
//             </Button>
//             {polarityComponent}
//           </Paper>
//         </div>
//       </MuiThemeProvider>
//     );
//   }
// }

// export default App;




import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Polarity from "./components/Polarity";

const theme = createMuiTheme();

const style = {
  marginLeft: 12,
};

// Function to parse query parameters
const qs = (function(a) {
  if (a === "") return {};
  var b = {};
  for (var i = 0; i < a.length; ++i) {
    var p = a[i].split('=', 2);
    if (p.length === 1)
      b[p[0]] = "";
    else
      b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
  }
  return b;
})(window.location.search.substr(1).split('&'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentence: '',
      polarity: undefined
    };
  }

  testCommsSpringboot() {
    console.log(qs["webapp"]);
    fetch(qs["webapp"] + '/testHealth', {mode: 'cors'})
      .then(function(response) {
        return response.text();
      })
      .then(function(text) {
        console.log('Request successful', text);
        alert(text);
      })
      .catch(function(error) {
        console.log('Request failed', error);
      });
  }

  analyzeSentence() {
    console.log(qs["webapp"]);
    fetch(qs["webapp"] + '/sentiment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ sentence: this.textField.value })
    })
    .then(response => response.json())
    .then(data => this.setState(data));
  }

  onEnterPress = e => {
    if (e.key === 'Enter') {
      this.analyzeSentence();
    }
  };

  render() {
    const polarityComponent = this.state.polarity !== undefined ?
      <Polarity sentence={this.state.sentence} polarity={this.state.polarity}/> :
      null;
    return (
      <MuiThemeProvider theme={theme}>
        <div className="centerize">
          <Paper elevation={1} className="content">
            <h2>CSYE 7220 Sentiment Analyser</h2>
            <TextField 
              inputRef={ref => this.textField = ref}
              onKeyUp={this.onEnterPress}
              placeholder="Type your sentence."
            />
            <Button 
              variant="contained" 
              style={style} 
              onClick={this.analyzeSentence.bind(this)}
            >
              Send
            </Button>
            {polarityComponent}
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;