import { Box, Center,FormControl,ScrollView,Text, VStack,Input, HStack,Image, Spacer} from "native-base";
import React from "react";
import Colors from "../color";  
import Buttone from "../Components/Buttone";
import {Ionicons} from "@expo/vector-icons"
import {FontAwesome} from "@expo//vector-icons";
import { useNavigation } from "@react-navigation/native";

const paymentMethodes = [
    {
        image: require("../assets/paypal.png"),
        alt:"paypal",   
        icon:"Ionicons"
    },
    {
        image: require("../assets/zalopay.png"),
        alt:"zalo",   
        icon:"fontAwesome"
    },
    {   
        image: require("../assets/googlepay.png"),
        alt:"paypal",   
        icon:"fontAwesome"
    },
]


function PaymentScreen(){
    const navigation = useNavigation()
    return (
        <Box flex={1} safeArea bg={Colors.main} py={5}>
        {/*Header*/}
        <Center pb={15}>
            <Text color={Colors.white} fontSize={14} bold
            > 
                PAYMENT METHOD
            </Text>
        </Center>
        {/*SELECTION*/}    
            <Box h ="full" bg={Colors.subGreen} px={5}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack space={6} mt={5}>   
                    {paymentMethodes.map((i,index) => (
                        <HStack
                         key={index}
                         alignItems="center"
                         bg={Colors.white}
                         px={3}
                         py={1}
                         justifyContent="space-between"
                         rounded={10}
                     >
                         <Box>
                             <Image 
                                 source={i.image }
                                 alt="paypal"
                                 resizeMode="contain"
                                 w={60}
                                 h={50}
                             />
                         </Box>
                         {i.icon === 'Ionicons' ?
                            <Ionicons
                                name="checkmark-circle" 
                                size ={30} 
                                color={Colors.main}/>:  <FontAwesome
                                name="circle-thin" 
                                size ={30} 
                                color={Colors.main}/>}
                        </HStack>
                    ))}
                       
                        <Buttone onPress={() => navigation.navigate("Placeorder")} bg={Colors.main} color={Colors.white} mt={5}>CONTINUE</Buttone>
                        <Text italic textAlign="center">
                            Payment method is <Text bold >Paypal</Text> by default
                        </Text>
                    </VStack>
                </ScrollView>
            </Box>
       </Box>
    )
}

export default PaymentScreen;