//! dayjs locale configuration

var symbolMap = {
    '1': '۱',
    '2': '۲',
    '3': '۳',
    '4': '۴',
    '5': '۵',
    '6': '۶',
    '7': '۷',
    '8': '۸',
    '9': '۹',
    '0': '۰'
  },
  numberMap = {
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
    '۰': '0'
  }

export default {
  name: 'fa',
  weekdays: 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
  weekdaysShort: 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
  weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
  weekdaysParseExact: true,
  months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
  monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm'
  },
  meridiemParse: /قبل از ظهر|بعد از ظهر/,
  isPM: function(input) {
    return /بعد از ظهر/.test(input)
  },
  meridiem: function(hour) {
    if (hour < 12) {
      return 'قبل از ظهر'
    } else {
      return 'بعد از ظهر'
    }
  },
  calendar: {
    sameDay: '[امروز ساعت] LT',
    nextDay: '[فردا ساعت] LT',
    nextWeek: 'dddd [ساعت] LT',
    lastDay: '[دیروز ساعت] LT',
    lastWeek: 'dddd [پیش] [ساعت] LT',
    sameElse: 'L'
  },
  relativeTime: {
    future: 'در %s',
    past: '%s پیش',
    s: 'چند ثانیه',
    ss: '%d ثانیه',
    m: 'یک دقیقه',
    mm: '%d دقیقه',
    h: 'یک ساعت',
    hh: '%d ساعت',
    d: 'یک روز',
    dd: '%d روز',
    M: 'یک ماه',
    MM: '%d ماه',
    y: 'یک سال',
    yy: '%d سال'
  },
  dayOfMonthOrdinalParse: /\d{1,2}م/,
  ordinal: function(number) {
    return number + 'م'
  },
  week: {
    dow: 6, // Saturday is the first day of the week
    doy: 12 // The week that contains Jan 1st is the first week of the year
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm'
  }
} 