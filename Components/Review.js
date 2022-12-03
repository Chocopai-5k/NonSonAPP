import { View,Text,Box,Heading, VStack, FormControl, Select, CheckIcon, TextArea} from "native-base";
import React, { useState } from "react";
import Colors from "../color";
import Rating from "../Components/Rating";
import Message from "./Notfications/Message";
import Buttone from "./Buttone";
export default function Review(){
    const [rating, setRatings] = useState('')
    return(
        <Box my={9}>
            <Heading bold fontSize={15} mb={2}>
                REVIEW
            </Heading>
            {/* IF THERE IS NO REVIEW */}        
            {/* <Message 
                color={Colors.main} 
                bg={Colors.deepGray} 
                bold
                children ={
                    "NO REVIEW"
                }
            /> */}
            {/*REVIEW*/}
            <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
            <Heading fontSize={15} color={Colors.black}> 
                Manh Beo
            </Heading>
            <Rating value={4}/>
            <Text my={2} fontSize={11}>
                Jan 12 2022
            </Text>
            <Message 
                color={Colors.black} 
                bg={Colors.white} 
                size={12} 
                children ={
                    "Mũ nhẹ vừa đầu, hàng y hình, ưng cái bụng lắm ạ. Giá cả hợp lý, đáng đồng tiền bát gạo .Shop tư vấn nhiệt tình lắm .Nhất định sẽ quay lại lần sau."
                }
            />
            </Box>
            {/*WRITE REVIEW*/}
            {/* <Box>
                <Heading fontsize={15} color={Colors.black} mb={2}>
                    REVIEW THIS PRODUCT
                </Heading>
                <VStack space={6}>
                    <FormControl>
                        <FormControl.Label
                        _text={{
                            fontSize : "12px",
                            fontWeight:"bold",
                            color:Colors.black,

                        }}
                        >
                            Rating
                        </FormControl.Label>
                        <Select 
                            bg={Colors.subGreen} 
                            borderWidth={0} 
                            rounded={5} 
                            py={4} 
                            placeholder="Choose Rate"
                            _selectedItem={{
                                bg: Colors.subGreen,
                                endIcon: <CheckIcon  size={3}/>,
                                justifyContent:"center"
                            }}
                            selectValue={rating}
                            onValueChange={(e) => setRatings(e)}
                            >
                                <Select.Item label="1 - Poor" value="1"/>
                                <Select.Item label="2 - Fair" value="2"/>
                                <Select.Item label="3 - Good" value="3"/>


                        </Select>                 
                    </FormControl>
                    <FormControl>
                        <FormControl.Label
                        _text={{
                            fontSize : "12px",
                            fontWeight:"bold",
                            color:Colors.black,

                        }}
                        >
                            Comment
                        </FormControl.Label>
                        <TextArea 
                            h={24} 
                            w="full" 
                            placeholder="Đây là sản phẩm tốt....." 
                            borderWidth={0} 
                            bg ={Colors.subGreen}
                            py={4}
                            _focus={{
                                bg: Colors.subGreen,
                            }}
                        />
                    </FormControl>
                    <Buttone bg={Colors.main} color={Colors.white}>
                        SUBMIT
                    </Buttone>
                    <Message 
                        color={Colors.white} 
                        bg={Colors.black}           
                        children ={
                            "Đăng nhập để bình luận."
                        }
            />
                </VStack>
            </Box> */}
        </Box>

    );
}