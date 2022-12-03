import { useNavigation } from "@react-navigation/native";
import { Box,View,Text, Center, Modal, VStack, HStack, Button,Image} from "native-base";
import React, { useState } from "react";
import { Pressable } from "react-native";
import Colors from "../color";
import Buttone from "./Buttone";

const OrdersInfos =[
    {
        tittle:"Products",
        price:125.77,
        color:"black"
    },
    {
        tittle:"Shipping",
        price:34.00,
        color:"black"
    },
    {
        tittle:"Tax",
        price:23.34,
        color:"black"
    },
    {
        tittle:"Total Amount",
        price:3458.00,
        color:"main"
    },
]


const OrderModel = () => {
    const navigation = useNavigation()
    const[showModel,setShowModel] = useState(false)
    return(
        <Center>
            <Buttone
                onPress={() => setShowModel(true)}
                bg={Colors.main}   
                color={Colors.white }
                mt={5}
            >
                SHOW PAYMENT & TOAL
            </Buttone>
            <Modal
                isOpen={showModel}
                onClose={() => setShowModel(false)}
                size="lg" 
            >
                <Modal.Content maxWidth={350}>
                    <Modal.CloseButton/>
                    <Modal.Header>Order</Modal.Header>
                    <Modal.Body>
                        <VStack space={12}>
                            {OrdersInfos.map((i,index) =>
                                <HStack key={index} alignItems="center" justifyContent="space-between">
                                    <Text fontWeight="medium">{i.tittle}</Text>
                                    <Text color={i.color==="main" ? Colors.main : Colors.black} 
                                    bold 
                                    >    
                                    ${i.price}
                                    </Text>
                                </HStack>
                            )}
                       
                        </VStack>
                    </Modal.Body>
                    <Modal.Footer>
                        <Pressable 
                        w="full" 
                        justifyContent="center" 
                        bg={Colors.paypal}
                        h={45} 
                        rounded = {3}
                        overflow="hidden"
                        onPress={
                            () =>setShowModel(false)
                        }  
                        >
                        <Image source={require("../assets/paypal02.png")}
                        alt="paypal"
                        resizeMode="contain"
                        w="full" 
                        h={34}
                        />   
                        </Pressable>
                        <Button 
                        w="full"
                        mt={2}
                        bg={Colors.black} 
                        h={45} 
                        text={{
                            color:Colors.white
                        }}
                        onPress={() => {
                            navigation.navigate("Home");
                            setShowModel(false)
                        }}
                        _pressed={{
                            bg:Colors.black
                        }}
                        >
                            PAY LATER
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    );
};

export default OrderModel;