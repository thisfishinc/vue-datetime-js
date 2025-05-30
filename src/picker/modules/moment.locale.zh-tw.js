//! moment.js locale configuration

export default {
  months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
  monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
  weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
  weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
  weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'YYYY/MM/DD',
    LL: 'YYYY年MM月DD日',
    LLL: 'YYYY年MM月DD日 HH:mm',
    LLLL: 'YYYY年MM月DD日 dddd HH:mm'
  },
  calendar: {
    sameDay: '[今天] LT',
    nextDay: '[明天] LT',
    nextWeek: 'dddd LT',
    lastDay: '[昨天] LT',
    lastWeek: 'dddd LT',
    sameElse: 'L'
  },
  relativeTime: {
    future: '%s後',
    past: '%s前',
    s: '幾秒',
    ss: '%d秒',
    m: '1分鐘',
    mm: '%d分鐘',
    h: '1小時',
    hh: '%d小時',
    d: '1天',
    dd: '%d天',
    M: '1個月',
    MM: '%d個月',
    y: '1年',
    yy: '%d年'
  },
  dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
  ordinal: function(number, period) {
    switch (period) {
      case 'd':
      case 'D':
      case 'DDD':
        return number + '日';
      case 'M':
        return number + '月';
      case 'w':
      case 'W':
        return number + '週';
      default:
        return number;
    }
  },
  week: {
    dow: 1, // Monday is the first day of the week
    doy: 4  // The week that contains Jan 4th is the first week of the year
  }
} 