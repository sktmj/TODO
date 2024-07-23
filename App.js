import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

const App = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isCheck, setIsCheck] = useState(false);

  const [lastdeg, setIsDegree] = useState('');

  const isCheckDegree = () => {
    setIsCheck(!isCheck);
  };
  const Register = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/api/v1/auth/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          email: email,
          phone: phone,
          address: address,
          lastdeg: lastdeg,
        }),
      });

      const responseData = await response.json();

      console.log(responseData); // Parse response data

      if (responseData.success) {
        Alert.alert('Success', 'Register updated successfully');
        // Additional actions after successful update
      } else {
        Alert.alert('Error', responseData.message);
      }
    } catch (error) {
      console.error('Error updating declaration:', error.message);
      Alert.alert('Error', 'Failed to update declaration');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerSpc}>
          <Text style={styles.Istext}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the First Name"
            onChangeText={text => setFirstName(text)}
            value={firstname}
          />
        </View>
        <View style={styles.headerSpc}>
          <Text style={styles.Istext}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the Last Name"
            onChangeText={text => setLastName(text)}
            value={lastname}
          />
        </View>
        <View style={styles.headerSpc}>
          <Text style={styles.Istext}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the Email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>
        <View style={styles.headerSpc}>
          <Text style={styles.Istext}>Phone</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the Phone Number"
            onChangeText={text => setPhone(text)}
            value={phone}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.headerSpc}>
          <Text style={styles.Istext}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the Address"
            onChangeText={text => setAddress(text)}
            value={address}
          />
        </View>

        <View style={styles.headerSpc}>
          <Text style={styles.Istext}>Is this Last Degree</Text>
        </View>

        <View style={{paddingHorizontal: 12}}>
          <View style={{flexDirection: 'row', paddingVertical: 12}}>
            {isCheck == false ? (
              <TouchableOpacity
                onPress={isCheckDegree}
                style={styles.tochable}
              />
            ) : (
              <TouchableOpacity style={styles.tochableHighlight} />
            )}
            <TouchableOpacity style={styles.dropctnr}>
              <Text style={styles.itemtxt}>Yes</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            {isCheck == true ? (
              <TouchableOpacity
                onPress={isCheckDegree}
                style={styles.tochable}
              />
            ) : (
              <TouchableOpacity style={styles.tochableHighlight} />
            )}

            <TouchableOpacity style={styles.dropctnr}>
              <Text style={styles.itemtxt}>No</Text>
            </TouchableOpacity>
          </View>
        </View>

        {isCheck == true && (
          <View style={styles.headerSpc}>
            <TextInput
              style={styles.input}
              placeholder="Enter the Degree"
              onChangeText={text => setIsDegree(text)}
              value={lastdeg}
            />
          </View>
        )}

        <View style={styles.headerSpc}>
          <TouchableOpacity onPress={Register} style={styles.buttonCtnr}>
            <Text style={styles.inputTxt}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  headerSpc: {
    margin: 16,
    marginBottom: 8,
  },
  input: {
    padding: 15,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
  },
  // dropctnr: {},
  buttonCtnr: {
    padding: 18,
    backgroundColor: 'green',
    borderRadius: 15,
    marginTop: 12,
  },
  inputTxt: {
    textAlign: 'center',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '500',
    color: 'white',
  },
  Istext: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '500',
    color: 'black',
    marginBottom: 8,
  },
  itemtxt: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    color: 'black',
    paddingHorizontal: 12,
  },
  tochable: {
    padding: 10,
    borderColor: 'green',
    borderWidth: 0.8,
    width: 12,
    borderRadius: 30,
  },
  tochableHighlight: {
    padding: 10,
    backgroundColor: 'green',
    borderWidth: 0.8,
    width: 12,
    borderRadius: 30,
  },
});

export default App;
