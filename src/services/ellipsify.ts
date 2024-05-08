export default function ellipsify (str:string , x:number) {
    if (str.length > x) {
        return (str.substring(0, x) + "...");
    }
    else {
        return str;
    }
}
