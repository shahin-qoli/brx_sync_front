<template>
  <div>
    <v-toolbar color="primary" dark>
      <v-toolbar-title>Card Page</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="openDialog" color="primary">Create New Item</v-btn>
    </v-toolbar>
    <div class="card-container">
      <v-card v-for="(object, index) in mainDocuments" :key="index" class="card">
        <v-card-title>{{ object.title }}</v-card-title>
        <v-card-text>{{ object.description }}</v-card-text>
      </v-card>
    </div>

    <v-dialog v-model="dialogVisible" max-width="500px">
      <v-card>
        <v-card-title>Create New Item</v-card-title>
        <v-card-text>
          <v-container>
          <v-row>
            <v-col cols="6" >
                <v-text-field v-model="createItem.title" label="عنوان"></v-text-field>
            </v-col>
            <v-col cols="6" >
                <v-text-field v-model="createItem.description" label="توضیحات"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-textarea v-model="createItem.json_data" label="مدل داده"></v-textarea>
            </v-col>
          </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="saveNewItem">Save</v-btn>
          <v-btn @click="closeDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      createItem:{
        title : '',
        description: '',
        json_data: '',
      }
    };
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    },
    saveNewItem() {
      // Add logic to save the new item
      // After saving, update the objectList and close the dialog
      this.$store.dispatch('createMainDocuments', this.createItem)
      this.dialogVisible = false;
    },
    loadMainDocuments() {
      // console.log(this)
      this.$store.dispatch('loadMainDocuments')
    }
  },
  computed:{
    mainDocuments(){
      return this.$store.getters.getMainDocuments
    }
  },
  created(){
      this.loadMainDocuments();
  }
};
</script>
<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  flex: 0 0 calc(33.33% - 20px); /* Adjust the width as per your requirement */
  margin: 10px;
  min-width: 200px;
}
</style>