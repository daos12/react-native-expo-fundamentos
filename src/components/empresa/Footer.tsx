import { StyleSheet, Text } from 'react-native';

export default function Footer(){
    return(
        <Text style={styles.texto }>
            ConectaTech - Soluções em Técnologia.
        </Text>
    );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 16,
  },
});