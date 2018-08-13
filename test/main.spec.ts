import * as main from '@app/js/main';
import * as util from '@app/js/util';
import * as lib1 from '@app/lib/lib1';

console.log('main.settings: ' + main.mainSettings.foo);
console.log('util.settings: ' + main.utilSettings.boo);

if(util.isNotShadyElement()) {
    less.refresh();
}

if(util.isLessEnable()) {
    console.log('less: enable!');

    const comp = main.getComponent();
    comp.ready = true;

    console.log(comp);
}

const mainSettings: main.MainConfig = {
    foo: true
};
const utilSettings: util.UtilConfig = {
    boo: 'test'
};

if(mainSettings.foo) {
    console.log('main setting: ' + mainSettings.foo);
}

if(utilSettings.boo === 'test') {
    console.log('util setting: ' + utilSettings.boo);
}

if(window.isUnitTesting) {
    console.log('unit testing!');
}

const x: HTMLElement = null;
if(x.__shady) {
    console.log('has shady dom');
}

console.log(lib1.defaultSettings.boo);