<style>
    body {
        padding-top: 5rem;
    }
</style>

<template>
    <!--<div>-->
    <b-navbar toggleable type="inverse" fixed="top" variant="inverse">

        <b-nav-toggle target="nav_collapse"></b-nav-toggle>

        <b-link class="navbar-brand" to="/">
            <span>Български е-услуги</span>
        </b-link>

        <b-collapse is-nav id="nav_collapse">

            <b-nav is-nav-bar right-alignment class="ml-auto">
                <b-nav-item to="/" :exact="true">Начало</b-nav-item>

                <template v-for="service in services" v-if="!service.isService && service.label">
                    <b-nav-item-dropdown v-if="service.hasNestedLists" :text="service.label" right>
                        <b-dropdown-item v-for="list in service"
                                         v-if="!list.isService && list.label"
                                         :to="list.path"
                                         v-html="list.label"></b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item v-else :to="service.path">{{service.label}}</b-nav-item>
                </template>

                <b-nav-item-dropdown right>
                    <span slot="text">
                        <i class="fa fa-cog" aria-hidden="true"></i>
                        <span class="sr-only">Други</span>
                    </span>
                    <a href="https://github.com/bgeservices/bgeservices/issues" class="dropdown-item" aria-disabled="false" tabindex="-1" role="menuitem" target="_blank">
                        Добави услуга
                    </a>
                </b-nav-item-dropdown>
            </b-nav>

        </b-collapse>

    </b-navbar>

</template>

<script>
    module.exports = {
        name: 'fragment-navbar',
        data: function () {
            return {
                services: require('../../services')
            }
        },
        methods: {
            openSubmitService: function () {
                var submitServiceUrl = 'https://github.com/bgeservices/bgeservices/issues'
                this.$ga('send', 'event', 'submitservice', 'open', submitServiceUrl)
                this.$ga('send', 'event', 'outbound', 'click', submitServiceUrl)
                window.open(submitServiceUrl, '_blank')
            }
        },
    }
</script>