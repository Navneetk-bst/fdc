export function ConvertDateFormat(ticks){
    //Return Date in format MMM YYYY, dd (oct 2019 , 28)
    var date = new Date(ticks) ; 
    //toDateString Return Date in format (Day Month Date Year)
    var dateStr = date.toDateString().split(' ') ; 
    var result = dateStr[1] + ' ' + dateStr[3] + ',' + dateStr[2] ; 
    return result ; 
    
}
export function NumberOfDaysDiff(date1 , date2){
    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    //Time difference
    const timeDiff = Math.abs(GetTimeDiff(date1 , date2));

    //Convert timeDiff into DayDiff
    const diffInDays = Math.floor(timeDiff / oneDay);

    return diffInDays;
    
    
}

export function GetTimeDiff(date1 , date2){
    var dateUTC1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    var dateUTC2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

    return dateUTC1 - dateUTC2 ;
}