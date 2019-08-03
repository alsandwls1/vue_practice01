import * as cm from '@/js/common.js'

function dateFormat(val, strFormat) {
    // TODO: val 검증
    var returnVal
    var dateVal = new Date(val)

    var sYear = dateVal.getFullYear()
    var sMon = dateVal.getMonth() + 1
    var sDay = dateVal.getDate()

    if(cm.isEmpty(strFormat)) {
        strFormat = ''
    }

    returnVal = [sYear, sMon, sDay].join(strFormat)

    return returnVal
}

export {
    dateFormat
}