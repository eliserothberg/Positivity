import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,

} from 'react-native';

export default class Login extends Component {
  render() {
    return (
       <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <Image source={require('../img/balance.jpg')} style ={styles.backgroundImage}>
            <View style={styles.content}>
              <Text style={styles.logo}> POSITIVITY </Text>

                <View style={styles.inputContainer}>
                 
                   <TextInput underlineColor='transparent' style={styles.input}
                   returnKeyType="next"
                   onSubmitEditing={() => this.passwordInput.focus()}
                   keyboardType="email-address"
                   autoCapitalize="none"
                   autoCorrect={false}
                    onChangeText={(username) => this.setState({username})}
                      value={this.state.username} placeholder='username or email'>
                  </TextInput>

                  <TextInput secureTextEntry={true} underlineColor='transparent' 
                    style={styles.input} 
                    returnKeyType="go"
                    ref={(input) => this.passwordInput = input}
                    onChangeText={(password) => this.setState({password})}
                      value={this.state.password} placeholder='password'>
                  </TextInput>


                  </View>

                  <TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                  </TouchableOpacity>
                
                </View>
          </Image>
       </KeyboardAvoidingView>
    );
  }
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''}
  }
  //data to backend  
  login = () => {
    //need to hook up to JawsDB-?? becasue must fetch data via an IP
    fetch('http://190.158.1.122', {

    })
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    // alignSelf: 'stretch',
    width: null,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textShadowColor: '#252525',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 15,
    marginBottom: 20,
  },
  inputContainer: {
    margin: 20,
    marginBottom: 0,
    padding: 20,
    paddingBottom: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  input: {
    fontSize: 16,
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  buttonContainer: {
    alignSelf: 'stretch',
    margin: 20,
    padding: 20,
    paddingBottom: 10,
    backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Image
  

// } from 'react-native';
// import LoginForm from './LoginForm';

// export default class Login extends Component {
//   render() {
//     return (
//        <View style={styles.container}>
//           <Image source={require('../img/balance.jpg')} style ={styles.backgroundImage}>
//             <View style={styles.content}>
//               <Text style={styles.logo}> POSITIVITY </Text>

//               <View style={styles.inputContainer}>
//                  <LoginForm />
//               </View>
//             </View>
//           </Image>
//        </View>
//     );
//   }
  

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   backgroundImage: {
//     flex: 1,
//     // alignSelf: 'stretch',
//     width: null,
//     justifyContent: 'center',
//   },
//   content: {
//     alignItems: 'center',
//   },
//   logo: {
//     color: 'white',
//     fontSize: 40,
//     fontStyle: 'italic',
//     fontWeight: 'bold',
//     textShadowColor: '#252525',
//     textShadowOffset: {width: 2, height: 2},
//     textShadowRadius: 15,
//     marginBottom: 20,
//   },
//   inputContainer: {
//     // height: 200,
//     // margin: 40,
//     // marginBottom: 0,
//     // padding: 20,
//     // paddingBottom: 10,
//     width: 300,
//     // alignSelf: 'stretch',
//     // borderWidth: 1,
//     // borderColor: '#fff',
//     // backgroundColor: 'rgba(255,255,255,0.2)',
//   },
//   // input: {
//   //   fontSize: 16,
//   //   height: 40,
//   //   padding: 10,
//   //   marginBottom: 10,
//   //   backgroundColor: 'rgba(255,255,255,1)',
//   // },
//   // buttonContainer: {
//   //   alignSelf: 'stretch',
//   //   margin: 20,
//   //   padding: 20,
//   //   paddingBottom: 10,
//   //   backgroundColor: 'blue',
//   //   borderWidth: 1,
//   //   borderColor: '#fff',
//   //   backgroundColor: 'rgba(255,255,255,0.6)',
//   // },
//   // buttonText: {
//   //   fontSize: 16,
//   //   fontWeight: 'bold',
//   //   textAlign: 'center',
//   // }
// });