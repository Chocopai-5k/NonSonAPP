import React from "react";
import {Text,HStack,Input,Box} from "native-base";
import Colors from "../color";
import { Pressable } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
function HomeSearch() {
    const navigation = useNavigation()
    return (
        <HStack 
            space={3} 
            w="full" 
            px={6} 
            bg={Colors.main} 
            py={4} 
            aligntItems="center" 
            safeAreaTop
        >
            <Input 
                placeholder="Nike, Puma, Adidas ..." 
                w="85%" 
                bg={Colors.white} 
                type="search" 
                h={12}
                borderWidth={0}
                _focus={{
                    bg: Colors.white,
                }}
            />
            <Pressable ml={3} onPress={() => navigation.navigate("Cart")}>
                <FontAwesome5 name="shopping-basket" size={40} color={Colors.white}/>
                <Box 
                px={1} 
                rounded="full" 
                position="absolute" 
                top={-13} left={2} 
                bg={Colors.red}
                _text={{
                    color:Colors.white,
                    fontSize:'11px'
                }}
                >
                     5
                </Box>
            </Pressable>
        </HStack>  
    );
}
export default HomeSearch;