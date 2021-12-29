export function sortByCategory(array: []){

}
export const isUserLoggedIn = () =>{
return false;

}

export const numberOfNights = (date1:Date, date2:Date) =>{
    let timeDiff = Math.abs(date2.getTime() - date1.getTime());
    let numberOfNights = Math.ceil(timeDiff / (1000 * 3600 * 24))
    return numberOfNights
}
