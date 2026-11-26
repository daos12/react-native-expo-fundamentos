import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <View style={styles.container }>
            <Text style={styles.titulo }>
                ConectaTech
            </Text>
            <Text style={styles.subtitulo }>
                Tecnologia que aproxima soluções.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D4ED8',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitulo: {
    fontSize: 14,
    color: '#DBEAFE',
    marginTop: 8,
    textAlign: 'center',
  },
});
