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

    class Hello extends React.Component {
    constructor(props) {
            super(props);
    }
    render() {
        return (
            <View>
                <Text style={styles.title}>
                    {this._composePhrase(this.props.alias)}
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        // Navigate
                        Actions.home({});
                    }}>
                    <Text style={styles.backBtn}>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
    _composePhrase(alias) {
        return "Hello " + alias;
    }
}

export const styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 17
    },
    backBtn: {
        marginLeft: 20,
        fontSize: 20
    }
});

export default Hello