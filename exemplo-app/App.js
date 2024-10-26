import { useState } from 'react';
import { View, Button, Text, TextInput, Alert, ActivityIndicator } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Login = ({ navigation, funcLogar }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLoading(false);
        funcLogar(true);
        Alert.alert(`Login realizado com sucesso! ID: ${userCredential.user.uid}`);
      })
      .catch((error) => {
        setIsLoading(false);
        Alert.alert('Erro ao logar', error.message);
      });
  };

  const handlePasswordReset = () => {
    if (!email) {
      Alert.alert('Erro', 'Por favor, insira seu e-mail para receber o link de redefinição.');
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert('Email de redefinição enviado!', 'Verifique sua caixa de entrada.');
      })
      .catch((error) => {
        Alert.alert('Erro ao enviar o e-mail', error.message);
      });
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{ marginBottom: 10, padding: 8, borderWidth: 1, borderColor: '#ccc' }}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 10, padding: 8, borderWidth: 1, borderColor: '#ccc' }}
      />
      <Button title="Logar" onPress={handleLogin} />
      <Button title="Registrar" onPress={() => navigation.navigate("Registrar")} />
      <Button title="Esqueci minha senha" onPress={handlePasswordReset} />
    </View>
  );
};

const Registrar = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Alert.alert(`Usuário registrado com sucesso! ID: ${userCredential.user.uid}`);
        navigation.navigate('Login');
      })
      .catch((error) => {
        const errorMessage = error.message;
        Alert.alert('Erro ao registrar', errorMessage);
      });
  };

  return (
    <View>
      <Text>Registrar</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{ marginBottom: 10, padding: 8, borderWidth: 1, borderColor: '#ccc' }}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 10, padding: 8, borderWidth: 1, borderColor: '#ccc' }}
      />
      <Button title="Registrar" onPress={handleRegister} />
      <Button title="Voltar ao Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const Avisos = () => { return (<Text>Avisos</Text>) };
const Perfil = ({ navigation }) => (
  <View>
    <Text>Perfil</Text>
    <Button title="Voltar para Home" onPress={() => navigation.pop()} />
  </View>
);

const Home = ({ navigation, funcLogar }) => {
  const deslogar = () => {
    signOut(auth)
      .then(() => {
        funcLogar(false);
        navigation.replace("Login");
        Alert.alert('Logout realizado com sucesso!');
      })
      .catch((error) => {
        Alert.alert('Erro ao deslogar', error.message);
      });
  };

  return (
    <View>
      <Text>Home</Text>
      <Button title="Ir para Perfil" onPress={() => navigation.push("Perfil")} />
      <Button title="Logout" onPress={deslogar} />
    </View>
  );
};

const Fotos = () => { return (<Text>Fotos</Text>) };
const Config = () => { return (<Text>Config</Text>) };
const Contatos = () => { return (<Text>Contatos</Text>) };

const HomeTabNavigator = ({ funcLogar }) => (
  <Tab.Navigator>
    <Tab.Screen name="Home_tab" options={{ headerShown: false }} component={() => (
      <HomeStackNavigator funcLogar={funcLogar} />
    )} />
    <Tab.Screen name="Avisos" component={Avisos} />
  </Tab.Navigator>
);

const HomeStackNavigator = ({ funcLogar }) => (
  <Stack.Navigator>
    <Stack.Screen name="Home" options={{ headerShown: false }} component={(props) => <Home {...props} funcLogar={funcLogar} />} />
    <Stack.Screen name="Perfil" component={Perfil} />
  </Stack.Navigator>
);

const App = () => {
  const [EstaLogado, setLogado] = useState(false);

  return (
    <NavigationContainer>
      {EstaLogado ? (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={() => <HomeTabNavigator funcLogar={setLogado} />} />
          <Drawer.Screen name="Config" component={Config} />
          <Drawer.Screen name="Contatos" component={Contatos} />
          <Drawer.Screen name="Fotos" component={Fotos} />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={(props) => <Login {...props} funcLogar={setLogado} />} />
          <Stack.Screen name="Registrar" component={Registrar} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;