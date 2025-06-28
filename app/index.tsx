import Banner from "@/assets/components/Banner";
import Favorites from "@/assets/components/Favorites";
import WorkoutButton from "@/assets/components/WorkoutButton";
import { colors } from "@/assets/constants/themes";
import { View } from "react-native";

export default function Index() {
    return (
        <View
            style={{
                backgroundColor: colors.background,
                height: "100%",
                flexDirection: "column",
                gap: 16,
                paddingHorizontal: 16,
            }}
        >
            <Banner />
            <WorkoutButton
                style={{
                    marginHorizontal: 8,
                }}
                title="Start An Empty Workout"
                color="primary"
                onPress={() => console.log("start")}
            />
            <Favorites
                style={{
                    padding: 8,
                }}
            />
            <WorkoutButton
                style={{
                    marginHorizontal: 8,
                }}
                title="Saved Workouts"
                rightSectionIcon="icon"
                color="primary"
                onPress={() => console.log("saved")} />
        </View>
    );
}
