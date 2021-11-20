<template>
<div>
    <base-dialog v-if="isInvalidInput" :title="'Input is invalid'">
        <template #default>
            <p>Please, don't leave any empty fields</p>
        </template>
        <template #actions>
            <base-button @click="confirmError">Ok</base-button>
        </template>
    </base-dialog>
    <base-card>
        <form @submit.prevent="addNewResource">
            <div class="form-control">
                <label for="title">Title</label>
                <input v-model="titleInput" type="text" name="title" id="title">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea v-model="descriptionInput" name="desciprtion" id="description" cols="30" rows="3"></textarea>
            </div>
            <div class="form-control">
                <label for="title">Link</label>
                <input v-model="linkInput" type="url" name="title" id="title">
            </div>
            <div>
                <base-button type="submit">Add resource</base-button>
            </div>
        </form>
    </base-card>
</div>
</template>

<script>
import BaseCard from '../ui/BaseCard.vue'
import BaseButton from './ui/BaseButton.vue'
import BaseDialog from './ui/BaseDialog.vue'

export default {
    components: {
        BaseCard,
        BaseButton,
        BaseDialog
    },
    inject: ['addResource'],
    data() {
        return {
            titleInput: '',
            descriptionInput: '',
            linkInput: '',
            isInvalidInput: false
        }
    },
    methods: {
        confirmError() {
            this.isInvalidInput = false;
        },
        addNewResource() {
            if (this.titleInput.trim() === '' || this.descriptionInput.trim() === '' || this.linkInput.trim() === '') {
                this.isInvalidInput = true;
                return;
            }

            this.addResource(this.titleInput, this.descriptionInput, this.linkInput);
            this.titleInput = '';
            this.descriptionInput = '';
            this.linkInput = '';
        }
    }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>