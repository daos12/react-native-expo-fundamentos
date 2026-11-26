import { Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>

            <Image
                style={styles.logo}
                source={require('@/assets/img/Stutiliro.png')}
            />


            <Text style={styles.titulo}>
                Meu Primeiro Aplicativo
            </Text>

            <Text style={styles.descricao}>
                Desenvolvido com React Native.
            </Text>

            <Text style={styles.autor}>
                Curso Técnico em Desenvolvimento de Sistemas.
            </Text>

        </View>

    );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 30,
        color: '#0F172A',
        textAlign: 'center',
        marginBottom: 20,
    },
    descricao: {
        fontSize: 16,
        color: '#475569',
        textAlign: 'center',
    },
    autor: {
        fontSize: 13,
        color: '#9c299c',
        textAlign: 'center',
        marginTop: 32,
    },
    container: {
        flex: 1,
        backgroundColor: "#f1f5f9",
        padding: 24,
    },
    logo:{
        width: 150,
        height: 150,
        alignSelf: 'center',
    }
});