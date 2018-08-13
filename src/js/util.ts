export interface UtilConfig {
    boo: string;
}

export function isNotShadyElement(): boolean{
    const el = document.body;
    
    return el.__shady === null;
}

export function isLessEnable(){
    return less !== null;
}