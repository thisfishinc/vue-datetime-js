<template>
  <div class="locale-test">
    <h2>Locale Test Component</h2>
    
    <!-- Controls -->
    <div class="controls">
      <div class="field">
        <label class="label">Select Locale</label>
        <div class="control">
        </div>
      </div>
    </div>

    <!-- Date Picker -->
    <div class="field">
      <label class="label">Date Picker</label>
      <div class="control">
        <datepicker
          v-model="dateValue"
          :locale="selectedLocale"
          :calendar="'gregory'"
          :display-format="'YYYY-MM-DD'"
          input-class="input"
        />
      </div>
    </div>

    <!-- Debug Info -->
    <div class="debug-info">
      <h3>Debug Information</h3>
      <pre>{{ debugInfo }}</pre>
    </div>
  </div>
</template>

<script>
import VueDatetimeJs from '../picker/VueDatetimeJs.vue'
import moment from 'moment'

export default {
  name: 'LocaleTest',
  components: {
    datepicker: VueDatetimeJs
  },
  data() {
    return {
      selectedLocale: 'ja',
      dateValue: new Date(),
      debugInfo: {}
    }
  },
  watch: {
    selectedLocale: {
      immediate: true,
      handler(newLocale) {
        this.updateDebugInfo()
      }
    },
    dateValue: {
      handler() {
        this.updateDebugInfo()
      }
    }
  },
  methods: {
    updateDebugInfo() {
      // Get the datepicker instance
      const picker = this.$refs.datepicker
      
      // Create debug info object
      this.debugInfo = {
        selectedLocale: this.selectedLocale,
        dateValue: this.dateValue,
        momentLocale: moment.locale(),
        momentLocaleData: {
          name: moment.localeData().name,
          months: moment.localeData().months(),
          weekdays: moment.localeData().weekdays(),
          firstDayOfWeek: moment.localeData().firstDayOfWeek()
        },
        pickerLocaleData: picker ? {
          name: picker.localeData.name,
          config: picker.localeData.config,
          lang: picker.localeData.config.lang
        } : 'Picker not mounted'
      }
    }
  }
}
</script>

<style scoped>
.locale-test {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.controls {
  margin-bottom: 20px;
}

.debug-info {
  margin-top: 20px;
  padding: 15px;
  background: #f5f5f5;
  border-radius: 4px;
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style> 