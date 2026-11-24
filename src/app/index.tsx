import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Olá mundo!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo:{
        color: 'red',
        fontSize: 60,
        fontWeight: 'bold'
    },
    container:{
        flex: 1,
        padding: 32,
        justifyContent: 'center'
    }
});