//! dayjs locale configuration

export default {
  name: 'th',
  months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
  monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
  weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
  weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
  weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'วันdddd D MMMM YYYY HH:mm'
  },
  calendar: {
    sameDay: '[วันนี้ เวลา] LT',
    nextDay: '[พรุ่งนี้ เวลา] LT',
    nextWeek: 'dddd[หน้า เวลา] LT',
    lastDay: '[เมื่อวานนี้ เวลา] LT',
    lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
    sameElse: 'L'
  },
  relativeTime: {
    future: 'อีก %s',
    past: '%sที่แล้ว',
    s: 'ไม่กี่วินาที',
    ss: '%d วินาที',
    m: '1 นาที',
    mm: '%d นาที',
    h: '1 ชั่วโมง',
    hh: '%d ชั่วโมง',
    d: '1 วัน',
    dd: '%d วัน',
    M: '1 เดือน',
    MM: '%d เดือน',
    y: '1 ปี',
    yy: '%d ปี'
  },
  dayOfMonthOrdinalParse: /\d{1,2}/,
  ordinal: function(number) {
    return number
  },
  week: {
    dow: 0, // Sunday is the first day of the week
    doy: 6  // The week that contains Jan 1st is the first week of the year
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'วันdddd D MMMM YYYY HH:mm'
  }
} 