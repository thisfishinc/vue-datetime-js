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
            </select>
          </div>
        </div>
      </div>

      <div class="mb-4">
        <h6>Current Configuration:</h6>
        <p>Calendar: {{ selectedCalendar }} | Locale: {{ selectedLocale }}</p>
      </div>

      <date-picker
        v-model="dynamicDate"
        :locale="selectedLocale"
        :calendar="selectedCalendar"
        :display-format="displayFormat"
        :format="'YYYY-MM-DD'"
        :placeholder="placeholder"
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
    displayFormat() {
      const formats = {
        ja: 'YYYY年M月D日',
        th: 'YYYY MMMM D',
        'ar-sa': 'YYYY/MM/DD',
        fa: 'YYYY/MM/DD',
        fr: 'DD/MM/YYYY',
        ka: 'DD/MM/YYYY',
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
