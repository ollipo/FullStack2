import * as React from 'react';
import { Text, View, Button, ActivityIndicator, TextInput, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const notes = []

class AddNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {newNote: ""};
    this.notes = props.route.params.notes;
  }

  handleNewNote = (text) => {
    console.log(text)
    this.setState({newNote: text})
  }

  

  addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      name: this.state.newNote
    }
  
    if(!this.notes.some(note => note.name === noteObject.name)) {
      console.log('jaa')
      this.props.navigation.navigate('Notes', { newNote: this.state.newNote })
      console.log('joo')
   
    } else {
      alert('Note already exists!')
    }
  }

  render () {
    return (
      <View>        
        <TextInput 
              style={styles.inputText}
              value={this.state.newNote}
              placeholder="Write the note here"
              onChangeText={this.handleNewNote}/>
        <Button title="SAVE" onPress={this.addNote}/>        
      </View>
    );
  }

}

class Notes extends React.Component {
    state = {
      notes: notes
    };

  componentDidMount() {
    console.log('CDM')
   this.getMyObject()
  }

  componentDidUpdate() {
    console.log('CDU1')
    const noteObject = {
      id: this.state.notes.length + 1,
      name: this.props.route.params.newNote
    }
    console.log('CDU2')
    const notes = this.state.notes.concat(noteObject)
          
    this.setObjectValue(notes)
  }

  setObjectValue = async (notes) => {
    try {
      console.log('juu')
      const jsonValue = JSON.stringify(notes)
      await AsyncStorage.setItem('key2', jsonValue)
      this.setState({
        notes: notes
      })
    } catch(e) {
      // save error
    }
  }

  getMyObject = async () => {
    console.log('GMO')
    try {
      const jsonValue = await AsyncStorage.getItem('key2')
      if(jsonValue != null) { 
        console.log('GMO1')
        var toArray = JSON.parse(jsonValue)
        var array = []
        for(var i in toArray)
          array.push(toArray[i])
        console.log('GMO2')
        this.setState({
            notes: array
          })
      } else {
        console.log('GMO5')
        this.setState({
          notes: []
        })
      }
    } catch(e) {
      // read error
    }
  }


  render() {
    console.log('render')
    console.log(this.state.notes)
    return (
      <ScrollView style={styles.scrollView}>
        <Button style={styles.button} title="ADD NOTE" onPress={() => this.props.navigation.navigate('AddNote', {notes: this.state.notes})}/>
        {this.state.notes.map(note =>
            <Note
              key={note.id}
              name={note.name}
              id={note.id}
            />)}
      </ScrollView>
    );
  }
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

const Note = (props) => {
  return (
    <View style={styles.note}>
      <Text>{props.name}</Text>
    </View>
  )
}


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Notes">
        <Stack.Screen name="Notes" component={Notes} />
        <Stack.Screen name="AddNote" component={AddNote} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;