export interface IDeviceInfo {
    getUniqueId: Function;
    getDeviceType: Function;
    getModel: Function
}


export interface IReactNativePluginConfig {
    disableDeviceCollection?: boolean;
    disableExceptionCollection?: boolean;
    deviceInfo: IDeviceInfo
}
