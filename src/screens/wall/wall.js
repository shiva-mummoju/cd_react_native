import React, { Component } from 'react';
// import React, {Component} from 'react';
import { StyleSheet, ScrollView, FlatList , RefreshControl } from 'react-native';
import { Constants, Colors, View, Card, Button, Text } from 'react-native-ui-lib'; //eslint-disable-line
// import { View , Text, Button , TextInput} from 'react-native';
// import {Constants as UIConstants , Colors as UIColors, View as UIView ,  Card as UICard , Button as UIButton, Text as UIText } from 'react-native-ui-lib'; //eslint-disable-line
import { connect } from 'react-redux';
import { changeData } from './../../store/actions/index';
import * as _ from 'lodash';
//import { Button } from 'react-native';


const featureIcon = require('../../assets/icons/star.png');
const shareIcon = require('../../assets/icons/share.png');
// const cardImage = require('./../../assets/icons/card-example.jpg');
// const cardImage2 = re

class WallScreen extends Component {

    state = {
        data: 'This is some local data from the wall.',
        refreshing: false
    }

    changeDataInRedux = () => {
        this.props.changeData(this.state.data);
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        setTimeout(() => {
            this.setState({refreshing: false});
        }, 3000);
      }


    render() {
        return (
            <FlatList contentContainerStyle={styles.container}
            refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh}
                />}
                data={this.props.posts}

                renderItem={(obj) => {
                    console.log(post);
                    console.log('post has been logged');
                    const post = obj.item;
                    return (
                        <Card key={post.key} style={{ marginBottom: 15 }} onPress={() => console.log('press on a card')}>
                            <Card.Image height={160} imageSource={{ uri: post.coverImage }} />

                            <View padding-20>
                                <Text text40 color={Colors.dark10}>
                                    {post.title}
                                </Text>
                                <View row>
                                    <Text text90 color='black'>
                                        {post.status}
                                    </Text>
                                    <Text text90> | {post.timestamp}</Text>
                                </View>

                                <Text text70 color={Colors.dark10}>
                                    {post.description}
                                </Text>

                                <View>
                                    <Text text90 color={Colors.dark50}>
                                        {post.likes} Likes
                        </Text>
                                    <View row right>
                                        <Button style={{ marginRight: 10 }} text90 link iconSource={featureIcon} label="Feature" />
                                        <Button text90 link iconSource={shareIcon} label="Share" />
                                    </View>
                                </View>
                            </View>
                        </Card>
                    );

                }}
            />


        );
    }
}


const mapStateToProps = state => {
    return {
        data: state.reducer.data,
        posts: state.posts.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeData: (newData) => dispatch(changeData(newData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WallScreen);



const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: Colors.yellow80
    }
});