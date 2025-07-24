//! dayjs locale configuration

export default {
  name: 'ka',
  weekdays: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
  weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
  weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
  months: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
  monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm'
  },
  calendar: {
    sameDay: '[დღეს] LT',
    nextDay: '[ხვალ] LT',
    nextWeek: '[შემდეგი] dddd LT',
    lastDay: '[გუშინ] LT',
    lastWeek: '[წინა] dddd LT',
    sameElse: 'L'
  },
  relativeTime: {
    future: '%s-ში',
    past: '%s-ის წინ',
    s: 'რამდენიმე წამი',
    ss: '%d წამი',
    m: 'წუთი',
    mm: '%d წუთი',
    h: 'საათი',
    hh: '%d საათი',
    d: 'დღე',
    dd: '%d დღე',
    M: 'თვე',
    MM: '%d თვე',
    y: 'წელი',
    yy: '%d წელი'
  },
  dayOfMonthOrdinalParse: /\d{1,2}-(ი|ე|მე)/,
  ordinal: function(number) {
    if (number === 0) {
      return number + '-ე'
    }
    if (number === 1) {
      return number + '-ლი'
    }
    if (number < 20 || number <= 100 && number % 20 === 0 || number > 100) {
      return number + '-ე'
    }
    return number + '-ე'
  },
  week: {
    dow: 1, // Monday is the first day of the week
    doy: 7  // The week that contains Jan 1st is the first week of the year
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