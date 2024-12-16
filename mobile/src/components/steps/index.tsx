import { View, Text } from "react-native"

import { s } from "./styles"
import { Step } from "../step"
import { 
    IconMapPin,
    IconQrcode,
    IconTicket
} from "@tabler/icons-react-native"

export function Steps(){
    return(
        <View style={s.container}>
            <Text style={s.title}>Veja como funciona:</Text>
            <Step
                icon={IconMapPin}
                title="Encontre estabelecimentos" 
                description = "Veja locais perto de você"
            />
            <Step
                icon={IconQrcode}
                title="Ative o Cupom com QR Code" 
                description = "Escaneie o código no estabelecimento para usar o benefício"
            />
            <Step
                icon={IconTicket}
                title="Garanta vantagens perto de você"
                description="Ative cupons onde estiver, em deferentes tipos de estabelecimento"
            />
        </View>
    )
}