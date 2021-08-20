export interface IReactNativePluginConfig {
    disableDeviceCollection?: boolean;
    disableExceptionCollection?: boolean;
}

export interface IDeviceInfo {
    getDeviceType: Function;
    getUniqueId: Function;
    getModel: Function;
}