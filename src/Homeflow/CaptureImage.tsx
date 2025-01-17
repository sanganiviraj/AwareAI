import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Camera, CameraType } from 'react-native-camera-kit';
import { screen } from '../constant/Metrics';
import { Colors } from '../constant/common/Colors';

const CaptureImage = () => {

    return (
        <View style={styles.container}>

            <Camera
                style={styles.cameraview}
                cameraType={CameraType.Back} // front/back(default)
                flashMode="auto"
                showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner, that stops when a code has been found. Frame always at center of the screen
                laserColor={Colors.darkblue} // (default red) optional, color of laser in scanner frame
                frameColor={Colors.blue325} // (default white) optional, color of border of scanner frame
            />

        </View>
    );
};

export default CaptureImage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    cameraview: {
        width: screen.WIDTH * 0.9,
        height: screen.HEIGHT * 0.5,
        borderRadius: 10
    },
    headerbox: {
        borderRadius: 20,
        width: screen.WIDTH * 0.9,
        height: screen.HEIGHT * 0.2,
        alignSelf: 'center',
        top: 90,
        bottom: 0,
        position: 'absolute',
        backgroundColor: 'white'
    }
});
