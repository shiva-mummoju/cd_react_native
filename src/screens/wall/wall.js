import React , { Component } from 'react';
import { View , Text, Button , TextInput} from 'react-native';

import { connect } from 'react-redux';
import { changeData } from './../../store/actions/index';
//import { Button } from 'react-native';

class WallScreen extends Component {

    state = {
        data : 'This is some local data from the wall.'
    }

    changeDataInRedux = () => {
        this.props.changeData(this.state.data);
    }

    
    render() {
        return (
            <View>
                <Text>This is the Wall screen {this.props.data}</Text>

                <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(data) => this.setState({data})}
        value={this.state.data}
      />
                <Button
  onPress={this.changeDataInRedux}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
                
            </View>
        );
    }
}


const mapStateToProps = state => {
    return {
        data: state.reducer.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeData: (newData) => dispatch(changeData(newData))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WallScreen);
