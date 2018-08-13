import { SupportedOS } from '../enum';

export function getCurrent() {
    const platform = navigator.platform.toLowerCase();

    if (platform.indexOf('mac') >= 0) {
        return SupportedOS.macOS;
    }
    if (platform.indexOf('win') >= 0) {
        return SupportedOS.Windows;
    }

    return SupportedOS.Linux;
}