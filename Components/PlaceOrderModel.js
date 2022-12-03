import { useNavigation } from "@react-navigation/native";
import { Box,View,Text, Center, Modal, VStack, HStack, Button} from "native-base";
import React, { useState } from "react";
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


const PlaceOrderModel = () => {
    const navigation = useNavigation()
    const[showModel,setShowModel] = useState(false)
    return(
        <Center>
            <Buttone
                onPress={() => setShowModel(true)}
                bg={Colors.black}   
                color={Colors.white }
                mt={5}
            >
                SHOW TOTAL
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
                        <VStack space={7}>
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
                        <Button flex={1} bg={Colors.main} h={45} 
                        text={{
                            color:Colors.white
                        }}
                        onPress={() => {
                            navigation.navigate("order");
                            setShowModel(false)}
                        }
                            

                        _pressed={{
                            bg:Colors.main
                        }}
                        >
                            PLACE AN ORDER
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    );
};

export default PlaceOrderModel;