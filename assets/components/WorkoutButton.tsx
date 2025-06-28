import React, { JSX } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { colors } from '../constants/themes';

type WorkoutButtonProps = {
    style?: object;
    title: string;
    rightSectionText?: string;
    rightSectionIcon?: string;
    color?: "primary" | "secondary";
    onPress?: () => void;
};

WorkoutButton.defaultProps = {
    color: "primary",
};

export default function WorkoutButton({ style, title, rightSectionText, rightSectionIcon, color, onPress }: WorkoutButtonProps): JSX.Element {
    const backgroundColor = color === "secondary" ? colors.primary : colors.secondary;
    const textColor = colors.textWhite
    const contrastColor = color === "secondary" ? colors.primaryContrast : colors.secondaryContrast;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[style, {
                backgroundColor,
                borderRadius: 12,
                paddingVertical: 24,
                paddingHorizontal: 16,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }]}>
            <Text
                style={{
                    color: textColor,
                    fontSize: 18,
                    fontWeight: 'bold',
                }}>
                {title}
            </Text>
            {rightSectionText && (
                <Text
                    style={{
                        color: contrastColor,
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}>
                    {rightSectionText}
                </Text>
            )}
        </TouchableOpacity>
    )
}