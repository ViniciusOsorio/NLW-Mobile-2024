import { useRef } from "react"
import { Text, useWindowDimensions } from "react-native";
import BottomSheet, { BottomSheetFlatList} from "@gorhom/bottom-sheet";

import { Place, PlaceProps } from "../place";
import { s } from "./styles";
import { router } from "expo-router";

type Props = {
    data: PlaceProps[]
}

export function Places({ data }: Props){
    const dimensions = useWindowDimensions()
    const bottomSheetRef = useRef<BottomSheet>(null)
    const snapPoint = {
        min: 278,
        max: dimensions.height - 128
    }

    return(
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={[snapPoint.min, snapPoint.max]}
            handleIndicatorStyle={s.indicator}
            backgroundStyle={s.container}
            enableOverDrag={false}
        >
            <BottomSheetFlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Place 
                        data={item} 
                        onPress={() => router.navigate(`/market/${item.id}`)} 
                    />
                )}
                contentContainerStyle={s.content}
                ListHeaderComponent={() => (
                    <Text style={s.title}>Explore locais perto de você!</Text>
                )}
                showsVerticalScrollIndicator={false}
            >

            </BottomSheetFlatList>
        </BottomSheet>
    )
}