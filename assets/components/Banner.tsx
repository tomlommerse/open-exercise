import { Text, View } from "react-native";

import { JSX } from "react/jsx-runtime";
import { colors } from "../constants/themes";


export default function Banner(): JSX.Element {
    return (
        <View>
            <Text
                style={{
                    color: colors.textWhite,
                    fontSize: 32,
                    fontWeight: "bold",
                }}
            >
                Good Morning,{"\n"}Have a Great Workout
            </Text>
        </View >
    );
}