import * as React from 'react';
import { Appbar, View } from 'react-native-paper';
import { StyleSheet } from 'react-native';


const Header = (props) => {
    return (
        <Appbar.Header>
            <Appbar.Action icon={'menu'} onPress={() => {props.navigation.toggleDrawer()}} />
            <Appbar.Content title="Text Reader App" subtitle={"Por Dayara da Silva"} />
        </Appbar.Header>
    )
};
 const styles = StyleSheet.create({
    text: {
      color: '#fff'
    }
  })
export default Header