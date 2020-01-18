import React from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';

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
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <TrippyLogo style={{ marginBottom: Spacing.L }} />
      <Input
        style={{ marginBottom: Spacing.M }}
        label="Email"
        placeholder="Enter your email"
      />
      <Input
        style={{ marginBottom: Spacing.L }}
        label="Password"
        placeholder="Enter your password"
        hideInput
      />
      <PrimaryButton
        style={{ marginBottom: Spacing.S }}
        text="Log in"
        onPress={() => {}}
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
  );
};
