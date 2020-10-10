/**
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  Platform,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import Slider from '@react-native-community/slider';
import CameraRoll from '@react-native-community/cameraroll';

const App = () => {
  async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  async function savePicture() {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }

    CameraRoll.save('FILE_PATH');
  }
  return (
    <>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => {
            ImagePicker.openCamera({
              width: 300,
              height: 400,
              cropping: true,
            }).then((image) => {
              console.log(image);
            });
          }}>
          <Text>Test</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            ImagePicker.openPicker({
              width: 300,
              height: 400,
              cropping: true,
            }).then((image) => {
              console.log(image);
            });
          }}>
          <Text>Gallery</Text>
        </TouchableOpacity>
        <Image
          style={{
            height: 100,
            width: 100,
          }}
          source={{
            uri: 'FILE_PATH',
          }}
        />
        {/* <Image
          style={{
            height: 100,
            width: 100,
          }}
          source={{
            uri:
              'FILE_PATH',
          }}
        /> */}
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="blue"
          maximumTrackTintColor="#000000"
        />
        <TouchableOpacity onPress={() => savePicture()}>
          <Text>Save to local</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
