import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Text } from 'react-native';

import { TrippyLogo } from '../../components/TrippyLogo';
import { Input } from '../../components/Input';
import { PrimaryButton } from '../../components/Button';
import { Color } from '../../typings/Color';
import { Spacing } from '../../typings/Spacing';
import { FontSize } from '../../typings/FontSize';

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
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View style={{ paddingLeft: Spacing.S, flexDirection: 'row' }}>
        <Text
          style={{ fontSize: 24, fontWeight: 'bold', color: Color.Teal900 }}
        >
          {' '}
          Journey Details
        </Text>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginTop: Spacing.XS,
          marginBottom: Spacing.S,
        }}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: Color.Gray600 }}>
        {' '}
        Members :{' '}
      </Text>
      <PrimaryButton
        style={{
          alignItems: 'flex-start',
          paddingLeft: 60,
          height: 60,
          backgroundColor: Color.Gray600,
          borderRadius: 0,
        }}
        onPress={() => {}}
        text="Wallace Lilim (you)"
      />
      <PrimaryButton
        style={{
          alignItems: 'flex-start',
          paddingLeft: 60,
          height: 60,
          backgroundColor: Color.Teal600,
          borderRadius: 0,
        }}
        onPress={() => {}}
        text="Chloe TransferProtocol"
      />
      <PrimaryButton
        style={{
          alignItems: 'flex-start',
          paddingLeft: 60,
          height: 60,
          backgroundColor: Color.Teal500,
          borderRadius: 0,
        }}
        onPress={() => {}}
        text="Alexander Wang"
      />
      <PrimaryButton
        style={{
          alignItems: 'flex-start',
          paddingLeft: 60,
          height: 60,
          backgroundColor: Color.Teal600,
          borderRadius: 0,
        }}
        onPress={() => {}}
        text="Kevin PutRequest"
      />
      <View style={{ paddingTop: 20, flexDirection: 'row' }}>
        <Text
          style={{ fontSize: 20, fontWeight: 'bold', color: Color.Gray600 }}
        >
          Start date:{' '}
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: FontSize.M,
            fontWeight: 'bold',
            color: Color.Gray500,
          }}
        >
          19 Jan 2020, 12:30PM{' '}
        </Text>
      </View>
      <View style={{ paddingTop: 40 }}>
        <PrimaryButton
          style={{ alignItems: 'center' }}
          text="Back"
          onPress={() => navigation.navigate('Map')}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
