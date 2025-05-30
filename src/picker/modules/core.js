/*global getYear*/
/*eslint no-undef: ["error", { "typeof": true }] */

import moment from 'moment'
import jmoment from 'moment-jalaali'
import imoment from 'moment-hijri'

import fa from './moment.locale.fa'
import fr from './moment.locale.fr'
import ka from './moment.locale.ka'
import arSa from './moment.locale.ar-sa'
import th from './moment.locale.th'
import ja from './moment.locale.ja'
import utils from './utils'
// jmoment.updateLocale('en', {
//   weekdaysMin: 'S_M_T_W_T_F_S'.split('_')
// })

// Register Gregorian calendar locales
moment.updateLocale('th', th)
moment.updateLocale('ja', ja)

// Debug: Check available locales
// console.log('Available moment locales:', moment.locales())
// console.log('Test moment Japanese:', moment().locale('ja').format('MMMM dddd'))
// console.log('Test moment Thai:', moment().locale('th').format('MMMM dddd'))

// Register Jalali calendar locales
jmoment.updateLocale('fa', fa)
jmoment.updateLocale('fr', fr)
jmoment.updateLocale('ka', ka)
jmoment.updateLocale('ja', ja)

// Debug: Check available jMoment locales
// console.log('Available jMoment locales:', jmoment.locales())
// console.log('Test jMoment Japanese:', jmoment().locale('ja').format('MMMM dddd'))
// console.log('Test jMoment French:', jmoment().locale('fr').format('MMMM dddd'))

// Register Hijri calendar locale
imoment.updateLocale('ar-sa', arSa)
imoment.updateLocale('ja', ja)

// Debug: Check available iMoment locales
// console.log('Available iMoment locales:', imoment.locales())
// console.log('Test iMoment Japanese:', imoment().locale('ja').format('MMMM dddd'))

// jmoment.loadPersian({ dialect: 'persian-modern' })
jmoment.daysInMonth = function(year, month) {
  return jmoment({ year, month }).daysInMonth()
}
imoment.daysInMonth = function(year, month) {
  return imoment({ year, month }).daysInMonth()
}

//=====================================
//           CONFIG
//=====================================
const localMethods = {
  jalali: {
    daysInMonth: 'jDaysInMonth',
    year: 'jYear',
    month: 'jMonth',
    date: 'jDate',
    day: 'day'
  },
  gregory: {
    daysInMonth: 'daysInMonth',
    year: 'year',
    month: 'month',
    date: 'date',
    day: 'day'
  },
  hijri: {
    daysInMonth: 'iDaysInMonth',
    year: 'iYear',
    month: 'iMonth',
    date: 'iDate',
    day: 'day'
  },
  japanese: {
    daysInMonth: 'daysInMonth',
    year: 'year',
    month: 'month',
    date: 'date',
    day: 'day'
  },
  thai: {
    daysInMonth: 'daysInMonth',
    year: 'year',
    month: 'month',
    date: 'date',
    day: 'day'
  }
}
const localesConfig = {
  gregory: {
    dow: 0,
    dir: 'ltr',
    displayFormat: null,
    lang: {
      label: 'Calendar',
      submit: 'Select',
      cancel: 'Cancel',
      now: 'Now',
      nextMonth: 'Next month',
      prevMonth: 'Previous month'
    }
  },
  jalali: {
    dow: 6,
    dir: 'rtl',
    displayFormat: null,
    lang: {
      label: 'تقویم',
      submit: 'انتخاب',
      cancel: 'انصراف',
      now: 'اکنون',
      nextMonth: 'ماه بعد',
      prevMonth: 'ماه قبل'
    }
  },
  hijri: {
    dow: 6,
    dir: 'rtl',
    displayFormat: null,
    lang: {
      label: 'التقويم',
      submit: 'اختيار',
      cancel: 'إلغاء',
      now: 'الآن',
      nextMonth: 'الشهر القادم',
      prevMonth: 'الشهر السابق'
    }
  },
  japanese: {
    dow: 1,
    dir: 'ltr',
    displayFormat: 'YYYY年M月D日',
    lang: {
      label: '和暦',
      submit: '選択',
      cancel: 'キャンセル',
      now: '今',
      nextMonth: '翌月',
      prevMonth: '前月',
      months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      weekdays: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
      weekdaysShort: ['日', '月', '火', '水', '木', '金', '土']
    }
  },
  thai: {
    dow: 0,
    dir: 'ltr',
    displayFormat: null,
    lang: {
      label: 'ปฏิทิน',
      submit: 'เลือก',
      cancel: 'ยกเลิก',
      now: 'ตอนนี้',
      nextMonth: 'เดือนถัดไป',
      prevMonth: 'เดือนก่อน',
      months: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
      weekdays: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'],
      weekdaysShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
    }
  },
  french: {
    dow: 1,
    dir: 'ltr',
    displayFormat: null,
    lang: {
      label: 'Calendrier',
      submit: 'Sélectionner',
      cancel: 'Annuler',
      now: 'Maintenant',
      nextMonth: 'Mois suivant',
      prevMonth: 'Mois précédent',
      months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
      weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
      weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_')
    }
  },
  persian: {
    dow: 6,
    dir: 'rtl',
    displayFormat: null,
    lang: {
      label: 'تقویم',
      submit: 'انتخاب',
      cancel: 'انصراف',
      now: 'اکنون',
      nextMonth: 'ماه بعد',
      prevMonth: 'ماه قبل',
      months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
      weekdays: 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
      weekdaysShort: 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_')
    }
  },
  arabic: {
    dow: 0,
    dir: 'rtl',
    displayFormat: null,
    lang: {
      label: 'التقويم',
      submit: 'اختيار',
      cancel: 'إلغاء',
      now: 'الآن',
      nextMonth: 'الشهر القادم',
      prevMonth: 'الشهر السابق',
      months: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
      weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
      weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_')
    }
  }
}

const Core = function(defaultCalendarName, defaultLocaleName) {
  'use strict'

  console.log('Core initialization:', {
    defaultCalendarName,
    defaultLocaleName,
    availableLocales: moment.locales()
  });

  // Choose the correct moment instance based on calendar type
  let momentInstance = defaultCalendarName === 'hijri' ? imoment : 
                      defaultCalendarName === 'jalali' ? jmoment : 
                      moment;

  // Set the initial locale and configuration
  momentInstance.locale(defaultLocaleName)
  const initialConfig = localesConfig[defaultCalendarName] || localesConfig.gregory
  
  console.log('Initial locale setup:', {
    momentInstance: momentInstance.locale(),
    config: initialConfig
  });

  // Update locale configuration with months and weekdays
  if (initialConfig.lang.months) {
    // First, ensure we're using the correct locale
    momentInstance.locale(defaultLocaleName)
    
    // Then update the locale configuration
    momentInstance.updateLocale(defaultLocaleName, {
      months: initialConfig.lang.months,
      weekdays: initialConfig.lang.weekdays,
      weekdaysShort: initialConfig.lang.weekdaysShort,
      longDateFormat: initialConfig.lang.longDateFormat || {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY/MM/DD',
        LL: 'YYYY年M月D日',
        LLL: 'YYYY年M月D日 HH:mm',
        LLLL: 'YYYY年M月D日 dddd HH:mm'
      }
    })

    // Force the locale to be set again after updating
    momentInstance.locale(defaultLocaleName)
  }

  const Instance = {
    moment: function() {
      let date = momentInstance.apply(null, arguments)
      // Ensure locale is set for the date instance
      date.locale(defaultLocaleName)
      return date
    },
    calendar: defaultCalendarName,
    locale: { name: defaultLocaleName, config: initialConfig },
    localesConfig: {},
    setLocalesConfig: null,
    changeLocale: null,
    getWeekArray: null,
    getYearsList: null,
    getMonthsList: null
  }

  //=====================================
  //           METHODS
  //=====================================
  let xDaysInMonth = function(year, month) {
    let date = momentInstance({ year, month })
    date.locale(defaultLocaleName)
    return date.daysInMonth();
  };

  Instance.changeLocale = function changeLocale(
    localeCalendar = 'gregory',
    localeName = 'en',
    options = {}
  ) {
    let calendar = this.calendar
    let locale = this.locale
    let config = JSON.parse(
      JSON.stringify(localesConfig[localeCalendar] || localesConfig.gregory)
    )

    let methods = localMethods[localeCalendar] || localMethods.gregory

    options = options[localeCalendar] || {}
    locale.name = localeName
    locale.config = utils.extend(true, config, options)

    // Choose the correct moment instance based on calendar type
    momentInstance = calendar === 'hijri' ? imoment :
                    calendar === 'jalali' ? jmoment :
                    moment;
    
    // Set locale for the moment instance and update its configuration
    momentInstance.locale(localeName)
    
    // Debug: Log the locale configuration
    // console.log('Changing locale:', {
    //   calendar: localeCalendar,
    //   locale: localeName,
    //   momentLocale: momentInstance.locale(),
    //   months: momentInstance.localeData().months(),
    //   weekdays: momentInstance.localeData().weekdays(),
    //   uiText: config.lang
    // });
    
    // Update moment instance with custom locale configuration
    if (config.lang.months) {
      // First, ensure we're using the correct locale
      momentInstance.locale(localeName)
      
      // Then update the locale configuration
      momentInstance.updateLocale(localeName, {
        months: config.lang.months,
        weekdays: config.lang.weekdays,
        weekdaysShort: config.lang.weekdaysShort,
        longDateFormat: config.lang.longDateFormat || {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY/MM/DD',
          LL: 'YYYY年M月D日',
          LLL: 'YYYY年M月D日 HH:mm',
          LLLL: 'YYYY年M月D日 dddd HH:mm'
        }
      })

      // Force the locale to be set again after updating
      momentInstance.locale(localeName)
      
      // Debug: Verify the locale was updated
      // console.log('Updated locale config:', {
      //   months: momentInstance.localeData().months(),
      //   weekdays: momentInstance.localeData().weekdays(),
      //   uiText: config.lang
      // });
    }
    
    // Ensure the UI text is updated in the locale config
    if (config.lang) {
      locale.config.lang = {
        ...locale.config.lang,
        ...config.lang
      }
    }
    
    // Update the locale configuration with the correct calendar type
    if (localeCalendar === 'gregory') {
      // Map of locale names to their config keys
      const localeConfigMap = {
        'ja': 'japanese',
        'th': 'thai',
        'fr': 'french',
        'fa': 'persian',
        'ar-sa': 'arabic'
      };

      // Get the config key for the current locale
      const configKey = localeConfigMap[localeName];
      
      if (configKey && localesConfig[configKey]) {
        // Use the specific locale configuration
        locale.config = {
          ...locale.config,
          ...localesConfig[configKey]
        };
      } else {
        // For other languages, find the matching locale config
        const localeConfig = Object.entries(localesConfig).find(([key, value]) => {
          // Check if this config has the same locale name
          return value.lang && value.lang.months && 
                 (key === localeName || key === `${localeName}-sa`);
        });

        if (localeConfig) {
          // Merge the found locale configuration
          locale.config = {
            ...locale.config,
            ...localeConfig[1]
          };
        }
      }
      
      // Debug: Log the merged locale configuration
      // console.log('Merged locale config:', {
      //   locale: localeName,
      //   calendar: localeCalendar,
      //   configKey: configKey,
      //   mergedConfig: locale.config
      // });
    }
    
    xDaysInMonth = function(year, month) {
      let date = momentInstance({ year, month })
      date.locale(localeName)
      return date.daysInMonth();
    };

    function addMethods(date) {
      if (date === undefined) return

      const nameInLocale = name => {
        if (calendar === 'hijri') name = name.replace(/j/g, 'i')
        else if (calendar !== 'jalali') name = name.replace(/j/g, '')

        return name
      }

      date.xYear = momentInstance.fn[methods.year]
      date.xMonth = momentInstance.fn[methods.month]
      date.xDate = momentInstance.fn[methods.date]

      date.xFormat = function(format) {
        return this.format(nameInLocale(format))
      }
      date.xStartOf = function(value) {
        return this.startOf(methods[value])
      }
      date.xEndOf = function(value) {
        return this.endOf(methods[value])
      }
      date.xAdd = function(amount, key) {
        return this.add(amount, methods[key])
      }
      date.clone = function() {
        return Instance.moment(this.toDate())
      }
    }

    this.moment = function() {
      let date = momentInstance.apply(null, arguments)
      date.locale(locale.name)
      addMethods(date)
      return date
    }
  }

  Instance.setLocalesConfig = function(config) {
    let defaults = JSON.parse(JSON.stringify(localesConfig))
    this.localesConfig = utils.extend(true, defaults, config)
  }

  Instance.getWeekArray = function getWeekArray(d) {
    function addWeek(weekArray, week) {
      let emptyDays = 7 - week.length

      for (let i = 0; i < emptyDays; ++i) {
        week[weekArray.length ? 'push' : 'unshift'](null)
      }

      weekArray.push(week)
    }

    let moment = this.moment;
    let daysInMonth = xDaysInMonth(moment(d).xYear(), moment(d).xMonth())

    let dayArray = []
    for (let i = 1; i <= daysInMonth; i++) {
      dayArray.push(
        moment(d)
          .xDate(i)
          .toDate()
      )
    }

    let weekArray = []
    let week = []

    dayArray.forEach(day => {
      if (week.length > 0 && day.getDay() === this.locale.config.dow) {
        addWeek(weekArray, week)
        week = []
      }

      week.push(day)

      if (dayArray.indexOf(day) === dayArray.length - 1) {
        addWeek(weekArray, week)
      }
    })

    return weekArray
  }

  Instance.getYearsList = function getYearsList(from, to, range = false, date) {
    let years = []
    if (range) {
      let year = getYear(date)
      from = year - range
      to = year + range
    }
    for (let i = from; i <= to; i++) {
      years.push(i)
    }
    return years
  }

  Instance.getMonthsList = function getMonthsList(minDate, maxDate, date) {
    let list = [],
      min = minDate
        ? minDate
            .clone()
            .xStartOf('month')
            .unix()
        : -Infinity,
      max = maxDate
        ? maxDate
            .clone()
            .xEndOf('month')
            .unix()
        : Infinity
    for (let i = 0; i < 12; i++) {
      let month = date.clone().xMonth(i)
      let start = month
        .clone()
        .xStartOf('month')
        .unix()
      let end = month
        .clone()
        .xEndOf('month')
        .unix()
      month.disabled = start < min || end > max
      list.push(month)
    }
    return list
  }

  Instance.changeLocale(defaultCalendarName, defaultLocaleName)

  return Instance
}

export default Core

export { localesConfig }
