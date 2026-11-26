import { StyleSheet, Text, View } from 'react-native';

export default function Service(){
    return(
        <View style={styles.card }>
            <Text style={styles.titulo }>
                Desvolvimento de Sistemas
            </Text>
            <Text style={styles.descricao }>
                Criamos soluções digitais para empresas que desejam modernizar seus processos.
            </Text>
        </View>

    );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 8,
  },
descricao: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 23,
  },
});