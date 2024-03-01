import { colors } from "@/styles/colors";
import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export function MenuButton() {
    return( 
        <Pressable>
            <MaterialIcons name="menu" size={22} color={colors.white} />
        </Pressable>
    )
}