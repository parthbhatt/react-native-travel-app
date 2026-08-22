import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import styles from "./styles";

type TitleProps = {
    text?: string;
};

const Title = ({ text = "Default Text" }: TitleProps) => {
    const [stateText, setText] = useState('Default State')

    useEffect(() => {
        console.log('UseEffect is triggered');
        setText(text)
    },[text])

    const onTextPress = () => {
        setText('Updated State')
    }

    return (

        //Case-1: Using the 'text' prop which is passing the value from the parent of the component.
        // <Text style={styles.title}>
        //     {text}
        // </Text>

        //Case-2: Using stateText to update on Press using useState hook. 
        <Text onPress={onTextPress} style={styles.title}>
            {stateText}
        </Text>
    );
};

export default React.memo(Title);