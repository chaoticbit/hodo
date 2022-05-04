import AsyncStorage from '@react-native-async-storage/async-storage';

const LOCAL_STORAGE_KEY = 'hodo';
const SAVED_TRIPS_KEY = 'myTrips';

const Store = {
    setData: async function (value: any) {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(LOCAL_STORAGE_KEY, jsonValue);
        } catch (e) {

        }
    },

    getData: async function () {
        try {
            const jsonValue = await AsyncStorage.getItem(LOCAL_STORAGE_KEY);
            return jsonValue !== null ? JSON.parse(jsonValue) : null;
        } catch (e) {

        }
    },

    saveTrip: async function (value: any) {
        try {
            await AsyncStorage.setItem(SAVED_TRIPS_KEY, value);
        } catch (e) {

        }
    },

    getSaved: async function () {
        try {
            return await AsyncStorage.getItem(SAVED_TRIPS_KEY);
        } catch (e) {

        }
    }
}

export default Store;