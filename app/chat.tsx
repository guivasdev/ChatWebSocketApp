import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { IconButton, MD3Theme, TextInput, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ChatScreen() {
  const { name } = useLocalSearchParams();
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [messageText, setMessageText] = useState('');
  const [stateConnection, setStateConnection] = useState(false)
  const [disableButton, setDisableButton] = useState(true);
  const [inputFieldEmpty, setInputFieldEmpty] = useState(true);
  const [serverMessages, setServerMessages] = useState([[]]);

  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    const serverMessagesList: any[] = [];

    function conectar() {

      ws.current = new WebSocket('/* IP AQUI*/');

      ws.current.onopen = () => {
        setDisableButton(false);
        setStateConnection(true)
        alert('Você está conectado!')

      };
      ws.current.onmessage = e => {
        serverMessagesList.push(e.data);
        setServerMessages([...serverMessagesList])
      };

      ws.current.onerror = e => {
      };

      ws.current.onclose = () => {
        setStateConnection(false)
        setDisableButton(true);

        setTimeout(() => {
          conectar();
        }, 3000);

      };
    }
    conectar();


    return () => {
      ws.current?.close();
    };


  }, []);

  const submitMessage = () => {
    ws.current?.send(name + ': ' + messageText);
    setMessageText('')
    setInputFieldEmpty(true)
  }

  return (
    <SafeAreaView style={styles.container}>
      {stateConnection ?
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
          keyboardVerticalOffset={0}
          contentContainerStyle={styles.container}
        >
          <View style={styles.container}>

            <ScrollView
              contentContainerStyle={styles.scrollContent}
              style={styles.scrollContent}
              keyboardShouldPersistTaps="always"
            >
              {serverMessages.map((item, ind) => {
                return (
                  <Text style={{ fontSize: 18, paddingHorizontal: 20, paddingVertical: 5 }} key={ind}>{item}</Text>
                )
              })}
            </ScrollView>

            <View style={styles.footer}>
              <TextInput mode='outlined' value={messageText}
                onChangeText={text => {
                  setMessageText(text)
                  setInputFieldEmpty(text.length > 0 ? false : true)
                }}
                style={styles.input} placeholder='Digite a mensagem aqui...' />
              <IconButton
                disabled={disableButton || inputFieldEmpty}
                icon={"send"} onPress={submitMessage}
                size={33} style={styles.IconButton}></IconButton>
            </View>
          </View>
        </KeyboardAvoidingView>
        :
        <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 25, }}>
          <Text style={{
            elevation: 4,
            backgroundColor: theme.colors.background,
            boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.1)',
            borderRadius: 15,
            textAlign: 'center', fontSize: 20,
            fontWeight: 'bold', letterSpacing: 1.5, paddingVertical: 30, paddingHorizontal: 20, lineHeight: 35
          }}>
            Você foi desconectado, verifique sua internet!</Text>

        </View>
      }
    </SafeAreaView>
  );
}

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },

    scrollContent: {
      flex: 1,
      padding: 0,
      paddingBottom: 0,
    },

    footer: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingVertical: 0,
      paddingBottom: 4,

    },
    input: {
      flex: 4,
      elevation: 4,
      boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
    },

    IconButton: {
      flex: 1,
      height: 'auto',
      padding: 0,
      marginVertical: 0,
      elevation: 4,
      boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
      backgroundColor: theme.colors.onPrimary,
      borderRadius: 8,
    },

  });
