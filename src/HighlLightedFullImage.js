import React, {Component} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';


const {height, width} = Dimensions.get('window');

export default class HighlLightedFullImage extends Component {


    render() {
        return (
            <View style={{
                height,
                width,
                backgroundColor: 'rgba(0,0,0,0.9)',
                position: 'absolute',
            }}>
                <Image
                    resizeMode='cover'
                    source={{uri: this.props.source}}
                    style={{
                        height: height,
                        width: width,
                    }}
                />
                <TouchableOpacity
                    style={{
                        left: 20,
                        top: 30,
                        position: 'absolute',
                        height: 30,
                        width: 60,
                        backgroundColor: 'rgba(20,20,20,0.7)',
                        borderRadius: 3,
                        borderWidth: 0.7,
                        borderColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text style={{color: 'lightgrey'}}>Close</Text>
                </TouchableOpacity>
            </View>


        )
    }
}
