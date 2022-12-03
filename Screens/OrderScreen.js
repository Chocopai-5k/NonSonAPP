import { Box,Heading,ScrollView,Text,View } from "native-base";
import React from "react";
import Colors from "../color"
import OrderInfo from "../Components/OrderInfo";
import {FontAwesome,FontAwesome5} from "@expo//vector-icons";
import {Ionicons} from "@expo/vector-icons"
import OrderIterm from "../Components/Orderiterm";
import PlaceOrderModel from "../Components/PlaceOrderModel";
import OrderModel from "../Components/OrderModel";
function OrderScreen(){
    return (
        <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
            <Box>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <OrderInfo 
                        tittle="SHIPPING INFO" 
                        success
                        subTitle="SHIPPING: DINH TRANG "
                        text="Pay Method: PayPal"
                        icon={<FontAwesome5 name="shipping-fast" size={30} color={Colors.white}/>}
                    />
                    <OrderInfo 
                         tittle="DELIVER INFO" 
                            subTitle="Adress: "
                            danger
                            text="So 9 Hai Ba Trung ,Ha Noi"
                            icon={
                            <Ionicons
                                name="location-sharp" 
                                size={30} 
                                color={Colors.white}
                            />}
                    />
                </ScrollView>
            </Box>
            {/*Order Iterm */}
            <Box px={6} flex={1} pb={3}>
                <Heading bold fontSize={15} isTruncated my={4}>
                   PRODUCTS
                </Heading>
                <OrderIterm/>
                {/*Total*/}
                <OrderModel/>
            </Box>
        </Box>
    );
}

export default OrderScreen;