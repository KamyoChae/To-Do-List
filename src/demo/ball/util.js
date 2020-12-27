export function getRandom(min, max){
    return Math.ceil(Math.random() * (max+1 - min) +min)
}