import React, { useCallback, useRef } from 'react';
import { Text, View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const Scanner: React.FC = () => {
  const navigation = useNavigation();
  const scanner = useRef<QRCodeScanner>();

  navigation.addListener('focus', ({ target }) => {
    scanner.current?.reactivate();
  });

  const onSuccess = useCallback(
    e => {
      const inputData = e.rawData;
      navigation.navigate('Result', { inputData });
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <QRCodeScanner
        reactivateTimeout={200}
        ref={container => (scanner.current = container)}
        cameraStyle={styles.camera}
        onRead={onSuccess}
        topContent={
          <Text style={styles.centerText}>Aponte a câmera para o QR Code</Text>
        }
      />
    </View>
  );
};

export default Scanner;
