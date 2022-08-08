//! moment.js locale configuration

export default {
  months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split(
    '_'
  ),
  monthsShort: 'มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา'.split('_'),
  weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split(
    '_'
  ),
  weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
  weekdaysMin: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm'
  },
  calendar: {
    sameDay: '[วันนี้..ตอน] LT',
    nextDay: '[พรุ่งนี้ ….ตอน] LT',
    nextWeek: 'dddd [ตอน] LT',
    lastDay: '[เมื่อวาน…  ตอน] LT',
    lastWeek: '[ครั้งสุดท้าย…] dddd [ตอน] LT',
    sameElse: 'L'
  },
  relativeTime: {
    future: 'ในอีก %s',
    past: '%s ที่แล้ว',
    s: 'ไม่กี่วินาที',
    ss: '%d วินาที',
    m: 'นาที',
    mm: '%d นาที',
    h: 'ชั่วโมง',
    hh: '%d ชั่วโมง',
    d: 'วัน',
    dd: '%d วัน',
    M: 'เดือน',
    MM: '%d เดือน',
    y: 'ปี',
    yy: '%d ปี'
  },
  dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
  ordinal: function(number) {
    var b = number % 10,
      output =
        ~~((number % 100) / 10) === 1
          ? 'th'
          : b === 1
          ? 'st'
          : b === 2
          ? 'nd'
          : b === 3
          ? 'rd'
          : 'th'
    return number + output
  },
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  }
}
