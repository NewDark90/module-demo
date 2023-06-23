import { pi } from "./pi.js";


export function getPiStr(significantDigits)
{
    return pi.toFixed(significantDigits);
}
