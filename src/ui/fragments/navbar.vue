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

            <b-nav is-nav-bar right-alignment>
                <b-nav-item to="/" :exact="true">Начало</b-nav-item>

                <template v-for="service in services" v-if="!service.isService">
                    <b-nav-item-dropdown v-if="service.hasNestedLists" :text="service.label">
                        <b-dropdown-item v-for="list in service"
                                         v-if="!list.isService"
                                         :to="list.path"
                                         v-html="list.label"></b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item v-else :to="service.path">{{service.label}}</b-nav-item>
                </template>
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
    }
</script>