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
                    <b-nav-item to="/nsi">Социално осигуряване</b-nav-item>
                    <b-nav-item-dropdown text="Общини">
                        <b-dropdown-item to="/plovdiv">Пловдив</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-nav>

            </b-collapse>

        </b-navbar>

        <!--<div class="container-fluid">-->
            <!--<div class="navbar-header">-->
                <!--<button type="button" class="navbar-toggle collapsed"-->
                        <!--:aria-expanded="expanded" aria-controls="navbar"-->
                        <!--@click="expanded=!expanded">-->
                    <!--<span class="sr-only">Превключване на навигация</span>-->
                    <!--<span class="icon-bar"></span>-->
                    <!--<span class="icon-bar"></span>-->
                    <!--<span class="icon-bar"></span>-->
                <!--</button>-->
                <!--<router-link to="/" class="navbar-brand">Български е-услуги</router-link>-->
            <!--</div>-->
            <!--<transition @after-enter="prevExpanded = expanded" @after-leave="prevExpanded = expanded">-->
                <!--<div id="navbar" class="navbar-collapse"-->
                     <!--:class="{in: !changed && expanded, collapse: !changed, collapsing: changed}">-->
                    <!--<ul class="nav navbar-nav navbar-right">-->
                        <!--<fragment-sidebar-item label="Начало" path="/"></fragment-sidebar-item>-->
                        <!--<fragment-sidebar-item label="Социално осигуряване" path="/nsi"></fragment-sidebar-item>-->
                        <!--<fragment-sidebar-item label="Пловдив" path="/plovdiv"></fragment-sidebar-item>-->
                    <!--</ul>-->
                <!--</div>-->
            <!--</transition>-->
        <!--</div>-->
    <!--</div>-->
</template>

<script>
    module.exports = {
        name: 'fragment-navbar',
        data: function () {
            return {
                expanded: false,
                prevExpanded: false,
            }
        },
        computed: {
            changed: function () {
                return this.expanded != this.prevExpanded
            },
        },
    }
</script>