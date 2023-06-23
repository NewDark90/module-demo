import { pi } from "./pi.js";


export function addPiDays(date)
{
    date.setDate(date.getDate() + pi);
    return date;
}
