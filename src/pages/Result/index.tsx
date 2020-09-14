import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Alert, Vibration } from 'react-native';
import { Buffer } from 'buffer';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import Clipboard from '@react-native-community/clipboard';
import styles from './styles';

interface ResultProps {
  route: {
    params: {
      inputData: string;
    };
  };
}

const Result: React.FC<ResultProps> = ({ route }: ResultProps) => {
  const [result, setResult] = useState<string>();
  const navigation = useNavigation();

  useEffect(() => {
    const { inputData } = route.params;
    const formatedData = Buffer.from(inputData, 'binary').toString('base64');
    setResult(formatedData);
  }, [route]);

  const handleCopy = useCallback(() => {
    Clipboard.setString(result || '');
    Vibration.vibrate(100, false);
  }, [result]);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Resultado em Base64: </Text>
      <Text style={styles.resultText}>{result}</Text>
      <RectButton style={styles.button} onPress={handleCopy}>
        <Text style={styles.buttonText}>Copiar resultado</Text>
      </RectButton>
      <RectButton style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Retornar para o Scanner</Text>
      </RectButton>
    </View>
  );
};

export default Result;
