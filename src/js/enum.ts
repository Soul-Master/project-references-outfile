export enum KeyCode {
    Backspace = 8,
    Tab = 9,
    Enter = 13,
    Escape = 27,
    Space = 32,
    PageUp = 33,
    PageDown = 34,
    End = 35,
    Home = 36,
    ArrowLeft = 37,
    ArrowUp = 38,
    ArrowRight = 39,
    ArrowDown = 40,
    Delete = 46,
    R = 82,
    NumpadMultiply = 106,
    NumpadAdd = 107,
    NumpadEnter = 108,
    NumpadSubtract = 109,
    NumpadDecimal = 110,
    NumpadDivide = 111,
    F5 = 116,
    F6 = 117,
    EqualOrAddSign = 187,
    Comma = 188,
    DashOrSubtractSign = 189,
    Period = 190
}

export enum PredefinedChannel {
    ArchiveRequest = '/navigation/archive_request',
    ArchiveResponse = '/navigation/archive_response',
    ContainerRequest = '/container_actions',
    ContainerEvent = '/container_events',
    NewsPrefix = '/News/',
    QuickTip = '/desktop/quicktip',
    QuickTipEvent = '/desktop/quicktip/events',
    HighlightLink = '/!layout/highlightApp',
    UnhighlightLink = '/!layout/unhighlightApp',
    MclRequest = '/!context/inbound',
    MclResponse = '/!context/outbound',
    MyEikonRequest = '/myeikon',
    MyEikonOpenPrefix = '/layout/myeikon/openmyeikon/',
    MyEikonSavePrefix = '/layout/myeikon/savedsuccessful/',
    MyEikonLoadFilePrefix = '/layout/myeikon/openfilecontent/',
    MyFilesPublish = '/cloud/up'
}

export enum SupportedOS {
    macOS = 'mac',
    Windows = 'win',
    Linux = 'linux'
}

export enum ContainerShortcut {
    maximizeLayout = 'Shortcut_MaximizeLayout',
    closeWindow = 'Shortcut_CloseWindow',
    closeTab = 'Shortcut_CloseTab'
}