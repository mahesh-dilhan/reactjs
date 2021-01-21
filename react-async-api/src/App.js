import React, { Component } from 'react';
import Contacts from './components/contacts';

    class App extends Component {

      state = {
        contacts: []
      }
      async componentDidMount() {
      //OPTION -1
      // await fetch('http://jsonplaceholder.typicode.com/users')
      //  .then(res =>  res.json())
      //  .then((data) => {
      //    this.setState({ contacts: data })
      //  })
      //  .catch(console.log)
      //OPTION-2
      try {
        const response = await fetch('http://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        this.setState({ contacts: json });
      } catch (error) {
        console.log(error);
      }
      }

      render() {
        return (
          <Contacts contacts={this.state.contacts} />
        )
      }

    }
export default App;
