import { ScrollView, StyleSheet, Text } from 'react-native';

import Footer from '@/components/empresa/Footer';
import Header from '@/components/empresa/Header';
import Service from '@/components/empresa/Service';

export default function HomeScreen(){
    return(
        <ScrollView style={styles.container}>
            <Header/>
            <Text style={styles.secao }>
                Nossos Serviços
                </Text>
            <Service/>
            <Footer/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    padding: 20
  },
  conteudo: {
    padding: 20,
  },
  secao: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0F172A',
    marginTop: 28,
  },
});