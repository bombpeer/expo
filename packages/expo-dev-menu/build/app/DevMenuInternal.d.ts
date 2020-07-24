import { EventSubscription } from 'react-native';
import { ColorSchemeName } from 'react-native-appearance';
export declare enum DevMenuItemEnum {
    ACTION = 1,
    GROUP = 2
}
declare type DevMenuItemBaseType<T extends DevMenuItemEnum> = {
    type: T;
    isAvailable: boolean;
    isEnabled: boolean;
    label?: string | null;
    detail?: string | null;
    glyphName?: string | null;
};
export declare type DevMenuItemActionType = DevMenuItemBaseType<DevMenuItemEnum.ACTION> & {
    actionId: string;
};
export declare type DevMenuItemGroupType = DevMenuItemBaseType<DevMenuItemEnum.GROUP> & {
    groupName: string | null;
    items: DevMenuItemAnyType[];
};
export declare type DevMenuItemAnyType = DevMenuItemActionType | DevMenuItemGroupType;
export declare type DevMenuSettingsType = {
    preferredAppearance?: ColorSchemeName;
    motionGestureEnabled?: boolean;
    touchGestureEnabled?: boolean;
};
export declare function getSettingsAsync(): Promise<DevMenuSettingsType>;
export declare function updateSettingsAsync(): Promise<void>;
export declare function dispatchActionAsync(actionId: string): Promise<void>;
export declare function hideMenu(): void;
export declare function setOnboardingFinished(finished: boolean): void;
export declare function subscribeToCloseEvents(listener: () => void): EventSubscription;
export {};
