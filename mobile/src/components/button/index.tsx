/*É possível passar outra estilização que seja colocada como propriedade. Nesse caso, pode-se colocar o s.container entre colchetes e, ainda ali dentro, colocar um obj com a estilização. Alternativamente, pode-se pegar uma estilização enviada como prop e colocá-la da mesma forma no componente*/
import { TouchableOpacity, 
         TouchableOpacityProps, 
         Text, 
         TextProps,
         ActivityIndicator 
    } from "react-native"
import { IconProps as TablerIconProps } from "@tabler/icons-react-native"

import { s } from "./styles"
import { colors } from "@/styles/colors"

type ButtonProps = TouchableOpacityProps & {
    isLoading?:boolean
}

function Button({ children, style, isLoading = false, ...rest }: ButtonProps){
    return( 
    <TouchableOpacity 
        style={[s.container, style]} 
        activeOpacity={0.8}
        disabled={isLoading}
        {...rest}
    >
        {isLoading ? <ActivityIndicator size="small" color={colors.gray[100]}/> : children}
    </TouchableOpacity>
)}

function Title({ children }: TextProps){
    return(
        <Text style={s.title}>{children}</Text>
    )
}

type IconProps = {
    icon: React.ComponentType<TablerIconProps>
}

function Icon({icon: Icon} : IconProps){
    return <Icon size={24} color={colors.gray[100]} />
}

Button.Title = Title
Button.Icon = Icon

export { Button }