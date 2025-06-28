import React, { JSX } from 'react';
import { Text, View } from 'react-native';
import { colors } from '../constants/themes';
import WorkoutButton from './WorkoutButton';

type FavoritesProps = {
    style?: object;
};

export default function Favorites({ style }: FavoritesProps): JSX.Element {
    return (
        <View
            style={[style, {
                borderWidth: 1,
                borderRadius: 12,
            }]}>
            <Text
                style={{
                    color: colors.textWhite,
                    fontSize: 18,
                    fontWeight: 'bold',
                }}>
                Favorite Workouts
            </Text>
            <View
                style={{
                    flexDirection: 'column',
                    gap: 8,
                    paddingTop: 8,
                }}>
                <WorkoutButton title="Monday Workout" rightSectionText="Weights" color="secondary" onPress={() => console.log("Monday")} />
                <WorkoutButton title="Thuesday Workout" rightSectionText="Weights" color="secondary" onPress={() => console.log("Thuesday")} />
                <WorkoutButton title="Wednesday Workout" rightSectionText="Weights" color="secondary" onPress={() => console.log("Wednesday")} />
                <WorkoutButton title="Thursday Workout" rightSectionText="Weights" color="secondary" onPress={() => console.log("Thursday")} />
                <WorkoutButton title="Friday Workout" rightSectionText="Weights" color="secondary" onPress={() => console.log("Friday")} />
            </View>
        </View>
    );
}