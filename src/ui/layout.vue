<style>
</style>

<template>
    <div>
        <slot name="navbar">
            <fragment-navbar></fragment-navbar>
        </slot>

        <div class="container-fluid">
            <div class="main">
                <slot>
                    <router-view></router-view>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        name: 'layout',
    }
</script>