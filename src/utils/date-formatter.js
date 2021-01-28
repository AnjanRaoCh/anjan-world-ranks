const moment = require("moment");

export default {
  dateFormat(type,date){
      let dateStr = date;
      switch(type){
          case "FORMAT-1":
            // dateStr = moment(date).format("MMM Do YYYY, h:mm:ss a");
            var gmtDateTime = moment.utc(dateStr, "YYYY-MM-DD HH")
                dateStr = gmtDateTime.local().format('YYYY-MMM-DD h:mm A');
          break;
          case "FORMAT-2":
            dateStr = moment(date).format("MMM Do YYYY");
          break;
          case "FORMAT-3":
            dateStr = moment(date).format("MMM Do YYYY");
          break;
      }
      return dateStr;
  },
  istTimeFormat(type,data){
    let dateStr = data;
    switch(type){
        case "ONE":
          var gmtDateTime = moment.utc(dateStr, "YYYY-MM-DD HH")
          var local = gmtDateTime.local().format('YYYY-MMM-DD h:mm A');
        break;
    }
    return local;
  }
}