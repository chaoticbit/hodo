import { Text as DefaultText, View as DefaultView, Image } from 'react-native';
import { View, Text } from './Themed';

interface PopularDestinationProps {
    name: string;
    image: any;
}

export type ViewProps = PopularDestinationProps & DefaultView['props'];

const PopularDestination = (props: ViewProps) => {
    return (
        <View style={{
            width: 204,
            height: 131,
            borderRadius: 16,
            overflow: 'hidden',
            marginLeft: 16
        }}>
            <Image style={{
                width: 204,
                height: 131,
                borderRadius: 16,
                overflow: 'hidden'
            }} source={props.image} resizeMode={'cover'} resizeMethod={'resize'} />
            <View style={{
                position: 'absolute',
                backgroundColor: '#fff',
                borderRadius: 8,
                width: 90,
                height: 24,
                bottom: 8,
                left: 8,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{ color: '#000' }}>{props.name}</Text>
            </View>
        </View>
    )
}

export default PopularDestination;