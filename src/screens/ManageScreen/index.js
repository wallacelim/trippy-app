import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Text } from 'react-native';

import { TrippyLogo } from '../../components/TrippyLogo';
import { Input } from '../../components/Input';
import { PrimaryButton } from '../../components/Button';
import { Color } from '../../typings/Color';
import { Spacing } from '../../typings/Spacing';
import { FontSize } from '../../typings/FontSize';
import { Link } from '../../components/Link';
import { Formik } from 'formik';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: Color.Gray200,
    paddingTop: Spacing.XXL,
    paddingLeft: Spacing.L,
    paddingRight: Spacing.L,
  },
  promptContainer: {
    alignItems: 'center',
  },
});

export const ManageScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={{ paddingLeft: Spacing.S, flexDirection: 'row' }}>
        <Text
          style={{ fontSize: 24, fontWeight: 'bold', color: Color.Teal900 }}
        >
          Journey Friends /{' '}
        </Text>
        <Text
          style={{ fontSize: 24, fontWeight: 'bold', color: Color.Gray600 }}
        >
          wacknwoll{' '}
        </Text>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginTop: Spacing.S,
          marginBottom: Spacing.XS,
        }}
      />
      <PrimaryButton
        style={{
          alignItems: 'flex-start',
          paddingLeft: 60,
          height: 60,
          backgroundColor: Color.Gray600,
          borderRadius: 0,
        }}
        text="Wallace Lilim (you)"
        // //Formik
        // onPress={handleSubmit}
      />
      <PrimaryButton
        style={{
          alignItems: 'flex-start',
          paddingLeft: 60,
          height: 60,
          backgroundColor: Color.Teal600,
          borderRadius: 0,
        }}
        text="Chloe Tanny"
        // //Formik
        // onPress={handleSubmit}
      />
      <PrimaryButton
        style={{
          alignItems: 'flex-start',
          paddingLeft: 60,
          height: 60,
          backgroundColor: Color.Teal500,
          borderRadius: 0,
        }}
        text="Alexander Wang"
        // onPress={handleSubmit}
      />
      <PrimaryButton
        style={{
          alignItems: 'flex-start',
          paddingLeft: 60,
          height: 60,
          backgroundColor: Color.Teal600,
          borderRadius: 0,
        }}
        text="Kevin Putrequest"
        // onPress={handleSubmit}
      />
      <PrimaryButton
        style={{
          alignItems: 'flex-start',
          paddingLeft: 60,
          height: 60,
          backgroundColor: Color.Teal500,
          borderRadius: 0,
        }}
        text="FluffDucks"
        // onPress={handleSubmit}
      />
      <Formik onSubmit={navigation.navigate('Map')}>
        {({ handleSubmit }) => (
          <PrimaryButton
            style={{ alignItems: 'center' }}
            text="Back"
            onPress={handleSubmit}
          />
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};
