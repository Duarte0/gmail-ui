import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, PressableProps , View, Text } from "react-native";
import clsx from "clsx";

export type IconNameProps = keyof typeof MaterialIcons.glyphMap

type DrawerButtonProps = PressableProps &{
    title: String
    isFocused?: boolean
    isDivider?: boolean
    iconName: IconNameProps
    notifications?: number
}

export function DrawerButton({title, isFocused, isDivider, iconName, notifications, ...rest}: DrawerButtonProps) {

    return( 
        <Pressable className={clsx("py-2 w-full", {
            "border-b ml-1 border-gray-500" : isDivider,
        })}
        {...rest}
        >
            <View className={ 
                clsx("flex-row items-center gap-4 h-14 px-6 -ml-4 w-full", {
                    "-ml-10" : isDivider
                })
            }>
                <MaterialIcons 
                    name={iconName}
                    size={20} 
                    color={isFocused ? colors.orange[300] : colors.gray[400]}
                />
                <Text className={
                    clsx("text-white font-subtitle text-base flex-1", {
                        "text-orange-300" : isFocused
                    })
                }
                >
                    {title}
                </Text>
                <Text className={clsx("text-gray-400 text-sm font-body", {
                    "text-orange-300" : isFocused
                })}>{notifications}</Text>
            </View>
        </Pressable>
    )
}