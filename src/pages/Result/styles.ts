import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  resultText: {
    fontSize: 16,
    color: '#FFF',
    margin: 16,
  },
  button: {
    height: 60,
    backgroundColor: '#ff9000',
    borderRadius: 10,
    padding: 16,
    margin: 8,

    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '600',
    color: '#312e38',
    fontSize: 18,
  },
});
