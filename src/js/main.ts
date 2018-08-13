/// <reference types="less" />

import { UtilConfig } from "./util";

export interface MainConfig {
    foo: boolean;
}

export const mainSettings: MainConfig = {
    foo: false
};

export const utilSettings: UtilConfig = {
    boo: 'test'
};

export function getComponent(): WebComponentsApi{
    return {
        ready: true
    };
}

less.refresh();