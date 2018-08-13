interface WebComponentsApi {
    ready: boolean;
}

interface Window {
    WebComponents: WebComponentsApi;
}

interface ShadyDomApi {
    assignedNodes: NodeListOf<HTMLElement>;
}

interface HTMLElement {
    __shady?: ShadyDomApi;
}

declare const WebComponents: WebComponentsApi;