import * as React from 'react';
import { View, Text } from 'native-base';
import { Drawer as PaperDrawer, NavigationContainer, } from 'react-native-paper';


const Drawer = () => {
  const [active, setActive] = React.useState('');

  function firstScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="FirstPage">
          <Stack.Screen
            name="FirstPage"
            component={FirstPage}
            options={{
              title: 'First Page', //Set Header Title
              headerLeft: ()=>
                <NavigationDrawerStructure
                  navigationProps={navigation}
                />,
              headerStyle: {
                backgroundColor: '#f4511e', //Set Header color
              },
              headerTintColor: '#fff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
            }}
          />
        </Stack.Navigator>
    );
  }
  
  function secondScreenStack({ navigation }) {
    return (
      <Stack.Navigator
        initialRouteName="SecondPage"
        screenOptions={{
          headerLeft: ()=>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          }
        }}>
        <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          options={{
            title: 'Second Page', //Set Header Title
            
          }}/>
        <Stack.Screen
          name="ThirdPage"
          component={ThirdPage}
          options={{
            title: 'Third Page', //Set Header Title
          }}/>
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <PaperDrawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>
        <PaperDrawer.Screen
          name="FirstPage"
          options={{ drawerLabel: 'First page Option' }}
          component={<View><Text>AAAAA</Text></View>} />
        <PaperDrawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'Second page Option' }}
          component={<View><Text>BBBBB</Text></View>} />
      </PaperDrawer.Navigator>
    </NavigationContainer>
  );
};

export default Drawer;
