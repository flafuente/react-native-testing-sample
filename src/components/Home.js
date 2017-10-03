import React from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Platform,
    StyleSheet
} from 'react-native';

import {
    Actions,
} from 'react-native-router-flux';

    class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            alias: '',
        };
    }
    render() {
        return (
            <View>
                <Text style={styles.title}>
                    Enter name:
                </Text>
                <TextInput value={this.state.alias} onChangeText={(text) => {
                    this.setState({ alias: text })
                }} style={styles.nameInput} placeholder='Name' />
                <TouchableOpacity
                    onPress={() => {
                        // Navigate
                        Actions.hello({
                            alias: this.state.alias
                        });
                    }}>
                    <Text style={styles.nextBtn}>Next</Text>
                </TouchableOpacity>

                
            </View>
        );
    }
}

var styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 17
    },
    nameInput: {
        padding: 5,
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        margin: 20
    },
    nextBtn: {
        marginLeft: 20,
        fontSize: 20
    }
});

export default Home