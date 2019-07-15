import React, {Component} from 'react';
import {Dimensions, Image, ScrollView, TouchableOpacity} from 'react-native';

import HighLightedImageView from './HighlLightedFullImage'
import collection from "./data";

const {height, width} = Dimensions.get('window');


export default class SmallImageView extends Component {

    state = {
        showHighLightedImg: false,
        imgPath: '',
        tappedIndex: null
    };

    showHighLightedImg({evt},source, index) {
        console.log(evt);
        this.setState({showHighLightedImg: true, imgPath: source, tappedIndex: index})
    }

    hideImage() {
        this.setState({showHighLightedImg: false, tappedIndex: null})
    }

    render() {
        return (
            <ScrollView style={{flex: 1, paddingVertical: 20}}>
                {
                    collection.img.map((source, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                activeOpacity={0.8}
                                onPress={(e) => {
                                    this.showHighLightedImg(e.nativeEvent, source, index)
                                }}
                                style={{
                                    height: height/4,
                                    width: width,
                                }}
                            >
                                <Image source={{uri: source}} rsizeMode={'cover'}
                                       style={{flex: 1, opacity: this.state.tappedIndex === index ? 0 : 1}}/>
                            </TouchableOpacity>
                        )
                    })
                }
                {this.state.showHighLightedImg &&
                <HighLightedImageView source={this.state.imgPath} hideImage={this.hideImage.bind(this)}
                                       />
                }
            </ScrollView>
        )
    }
}
