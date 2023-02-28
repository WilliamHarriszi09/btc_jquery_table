$(document).ready(() => {
    var json_array = [{
        coin_type: "BTC",
        data: [
            {
                start: "2023-4-4",
                end: "2023-7-1",
                type: 1
            },{
                start: "2023-4-28",
                end: "2023-8-28",
                type: 0
            }
        ]
    },{
        coin_type: "ETH",
        data: [
            {
                start: "2023-8-20",
                end: "2023-10-15",
                type: 0
            },{
                start: "2023-2-1",
                end: "2023-5-28",
                type: 1
            }
        ]
    },{
        coin_type: "XPR",
        data: [
            {
                start: "2023-4-4",
                end: "2023-7-1",
                type: 1
            },{
                start: "2023-4-28",
                end: "2023-8-28",
                type: 0
            },{
                start: "2023-11-28",
                end: "2023-12-28",
                type: 1
            }
        ]
    },{
        coin_type: "RNB",
        data: [
            {
                start: "2023-8-20",
                end: "2023-10-15",
                type: 0
            },{
                start: "2023-2-1",
                end: "2023-5-28",
                type: 1
            }
        ]
    },{
        coin_type: "ADA",
        data: [
            {
                start: "2023-4-4",
                end: "2023-7-1",
                type: 1
            },{
                start: "2023-4-28",
                end: "2023-8-28",
                type: 0
            }
        ]
    },{
        coin_type: "MATIC",
        data: [
            {
                start: "2023-8-20",
                end: "2023-10-15",
                type: 0
            },{
                start: "2023-2-1",
                end: "2023-5-28",
                type: 1
            }
        ]
    }]

    // $("tbody").remove();

    json_array.forEach(json_ele => {
        var str = "";
        for (let k = 0; k < json_ele.data.length; k++) {
            str += '<tr class="row100';
            if (k+1 == json_ele.data.length) {
                str += ' tr-underline';
            }
            str += '">';
            str += '<td class="column100 column1" data-column="column1">' + (k === 0 ? json_ele.coin_type : "") + '</td>';
            
            str += '<td class="column100 column2" data-column="column2"></td>'; 
            str += '<td class="column100 column3" data-column="column3"></td>';
            str += '<td class="column100 column4" data-column="column4"></td>';
            str += '<td class="column100 column5" data-column="column5"></td>';// var startDate = json_ele.start.split("-");
            
            var sDate = json_ele.data[k].start.split("-");
            var eDate = json_ele.data[k].end.split("-");
            var sMonth = Number(sDate[1]);
            var eMonth = Number(eDate[1]);

            sWeekNum = getWeekOfMonth(new Date(json_ele.data[k].start));
            eWeekNum = getWeekOfMonth(new Date(json_ele.data[k].end));

            var fM = false;
            console.log(sMonth, sWeekNum, eMonth, eWeekNum);
            for (let i = 1; i <= 12; i++) {
                str += '<td class="column100 column' + 6 + i + '" data-column="column6"><div class="td-row">';
                
                for (let j = 1; j <= 4; j++) {
                    str += '<div class="td-md-3 ';
                    if (i === sMonth && sWeekNum === j) 
                        fM = true;
                    if (fM) 
                        str += 'tp-' + json_ele.data[k].type;
                    if (i === eMonth && eWeekNum === j) 
                        fM = false;
                    str += '"></div>';
                }
                str += '</div></td>'
            }
            str += '</tr>';
        }
        
        $("tbody").append(str);
    });

    // $(" ")

    //get week number of date 
    function getWeekOfMonth(date) {
        let adjustedDate = date.getDate()+date.getDay();
        let prefixes = ['0', '1', '2', '3', '4', '5'];
        return parseInt(prefixes[0 | adjustedDate / 7])+1 === 5 ? 4 : parseInt(prefixes[0 | adjustedDate / 7]) + 1;
    }
});


