import React, {Component} from 'react';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/SimpleLineIcons';

class HamburgerIcon extends Component{
    render() {
    return (
        <TouchableOpacity
        style={{
            width: 44,
            height: 25,
            marginLeft: 20
        }}
        onPress={()=>{
            this.props.navigation.openDrawer();
        }}>
            <Icon name='menu' size={20} color='white'/>
        </TouchableOpacity>
    )
    };
}

export default withNavigation(HamburgerIcon);

