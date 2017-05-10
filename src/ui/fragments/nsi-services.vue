<style scoped lang="less">
</style>

<template>
    <div>
        <h1 class="page-header">Социално осигуряване</h1>
        <p>
            За използването на услугите от НОИ е необходимо да
            <a href="http://www.nssi.bg/bg/eservicesbg/reports/42-pik" target="_blank">имате ПИК</a>.
        </p>

        <div class="row">
            <fragment-service v-for="(service, key) in services" v-if="service.isService" :service="service"></fragment-service>
        </div>
    </div>
</template>

<script>
    module.exports = {
        name: 'fragment-nsi-services',
        data: function () {
            return {
                services: require('../../services').nsi,
            }
        },
    }
</script>