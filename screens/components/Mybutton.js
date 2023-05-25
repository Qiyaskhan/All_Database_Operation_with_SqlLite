import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Mybutton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={props.customClick}>
      <Text style={[styles.text, props.textStyle]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#f05555',
    padding: 10,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#f05555',
    elevation: 5, // Add elevation for shadow effect
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold'
  },
});

export default Mybutton;