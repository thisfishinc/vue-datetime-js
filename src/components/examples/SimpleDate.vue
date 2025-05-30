<template>
  <div class="pt-5">
    <h1 class="text-center" style="margin-bottom: 50px">
      VUE DATE TIME PICKER
    </h1>
    <h5 class="text-center mb-5">
      A vue plugin to select date and time
    </h5>

    <card title="Dynamic Calendar Configuration">
      <div class="mb-4">
        <div class="row">
          <div class="col-md-6">
            <label class="form-label">Select Calendar Type:</label>
            <select v-model="selectedCalendar" class="form-select">
              <option value="gregory">Gregorian</option>
              <option value="jalali">Jalali</option>
              <option value="hijri">Hijri</option>
              <option value="japanese">Japanese</option>
              <option value="thai">Thai</option>
            </select>
          </div>
          <div class="col-md-6">
            <label class="form-label">Select Locale:</label>
            <select v-model="selectedLocale" class="form-select">
              <option value="en">English</option>
              <option value="ja">Japanese</option>
              <option value="th">Thai</option>
              <option value="fa">Persian</option>
              <option value="fr">French</option>
              <option value="ar-sa">Arabic</option>
              <option value="ka">Georgian</option>
              <option value="ko">Korean</option>
              <option value="zh-cn">Simplified Chinese</option>
              <option value="zh-tw">Traditional Chinese</option>
            </select>
          </div>
          <div class="col-md-6">
            <label class="form-label">First Day of Week:</label>
            <select v-model.number="selectedDow" class="form-select">
              <option :value="0">Sunday (Default)</option>
              <option :value="1">Monday</option>
              <option :value="2">Tuesday</option>
              <option :value="3">Wednesday</option>
              <option :value="4">Thursday</option>
              <option :value="5">Friday</option>
              <option :value="6">Saturday</option>
            </select>
          </div>
          <div class="col-md-6">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="useCustomDow"
                v-model="useCustomDow"
              />
              <label class="form-check-label" for="useCustomDow">
                Use Custom First Day of Week
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-4">
        <h6>Current Configuration:</h6>
        <p>Calendar: {{ selectedCalendar }} | Locale: {{ selectedLocale }} | First Day: {{ dowLabel }}</p>
      </div>

      <date-picker
        v-model="dynamicDate"
        :locale="selectedLocale"
        :calendar="selectedCalendar"
        :display-format="displayFormat"
        :format="'YYYY-MM-DD'"
        :placeholder="placeholder"
        :dow="selectedDow"
        :use-custom-dow="useCustomDow"
      />
    </card>
  </div>
</template>

<script>
export default {
  name: 'SimpleDate',
  data() {
    return {
      // Dynamic picker configuration
      selectedCalendar: 'gregory',
      selectedLocale: 'en',
      selectedDow: 0,
      useCustomDow: false,
      dynamicDate: '',

      // Static examples
      date: '',
      date1: '',
      date2: '',
      date3: '',
      date4: '',
      date5: '',
      date6: '',
      date7: '',
      date8: '',
      dateJalaliJa: '',
      datetime: '',
      time: '',
      yearMonth: '',
      year: '',
      month: '',
      week: '',
      quarter: '',
      day: '',
      hour: '',
      minute: '',
      second: '',
      millisecond: ''
    }
  },
  computed: {
    dowLabel() {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      return days[this.selectedDow]
    },
    displayFormat() {
      const formats = {
        ja: 'YYYY年M月D日',
        th: 'YYYY MMMM D',
        'ar-sa': 'YYYY/MM/DD',
        fa: 'YYYY/MM/DD',
        fr: 'DD/MM/YYYY',
        ka: 'DD/MM/YYYY',
        ko: 'YYYY.MM.DD',
        'zh-cn': 'YYYY/MM/DD',
        'zh-tw': 'YYYY/MM/DD',
        en: 'YYYY-MM-DD'
      }
      return formats[this.selectedLocale] || 'YYYY-MM-DD'
    },
    placeholder() {
      const placeholders = {
        ja: '日付を選択',
        th: 'เลือกวันที่',
        'ar-sa': 'اختر التاريخ',
        fa: 'تاریخ را انتخاب کنید',
        fr: 'Sélectionner une date',
        ka: 'აირჩიეთ თარიღი',
        ko: '날짜 선택',
        'zh-cn': '选择日期',
        'zh-tw': '選擇日期',
        en: 'Select date'
      }
      return placeholders[this.selectedLocale] || 'Select date'
    }
  }
}
</script>

<style scoped>
.form-label {
  font-weight: 500;
  margin-bottom: 0.5rem;
}
.form-select {
  margin-bottom: 1rem;
}
</style>
