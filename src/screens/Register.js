import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export const Register = () => {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={text => setName(text)}
          value={name}
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={text => setLastName(text)}
          value={lastname}
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={text => setEmail(text)}
          value={email}
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={text => setPhone(text)}
          value={phone}
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={text => setAddress(text)}
          value={address}
        />
      </View>
      <View>
        <Text>Is this Last Degree</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.dropctnr}>
          <Text>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dropctnr}>
          <Text>No</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buttonCtnr}>
        <Text style={styles.inputTxt}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    padding: 15,
    borderColor: 'gray',
    borderWidth: 1,
  },
  dropctnr: {},
  buttonCtnr: {
    padding: 16,
    backgroundColor: 'green',
  },
  inputTxt: {},
});
