import Onboarding from "react-native-onboarding-swiper"
import { Image } from "react-native";
import { RootStackScreenProps } from "../types";

export default function OnboardingFlowScreen({ navigation }: RootStackScreenProps<'OnboardingFlow'>) {
    const pages = [
        {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/images/Onboarding1.png')} style={{ marginTop: 160, width: 375, height: 844 }} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/images/Onboarding2.png')} style={{ marginTop: 160, width: 375, height: 844 }} />,
            title: 'The Title',
            subtitle: 'This is the subtitle that sumplements the title.',
        },
        {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/images/Onboarding3.png')} style={{ marginTop: 160, width: 375, height: 844 }} />,
            title: 'Triangle',
            subtitle: "Beautiful, isn't it?",
        },
        {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/images/Onboarding4.png')} style={{ marginTop: 160, width: 375, height: 844 }} />,
            title: 'Triangle',
            subtitle: "Beautiful, isn't it?",
        },
    ]

    return (
        <Onboarding
            pages={pages}
            onDone={() => navigation.replace('Login')}
        />
    )
}