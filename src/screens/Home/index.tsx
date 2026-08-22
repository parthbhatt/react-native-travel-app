import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../../components/Title";

const Home = () => {

    const [title, setTitle] = useState('Dynamic Text')

    useEffect(() => {

        setTimeout( () => {
            setTitle('Prop Title Updated')
        },5000)

    }, [])

    return (
        <SafeAreaView>
        <View>
            <Title text={title} />
        </View>
        </SafeAreaView>
    );
}


export default React.memo(Home);