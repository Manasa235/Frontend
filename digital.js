function digitalclock()
{
    var currentdate= new Date()
    //console.log(currentdate)
    var day=currentdate.getDay()
    switch(day){
        case 0:day='SUNDAY';
        break;
        case 1:day='MONDAY';
        break;
        case 2:day='TUESDAY';
        break;
        case 3:day='WEDENSDAY';
        break;
        case 4:day='THURSDAY';
        break;
        case 5:day='FRIDAY';
        break;
        case 6:day='SATURDAY';
        break;
        case 7:day='SUNDAY';
        break;

    }
     var dd=currentdate.getDate()
     var mon=currentdate.getMonth()
     switch(mon){
        case 0:mon='JAN';
        break;
        case 1:mon='FEB';
        break;
        case 2:mon='MAR';
        break;
        case 3:mon='APR';
        break;
        case 4:mon='MAY';
        break;
        case 5:mon='JUN';
        break;
        case 6:mon='JUL';
        break;
        case 7:mon='AUG';
        break;
        case 8:mon='SEP';
        break;
        case 9:mon='OCT';
        break;
        case 10:mon='NOV';
        break;
        case 11:mon='DEC';
        break;
     }
     var yyyy=currentdate.getFullYear()

     var hh=currentdate.getHours()
     if(hh<10)
     {
        hh='0'+hh
     }
     

     var AMorPM;
     if(hh>12 && hh<23){
        AMorPM='PM'
     }
     else{
        AMorPM='Am'
     }
     var mm=currentdate.getMinutes()
     if(mm<10)
     {
        mm='0'+mm
     }
     var ss=currentdate.getSeconds()
     if(ss<10)
     {
        ss='0'+ss
     }


     var dayuf=document.getElementById('day');
     dayuf.innerHTML=day;
     var fulldateuf=document.getElementById('date');
     fulldateuf.innerHTML=`${dd}-${mon}-${yyyy}`
     var fulltimeuf=document.getElementById('time');
     fulltimeuf.innerHTML=`${hh} :${mm} :${ss} ${AMorPM}`

     var t=setTimeout(function(){digitalclock()},1000);
}
digitalclock()


