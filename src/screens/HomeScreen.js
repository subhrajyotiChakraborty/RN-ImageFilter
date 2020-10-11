import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import Slider from '@react-native-community/slider';
import CameraRoll from '@react-native-community/cameraroll';

const HomeScreen = () => {
  const [imagePath, setImagePath] = useState('');

  const openImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      if (image && image.path && image.path.length) {
        setImagePath(image.path);
      }
    });
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.headerText}>ImageFilter</Text>
      <TouchableOpacity
        style={styles.imageHolder}
        onPress={() => openImagePicker()}>
        {imagePath.length ? (
          <Image
            style={styles.image}
            source={{
              uri: imagePath,
            }}
          />
        ) : (
          <Text style={styles.imagePlaceHolderText}>
            Tap to select an Image
          </Text>
        )}
      </TouchableOpacity>
      <View>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#95389e"
          maximumTrackTintColor="#000000"
        />
      </View>
      <View>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#95389e',
    marginBottom: 10,
    textAlign: 'center',
  },
  imageHolder: {
    height: 400,
    borderRadius: 5,
    backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  imagePlaceHolderText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  image: {
    height: 400,
    width: Dimensions.get('window').width - 20,
    // resizeMode: 'contain',
  },
  slider: {
    width: Dimensions.get('window').width - 10,
    height: 40,
    paddingVertical: 10,
  },
  saveButton: {
    padding: 10,
    backgroundColor: '#43d8c9',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  saveButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#100303',
  },
});

export default HomeScreen;
