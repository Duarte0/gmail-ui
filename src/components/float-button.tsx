import { TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

export function FloatButton(){
    return(
        <TouchableOpacity 
        style={{
            backgroundColor: colors.gray[600], 
            padding: 13, 
            borderRadius: 50, 
            position: 'absolute',
            bottom: 10,
            right: 4,
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        activeOpacity={0.7}
        >
            <MaterialIcons name="edit" size={22} color={colors.orange[500]} />

            <Text style={{
                color: colors.orange[500],
                marginLeft: 5
            }}>Escrever</Text>
        </TouchableOpacity>
    )
}