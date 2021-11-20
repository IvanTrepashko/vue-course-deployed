<template>
    <div>
        <the-header :title="'Learning Resources'"></the-header>
        <base-card>
            <base-button :mode="storedResButtonMode" @click="setSelectedTab('stored-resources')">Stored Resources</base-button>
            <base-button :mode="addResButtonMode" @click="setSelectedTab('new-resource')">Add Resource</base-button>
        </base-card>
        <keep-alive>
            <component :is="selectedTab"></component>
        </keep-alive>
    </div>
</template>

<script>
import BaseButton from './ui/BaseButton.vue'
import StoredResources from './StoredResources.vue';
import NewResource from './NewResource.vue';
import TheHeader from './layouts/TheHeader.vue';
import BaseCard from '../ui/BaseCard.vue'
import {v4 as uuidv4} from 'uuid'
import _ from 'lodash'

export default {
    components: {
    BaseButton,
    StoredResources,
    NewResource,
    TheHeader,
    BaseCard
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: []
        }
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        },
        addResButtonMode() {
            return this.selectedTab === 'new-resource' ? null : 'flat';
        }
    },
    provide() {
        return {
            storedResources: this.storedResources,
            addResource: this.addResource,
            removeResource: this.removeResource
        }
    },
    methods: {
        removeResource(id) {
            _.remove(this.storedResources, x => x.id === id);
        },
        setSelectedTab(tabName) {
            this.selectedTab = tabName;
        },
        addResource(title, description, link) {
            this.storedResources.push({
                id: uuidv4(),
                title: title,
                description: description,
                link: link
            });
            
            localStorage.storedResources = JSON.stringify(this.storedResources);

            console.log(this.storedResources);

            this.selectedTab = 'stored-resources';
        }
    },
    beforeCreate() {
        if (localStorage.storedResources) {
            this.storedResources = JSON.parse(localStorage.storedResources);
        }

        console.log(localStorage.storedResources);
    }
}
</script>

<style scoped>

</style>