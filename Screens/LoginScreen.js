import { Text,Image,View,Box,Heading,VStack,Input,Button} from "native-base";
import React from "react";
import Colors from "../color";
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Pressable } from "react-native";
import Color from "../color";


function LoginScreen({navigation}){
    return (
    <Box flex ={1} bg={Colors.black}>
        <Image 
        flex={1} 
        alt="Logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../assets/cover.png")}
        />
        <Box 
            w="full" 
            h="full" 
            position="absolute" 
            top="0" 
            px="6"
            justifyContent="center"
        >
            <Heading>LOGIN</Heading>
            <VStack space={8} pt="6">
                {/* Email*/}
                <Input 
                    InputLeftElement={
                        <MaterialIcons name="email" size={24} color="black" />
                    }
                    variant="underlined" 
                    placeholder="user@gmail.com"
                    w="70%"               
                    pl={2}
                    type="text"
                    color={Colors.main} 
                    borderBottomColor={Colors.underline}
                />
                {/* PassWord*/}
                <Input 
                    InputLeftElement={
                        <AntDesign name="eye" size={24} color="black" /> 
                    }
                    variant="underlined" 
                    placeholder="*********"
                    w="70%" 
                    type="password"
                    pl={2}
                    color={Colors.main} 
                    borderBottomColor={Colors.underline}
                />
            </VStack>
            <Button 
                _pressed={{
                    bg: Colors.main,
                }}
                my={30} 
                w="40%" 
                rounded={50} 
                bg={Colors.main}
                onPress={() => navigation.navigate("Bottom")}
            >
                LOGIN
            </Button>    
            <Pressable mt={4} onPress={() => navigation.navigate("Register")}>
                <Text color={Color.deepestGray}>SIGN UP</Text>
            </Pressable>
        </Box>
    </Box>
    );
}

export default LoginScreen;