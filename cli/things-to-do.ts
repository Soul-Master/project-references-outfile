import { formatInches } from '../converter/length';
import { cToF } from '../converter/temperature';

export function showTempConversion() {
    console.log(`The boiling point of water in F is ${cToF(100)}`);
}

export function showLengthConversion() {
    var i = 35;
    var i = 10;
    console.log(`${i} inches formats as ${formatInches(i)}"`);
}