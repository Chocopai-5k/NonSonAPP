import HomeScreen from "./Screens/HomeScreen";
import { NativeBaseProvider, Text, Box,StatusBar} from "native-base";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import NotVerifyScreen from "./Screens/NotVerifyScreen";
import SingleProductScreen from "./Screens/SingleProductScreen";
import CartScreen from "./Screens/CartScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import ShippingScreen from "./Screens/ShippingScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import BottomNav from "./Navigations/BottomNav";
import OrderScreen from "./Screens/OrderScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator() 


export default function App() {
  return (
    <NativeBaseProvider>
     <NavigationContainer>
      <StatusBar hidden={true}/>
      <Stack.Navigator 
        initialRouteName="Login" 
        screenOptions={{
          headerShown:false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="order" component={OrderScreen}/>
        <Stack.Screen name="Bottom" component={BottomNav}/>
      </Stack.Navigator>
     </NavigationContainer>
    </NativeBaseProvider>
  );
}


