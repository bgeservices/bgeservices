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
                           @click.stop.prevent="openLink($event)"
                           @keydown.enter.stop.prevent="openLink($event)"
                           @keydown.space.stop.prevent="openLink($event)"
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
        },
        methods: {
            openLink: function () {
                this.$ga('send', 'event', 'service', 'open', this.service.path)
                this.$ga('send', 'event', 'outbound', 'click', this.service.link)
                window.open(this.service.link, '_blank')
            }
        },
    }
</script>