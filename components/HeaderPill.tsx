import { Text as DefaultText, View as DefaultView } from 'react-native';
import { View, Text } from './Themed';

interface HeaderPillProps {
    label: string;
}

export type ViewProps = HeaderPillProps & DefaultView['props'];

const HeaderPill = (props: ViewProps) => {
    const { style } = props;
    return (
        <View style={[{
            backgroundColor: '#143F6B',
            height: 34,
            minWidth: 185,
            borderTopRightRadius: 16,
            borderBottomRightRadius: 16,
            alignSelf: 'flex-start',
            justifyContent: 'center',
            padding: 5,
            paddingLeft: 10
        }, style]}>
            <Text style={{ color: '#fff', fontSize: 15 }}>{props.label}</Text>
        </View>
    )
}

export default HeaderPill;