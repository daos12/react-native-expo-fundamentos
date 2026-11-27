import { StyleSheet, Text, View } from 'react-native';

export default function SuporteTecnico() {
    return (
        <View style={styles.card}>
            <Text style={styles.titulo}>
                Suporte Técnico
            </Text>
            <Text style={styles.descricao}>
                Atendimento especializado.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium deleniti repellendus ipsa libero possimus ut explicabo quo facilis! Sunt unde eveniet ad ipsa ducimus corporis voluptas, totam facere consequuntur voluptate!
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