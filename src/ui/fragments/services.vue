<template>
    <div>
        <h1 class="page-header">{{services.label}}</h1>
        <p v-if="services.desc" v-html="services.desc"></p>

        <div class="row">
            <fragment-service v-for="(service, key) in services" v-if="service.isService" :service="service"></fragment-service>
        </div>

        <template v-for="(subServices, key) in services" v-if="!subServices.isService">
            <h2 v-html="subServices.label"></h2>
            <p v-if="subServices.desc" v-html="subServices.desc"></p>
            <div class="row">
                <fragment-service v-for="(service, key) in subServices" v-if="service.isService" :service="service"></fragment-service>
            </div>

            <template v-for="(subSubServices, key) in subServices" v-if="!subSubServices.isService">
                <h3 v-html="subSubServices.label"></h3>
                <p v-if="subSubServices.desc" v-html="subSubServices.desc"></p>
                <div class="row">
                    <fragment-service v-for="(service, key) in subSubServices" v-if="service.isService" :service="service"></fragment-service>
                </div>
            </template>
        </template>
    </div>
</template>

<script>
    module.exports = {
        name: 'fragment-services',
        props: {
            services: {
                type: Object,
                required: true,
            }
        }
    }
</script>