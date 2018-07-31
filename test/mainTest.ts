import { add, defaultSettings } from "../src/utils";

export function testAdd(){
    const result = add(5, 4);

    return result;
}

export function getDefaultSetting() {
    return defaultSettings;
}