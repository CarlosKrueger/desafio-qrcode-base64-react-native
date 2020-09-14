## App mobile em React Native para leitura e conversão de QRCode em Base64

### APK
O APK para teste pode ser encontado no release: [Release 1.0.0](https://github.com/CarlosKrueger/desafio-qrcode-base64-react-native/releases/tag/1.0.0)

### Principais libs utilizadas:

* react-native-qrcode-scanner
* react-native-camera
* @react-navigation/native
* @react-navigation/stack
* react-native-permissions
* buffer

### Instalação

Para executar a aplicação é possivel instalar o APK disponibilidado no [link](https://github.com/CarlosKrueger/desafio-qrcode-base64-react-native/releases/tag/1.0.0) ou através da CLI do react-native.

Executando com a CLI do react-native:
* Faça um clone desse repositório;
* Entre na pasta do projeto e instale as dependências `cd desafio-qrcode-base64-react-native && yarn`;
* Inicialize o emulador do android ou conecte o dispositivo físico (o modo de depuração deve estar ativado);
* Inicie o metro bundler com o comando: `npx react-native start`;
* Inicie a aplicação com o comando: `npx react-native run-android`;

### Métodologia utilizada

Ao ler o conteúdo do QRCode com a câmera, os dados brutos (raw data) são enviados para a tela de apresentação em formato de string. Na tela de apresentação os dados brutos são convertidos, primeiramente em um Buffer do tipo binário, e em seguida, o buffer é convertido em string utilizando o formato 'base64'.
```javascript
Buffer.from(<raw data>, 'binary').toString('base64')
```

### Resultado da imagem do desafio:

NDVmNWVmZTQ3NmEwNTAwMTEwMDQ2MzA0NDAyMjA3NzUyOWU2ZjZlNzFkY2I2MDQ0MzFhNjE2N2VjYTc0OTM5NTAzYjgzNTBjYjEwNDk0ZmVlYzUwMWVkZTM5YTNkMDIyMDEwMmU5MzUzZmUxY2U3MWY1ZGVlM2JmYWZkYWVlMzJmYzNhZmY1ZGI0Mjc2ODU1NWY4MmMwNjVmYTg2MGI0MDgwMDAwMDAwYzQ5MDQxNzY1NDQxMTVkNjU1NDU1NTYwMDBlYzExZWMxMWVjMTFlYzExZWMxMWVj
