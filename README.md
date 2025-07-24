# vue3-datetime-js

[![npm version](https://badge.fury.io/js/vue-datetime-js.svg)](https://www.npmjs.com/package/vue-datetime-js)

See documentation and demo at [vue-datetime-js](https://mahdadghasemian.github.io/vue-datetime-js)


## Installation

### npm
```bash
npm install vue3-datetime-js --save
```

webpack.config.js:
```javascript
/**
 * Day.js is much smaller than Moment.js and doesn't require locale ignoring
 */
module.exports.plugins = [
    //...
    // No need for locale ignoring with Day.js
    //...
]
```

### Usage

main.js
```javascript
//...
import VueDatetimeJs from 'vue3-datetime-js';
Vue.component('date-picker', VueDatetimeJs);
//...
```
Or in component
```html
<template>
    <div>
        <date-picker v-model="date"></date-picker>
    </div>
</template>
 
<script>
    import VueDatetimeJs from 'vue3-datetime-js'
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
</script>
```

## You can also set default values: 
main.js
```javascript
import VueDatetimeJs from 'vue3-datetime-js';
Vue.use(VuePersianDatetimePicker, {
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
```
Then use in component
```html
<custom-date-picker v-model="date"></custom-date-picker>
```

## Built With
* [Vuejs](https://vuejs.org/) - The Progressive JavaScript Framework.
* [Day.js](https://day.js.org/) - Modern date utility library for parsing, validating, manipulating, and formatting dates.
* Jalali calendar support is now built into the component using Day.js.
* Hijri calendar support is now built into the component using Day.js with proper Islamic calendar calculations.
* [vue-persian-datetime-picker](https://github.com/talkhabi/vue-persian-datetime-picker.git) - A vue plugin to select jalali date and time.


## License

This project is licensed under the MIT License


## Change log

### 3.0.0(2022-04-06)

  * Support vue3

### 1.2.2 (2019-12-04)

  * Fix build and ReadMe

### 1.2.1 (2019-12-02)

  * Fix sample page vue

### 1.2.0 (2019-12-02)

  * Add calendar (gregory, jalali, hijri)

### 1.1.0 (2019-12-01)

  * Remove localeLange
  * Add Hijri calendar
  * Fix (Hijri ('ar-sa') - Jalalli ('fa') - Gregory ('en'))

### 1.0.4 (2019-11-28)

  * Some Test
  
### 1.0.3 (2019-11-28)

  * Add localeLange Prop
 
### 1.0.2 (2019-11-28)

  * Some Test
  
### 1.0.1 (2019-11-28)

  * Fix Readme file

### 1.0.0 (2019-11-28)

  * Fork from vue-persian-datetime-picker
