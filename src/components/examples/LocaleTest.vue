<template>
  <div class="pt-5">
    <h1 class="text-center" style="margin-bottom: 50px">
      Locale Test
    </h1>

    <card title="Japanese Locale">
      <date-picker v-model="dateJP" :locale="'ja'" :calendar="'gregory'"/>
      <br />
      <div>Selected date: {{ dateJP }}</div>
    </card>

    <card title="Thai Locale">
      <date-picker v-model="dateTH" :locale="'th'" :calendar="'gregory'"/>
      <br />
      <div>Selected date: {{ dateTH }}</div>
    </card>

    <card title="Arabic Locale">
      <date-picker v-model="dateAR" :locale="'ar-sa'" :calendar="'hijri'"/>
      <br />
      <div>Selected date: {{ dateAR }}</div>
    </card>

    <card title="Persian Locale">
      <date-picker v-model="dateFA" :locale="'fa'" :calendar="'jalali'"/>
      <br />
      <div>Selected date: {{ dateFA }}</div>
    </card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateJP: '',
      dateTH: '',
      dateAR: '',
      dateFA: ''
    }
  }
}
</script> 