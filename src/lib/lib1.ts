import { UtilConfig } from '../js/util';

export interface LibConfig extends UtilConfig {
    bar: string;
}

export const defaultSettings: UtilConfig = {
    boo: 'test'
};
export const settings: LibConfig = {
    boo: 'test',
    bar: 'test2'
};