import React from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import { Formik } from 'formik';

import { TrippyLogo } from '../../components/TrippyLogo';
import { Input } from '../../components/Input';
import { PrimaryButton } from '../../components/Button';
import { Color } from '../../typings/Color';
import { Spacing } from '../../typings/Spacing';
import { FontSize } from '../../typings/FontSize';
import { Link } from '../../components/Link';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: Color.Gray100,
    paddingLeft: Spacing.XL,
    paddingRight: Spacing.XL,
  },
  promptContainer: {
    alignItems: 'center',
  },
});

export const LoginScreen = ({ navigation }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => {
        console.log(JSON.stringify(values));
        fetch('https://mywebsite.com/endpoint/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        })
          .then(response => {
            if (response.status !== 200) {
              throw new Error(response.error);
            } else {
              console.log(response.email);
              //set user credentials
            }
          })
          .catch(error => {
            alert(error);
          });
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <TrippyLogo style={{ marginBottom: Spacing.L }} />
          <Input
            style={{ marginBottom: Spacing.M }}
            label="Email"
            placeholder="Enter your email"
            //Formik tings
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          <Input
            style={{ marginBottom: Spacing.L }}
            label="Password"
            placeholder="Enter your password"
            hideInput
            //Formik Tings
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          <PrimaryButton
            style={{ marginBottom: Spacing.S }}
            text="Log in"
            //Formik
            onPress={handleSubmit}
          />
          <View style={styles.promptContainer}>
            <Link
              color={Color.Gray600}
              fontSize={FontSize.S}
              onPress={() => {
                navigation.navigate('Signup');
              }}
            >
              No account yet? Sign up instead!
            </Link>
          </View>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};
