<template>
  <div>
    <h2>Installation:</h2>
    <!-- eslint-disable -->
      <highlight-code lang="bash" v-pre>
        npm install vue-datetime-js --save
      </highlight-code>
    <!-- eslint-enable -->
    <p>webpack.config.js:</p>
    <!-- eslint-disable -->
      <highlight-code lang="javascript" v-pre>
        /**
         * Day.js is much smaller than Moment.js and doesn't require locale ignoring
         * but you can still optimize your bundle if needed
         */
        module.exports.plugins = [
          //...
          // No need for locale ignoring with Day.js
          //...
        ]
      </highlight-code>
    <hr >
    <!-- eslint-enable -->
    <h1>Usage</h1>
    <p>main.js</p>
    <!-- eslint-disable -->
      <highlight-code lang="javascript" v-pre>
        import VueDatetimeJs from 'vue-datetime-js';
        Vue.component('date-picker', VueDatetimeJs);
      </highlight-code>
    <!-- eslint-enable -->
    <p>Or in component</p>
    <!-- eslint-disable -->
    <highlight-code lang="javascript" v-pre>
      &lt;template&gt;
        &lt;div&gt;
          &lt;date-picker v-model="date"&gt;&lt;/date-picker&gt;
        &lt;/div&gt;
      &lt;/template&gt;

      &lt;script&gt;
      import VueDatetimeJs from 'vue-datetime-js'
      export default {
        data(){
          return {
            date: ''
          }
        },
        components: {
          datePicker: VueDatetimeJs
        }
      }
      &lt;/script&gt;
    </highlight-code>
    <!-- eslint-enable -->
    <h1>Global configuration:</h1>
    <p>main.js</p>
    <!-- eslint-disable -->
    <highlight-code lang="javascript" v-pre>
      import VueDatetimeJs from 'vue-datetime-js';
      Vue.use(VueDatetimeJs, {
        name: 'custom-date-picker',
        props: {
          inputFormat: 'YYYY-MM-DD HH:mm',
          format: 'jYYYY-jMM-jDD HH:mm',
          editable: false,
          inputClass: 'form-control my-custom-class-name',
          placeholder: 'Please select a date',
          altFormat: 'YYYY-MM-DD HH:mm',
          color: '#00acc1',
          autoSubmit: false,
          //...
          //... And whatever you want to set as default
          //...
        }
      });
    </highlight-code>
    <highlight-code lang="html" v-pre>
      Then use in component
      &lt;custom-date-picker v-model="date"&gt;&lt;/custom-date-picker&gt;
    </highlight-code>
    <!-- eslint-enable -->
  </div>
</template>
