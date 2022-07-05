import React from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity} from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
const ajustes = [
  {
    id: 1,
    name: 'Cerrar Sesion',
    icon: 'user'
  },
  {
    id: 2,
    name: 'Ayuda y Soporte',
    icon: 'customerservice'
  },
  {
    id: 3,
    name: 'Sobre Nosotros',
    icon: 'questioncircleo'
  },
  {
    id: 4,
    name: 'Salir',
    iconSalir: 'exit-run'
  },
]
const Item = ({ icon, name, iconSalir}) => {
    return (
    <TouchableOpacity>
        <View style={styles.item}>
          <AntDesign name={icon} size={23} style={{paddingTop: 12}} />
          <MaterialCommunityIcons name={iconSalir} size={23} style={{paddingTop: 12}} />
          <Text style={styles.name}>{name}</Text>
        </View>
    </TouchableOpacity>
    );}
export default function settingsView() {
  const renderItem = ({item}) => (
        <Item icon={item.icon} name={item.name} iconSalir={item.iconSalir}/>

      );
  return(
    <SafeAreaView style={styles.container}>
      <FlatList
            data={ajustes}
            renderItem={renderItem}
            keyExtractor={item => item.id}/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: 'white',
      flexDirection: "row",
    },
    arrowItem: {
      alignSelf: 'flex-end',
      paddingTop: 10,
    },
    name: {
      fontSize: 20,
      paddingTop: 10,
      marginLeft: 5,
    },
  });