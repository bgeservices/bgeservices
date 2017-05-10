<style scoped lang="less">
</style>

<template>
    <div class="col-xs-6 col-lg-4">
        <b-card show-header show-footer>
            <h2 slot="header">
                {{service.label}}
            </h2>
            <p v-html="service.desc"></p>
            <div slot="footer">
                <div class="-btn-group">
                    <b-tooltip
                            :show="service.isSecure ? false : null"
                            placement="bottom"
                            title="Услугата използва незащитена връзката - вашите лични данни, пароли и кодове могат да бъдат видяни от нежелани страни!">
                        <a class="btn btn-outline-primary btn-block"
                           :class="{'btn-outline-primary': service.isSecure, 'btn-outline-danger': !service.isSecure}"
                           :href="service.link"
                           target="_blank" role="button">Отвори</a>
                    </b-tooltip>
                </div>
            </div>
        </b-card>
    </div>
</template>

<script>
    module.exports = {
        name: 'fragment-service',
        props: {
            service: {
                type: Object,
                required: true,
            },
        }
    }
</script>