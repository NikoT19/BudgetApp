import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import i18n from '../i18n';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  const handleChangeLanguage = (language) => {
    i18n.locale = language;
    forceUpdate(); // Обновить экран
  };

  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('login')}</Text>
      <TextInput
        style={styles.input}
        placeholder={i18n.t('username')}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder={i18n.t('password')}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title={i18n.t('login')} onPress={handleLogin} />
      <Button title={i18n.t('register')} onPress={() => navigation.navigate('Register')} />
      <View style={styles.languageSwitch}>
        <Button title="English" onPress={() => handleChangeLanguage('en')} />
        <Button title="Русский" onPress={() => handleChangeLanguage('ru')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  languageSwitch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});
home
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import i18n from '../i18n';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('welcome')}</Text>
      <Button title={i18n.t('addTransaction')} onPress={() => navigation.navigate('AddTransaction')} />
      <Button title={i18n.t('reports')} onPress={() => navigation.navigate('Reports')} />
      <Button title={i18n.t('settings')} onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
});
reg
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import i18n from '../i18n';

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('register')}</Text>
      <TextInput
        style={styles.input}
        placeholder={i18n.t('username')}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder={i18n.t('password')}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title={i18n.t('register')} onPress={handleRegister} />
      <Button title={i18n.t('login')} onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
});
add
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';
import i18n from '../i18n';

export default function AddTransactionScreen({ navigation }) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [comment, setComment] = useState('');

  const handleAddTransaction = () => {
    // Здесь можно сохранить транзакцию в локальной базе данных (JSON)
    alert(i18n.t('addTransaction') + ': ' + amount);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('addTransaction')}</Text>
      <TextInput
        style={styles.input}
        placeholder={i18n.t('amount')}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Picker
        selectedValue={category}
        style={styles.input}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        <Picker.Item label="Food" value="food" />
        <Picker.Item label="Transport" value="transport" />
        <Picker.Item label="Salary" value="salary" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder={i18n.t('comment')}
        value={comment}
        onChangeText={setComment}
      />
      <Button title={i18n.t('addTransaction')} onPress={handleAddTransaction} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
});
rep
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import i18n from '../i18n';

export default function ReportsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('reports')}</Text>
      <Text>{i18n.t('summary')}</Text>
      {/* Здесь можно использовать библиотеку для графиков, например, Victory или Recharts */}
      <Button title={i18n.t('home')} onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
});
set
import React, { useState } from 'react';
import { View, Text, Button, Picker, StyleSheet } from 'react-native';
import i18n from '../i18n';

export default function SettingsScreen({ navigation }) {
  const [currency, setCurrency] = useState('USD');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('settings')}</Text>
      <Text>{i18n.t('chooseCurrency')}</Text>
      <Picker
        selectedValue={currency}
        style={styles.input}
        onValueChange={(itemValue) => setCurrency(itemValue)}
      >
        <Picker.Item label="USD" value="USD" />
        <Picker.Item label="KGS" value="KGS" />
        <Picker.Item label="EUR" value="EUR" />
        <Picker.Item label="RUB" value="RUB" />
      </Picker>
      <Button title={i18n.t('home')} onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
});

en
{
  "login": "Login",
  "register": "Register",
  "username": "Username",
  "password": "Password",
  "home": "Home",
  "addTransaction": "Add Transaction",
  "reports": "Reports",
  "settings": "Settings",
  "welcome": "Welcome",
  "amount": "Amount",
  "comment": "Comment",
  "chooseCurrency": "Choose your currency",
  "summary": "Here is your financial summary"
}
ru
{
  "login": "Войти",
  "register": "Регистрация",
  "username": "Имя пользователя",
  "password": "Пароль",
  "home": "Главная",
  "addTransaction": "Добавить транзакцию",
  "reports": "Отчёты",
  "settings": "Настройки",
  "welcome": "Добро пожаловать",
  "amount": "Сумма",
  "comment": "Комментарий",
  "chooseCurrency": "Выберите валюту",
  "summary": "Ваш финансовый отчёт"
}
