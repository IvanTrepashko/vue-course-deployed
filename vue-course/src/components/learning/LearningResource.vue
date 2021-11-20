<template>
    <div>
        <li>
            <base-card>
                    <header>
                        <h3>{{ resource.title }}</h3>
                        <base-button @click="remove" :mode="'flat'">Delete</base-button>
                    </header>
                <p>{{ resource.description }}</p>
                <nav>
                    <a :href="resource.link" target="_blank">View resource</a>
                </nav>
            </base-card>
        </li>
    </div>
</template>

<script>
import BaseCard from '../ui/BaseCard.vue'
import BaseButton from './ui/BaseButton.vue'

export default {
    components: {
        BaseCard,
        BaseButton
    },
    props:['resource'],
    inject: ['removeResource'],
    methods: {
        remove() {
            console.log()
            this.removeResource(this.resource.id);
        }
    }
}
</script>

<style scoped>
li {
    margin: auto;
    max-width: 40rem;
}

header {
    display:flex;
    justify-content: space-between;
    align-items:center;
}

h3 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
}

p {
    margin: 0.5rem 0;
}

a {
    text-decoration: none;
    color: #ce5c00;
}
a:hover,
a:active {
    color: #c89300;
}
</style>