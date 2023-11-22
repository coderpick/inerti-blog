<template>

    <div class="mt-4">
        <template v-for="link in links" :key="link.links">
            <Link
                class="mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-indigo-500 hover:text-white focus:border-indigo-500 focus:text-indigo-500"
                v-if="link.url"
                :key="link.label"
                :href="link.url"
                v-html="link.label"
                :class="link.active?'bg-indigo-500 text-white font-bold':''"
                preserve-scroll
            />
            <span v-else v-html="link.label"
                  class="mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-indigo-500 hover:text-white focus:border-indigo-500 focus:text-indigo-500"
                  :class="link.url ? '' : 'text-gray-400'"></span>
        </template>
    </div>

</template>
<script>
import { Link } from '@inertiajs/inertia-vue3'

export default {
    components: {
        Link,
    },
    props: {
        links: Array,
    },
}
</script>

