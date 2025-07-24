/*global getYear*/
/*eslint no-undef: ["error", { "typeof": true }] */

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import localeData from 'dayjs/plugin/localeData'
import updateLocale from 'dayjs/plugin/updateLocale'

// Extend dayjs with plugins
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(localeData)
dayjs.extend(updateLocale)

// Import locale files
import fa from './dayjs.locale.fa'
import fr from './dayjs.locale.fr'
import ka from './dayjs.locale.ka'
import arSa from './dayjs.locale.ar-sa'
import th from './dayjs.locale.th'
import ja from './dayjs.locale.ja'
import ko from './dayjs.locale.ko'
import zhCn from './dayjs.locale.zh-cn'
import zhTw from './dayjs.locale.zh-tw'
import utils from './utils'

// Register locales
dayjs.locale('th', th)
dayjs.locale('ja', ja)
dayjs.locale('ko', ko)
dayjs.locale('zh-cn', zhCn)
dayjs.locale('zh-tw', zhTw)

// Register Jalali calendar locales
dayjs.locale('fa', fa)
dayjs.locale('fr', fr)
dayjs.locale('ka', ka)
dayjs.locale('ja', ja)

// Register Hijri calendar locale
dayjs.locale('ar-sa', arSa)
dayjs.locale('ja', ja)

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
  },
  korean: {
    dow: 0,
    dir: 'ltr',
    displayFormat: null,
    lang: {
      label: '달력',
      submit: '선택',
      cancel: '취소',
      now: '지금',
      nextMonth: '다음 달',
      prevMonth: '이전 달',
      months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
      weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
      weekdaysShort: '일_월_화_수_목_금_토'.split('_')
    }
  },
  chinese: {
    dow: 1,
    dir: 'ltr',
    displayFormat: null,
    lang: {
      label: '日历',
      submit: '选择',
      cancel: '取消',
      now: '现在',
      nextMonth: '下个月',
      prevMonth: '上个月',
      months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
      weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
      weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_')
    }
  },
  'chinese-traditional': {
    dow: 1,
    dir: 'ltr',
    displayFormat: null,
    lang: {
      label: '日曆',
      submit: '選擇',
      cancel: '取消',
      now: '現在',
      nextMonth: '下個月',
      prevMonth: '上個月',
      months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
      weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
      weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_')
    }
  }
}

const Core = function(defaultCalendarName, defaultLocaleName) {
  'use strict'



  // Use dayjs for all calendar types since plugins extend the main dayjs object
  let dayjsInstance = dayjs;

  // Set the initial locale and configuration
  dayjsInstance.locale(defaultLocaleName)
  const initialConfig = localesConfig[defaultCalendarName] || localesConfig.gregory
  


  const Instance = {
    moment: function() {
      let date = dayjsInstance.apply(null, arguments)
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
    let date = dayjs().year(year).month(month)
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

    // Use dayjs for all calendar types since plugins extend the main dayjs object
    dayjsInstance = dayjs;
    
    // Set locale for the dayjs instance
    dayjsInstance.locale(localeName)
    
    // Update the locale configuration with the correct calendar type
    if (localeCalendar === 'gregory') {
      // Map of locale names to their config keys
      const localeConfigMap = {
        'ja': 'japanese',
        'th': 'thai',
        'fr': 'french',
        'fa': 'persian',
        'ar-sa': 'arabic',
        'ko': 'korean',
        'zh-cn': 'chinese',
        'zh-tw': 'chinese-traditional'
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
    }
    
    xDaysInMonth = function(year, month) {
      let date = dayjs().year(year).month(month)
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

      // Add custom methods for different calendar types
      if (calendar === 'jalali') {
        // For now, use regular year/month/date for jalali
        // TODO: Implement proper jalali conversion
        date.xYear = function() { return this.year() }
        date.xMonth = function() { return this.month() }
        date.xDate = function() { return this.date() }
        date.xSetYear = function(year) { return this.year(year) }
        date.xSetMonth = function(month) { return this.month(month) }
        date.xSetDate = function(date) { return this.date(date) }
      } else if (calendar === 'hijri') {
        // For now, use regular year/month/date for hijri
        // TODO: Implement proper hijri conversion
        date.xYear = function() { return this.year() }
        date.xMonth = function() { return this.month() }
        date.xDate = function() { return this.date() }
        date.xSetYear = function(year) { return this.year(year) }
        date.xSetMonth = function(month) { return this.month(month) }
        date.xSetDate = function(date) { return this.date(date) }
      } else {
        date.xYear = function() { return this.year() }
        date.xMonth = function() { return this.month() }
        date.xDate = function() { return this.date() }
        date.xSetYear = function(year) { return this.year(year) }
        date.xSetMonth = function(month) { return this.month(month) }
        date.xSetDate = function(date) { return this.date(date) }
      }

      date.xFormat = function(format) {
        return this.format(nameInLocale(format))
      }
      date.xStartOf = function(value) {
        if (calendar === 'jalali') {
          // For now, use regular startOf for jalali
          // TODO: Implement proper jalali startOf
          return this.startOf(value)
        } else if (calendar === 'hijri') {
          // For now, use regular startOf for hijri
          // TODO: Implement proper hijri startOf
          return this.startOf(value)
        } else {
          return this.startOf(value)
        }
      }
      date.xEndOf = function(value) {
        if (calendar === 'jalali') {
          // For now, use regular endOf for jalali
          // TODO: Implement proper jalali endOf
          return this.endOf(value)
        } else if (calendar === 'hijri') {
          // For now, use regular endOf for hijri
          // TODO: Implement proper hijri endOf
          return this.endOf(value)
        } else {
          return this.endOf(value)
        }
      }
      date.xAdd = function(amount, key) {
        if (calendar === 'jalali') {
          // For now, use regular add for jalali
          // TODO: Implement proper jalali add
          return this.add(amount, key)
        } else if (calendar === 'hijri') {
          // For now, use regular add for hijri
          // TODO: Implement proper hijri add
          return this.add(amount, key)
        } else {
          return this.add(amount, key)
        }
      }
      date.clone = function() {
        return Instance.moment(this.toDate())
      }
    }

    this.moment = function() {
      let date = dayjsInstance.apply(null, arguments)
      date.locale(locale.name)
      addMethods(date)
      return date
    }
    
    // Create a wrapper that ensures methods are always attached
    this.createDate = function() {
      let date = dayjsInstance.apply(null, arguments)
      date.locale(locale.name)
      addMethods(date)
      return date
    }
  }

  Instance.setLocalesConfig = function(config) {
    let defaults = JSON.parse(JSON.stringify(localesConfig))
    this.localesConfig = utils.extend(true, defaults, config)
  }

  Instance.getWeekArray = function getWeekArray(d, customDow) {
    function addWeek(weekArray, week) {
      let emptyDays = 7 - week.length

      for (let i = 0; i < emptyDays; ++i) {
        week[weekArray.length ? 'push' : 'unshift'](null)
      }

      weekArray.push(week)
    }

    let moment = this.moment;
    let date = moment(d);
    let daysInMonth = xDaysInMonth(date.xYear(), date.xMonth())
    
    // Create the first day of the month
    let firstDay = moment(d).xSetDate(1);
    let firstDayOfWeek = firstDay.toDate().getDay();
    
    // Use customDow if provided, otherwise fallback to locale.config.dow
    let dow = typeof customDow === 'number' ? customDow : this.locale.config.dow
    
    // Calculate how many days from the previous month we need
    let daysFromPrevMonth = (firstDayOfWeek - dow + 7) % 7;
    
    let weekArray = []
    let week = []
    
    // Add days from previous month
    for (let i = daysFromPrevMonth; i > 0; i--) {
      week.push(null)
    }
    
    // Add days from current month
    for (let i = 1; i <= daysInMonth; i++) {
      let day = moment(d).xSetDate(i).toDate()
      week.push(day)
      
      // If we've reached the end of a week, start a new week
      if (week.length === 7) {
        weekArray.push(week)
        week = []
      }
    }
    
    // Add remaining days from next month
    while (week.length < 7) {
      week.push(null)
    }
    
    if (week.length > 0) {
      weekArray.push(week)
    }

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
      let month = Instance.createDate(date.toDate()).xSetMonth(i)
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
