import { Text,View,Box } from "native-base";
import React from "react";
import Colors from "../color";
import HomeProducts from "../Components/HomeProducts";
import HomeSeach from "../Components/HomeSearch";

function HomeScreen(){
    return (
        <Box flex={1} bg={Colors.subGreen}>
            <HomeSeach/>
            <HomeProducts/>
        </Box>
    )
}

export default HomeScreen