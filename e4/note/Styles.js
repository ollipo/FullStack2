import { StyleSheet } from "react-native"

//A stylesheet to make our app beautiful
const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        flexDirection: 'column'
    },
    button: {
        backgroundColor: 'grey',
        fontWeight: 'bold',
        fontSize: 30,
        padding: 10,
    },
    inputText: {
        backgroundColor: 'grey',
        fontWeight: 'bold',
        fontSize: 30,
        padding: 10,
    },
    note: {
        backgroundColor: 'green',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10,
        justifyContent: "center"
    },
    dayitemview: {
        backgroundColor: 'yellow',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
    }

});

export default styles;