<template>
    <v-container>
      <v-row>
        <v-col cols="6">
          <!-- Box with single select list -->
          <v-card>
            <v-card-title>
              Select an option
            </v-card-title>
            <v-card-text>
              <v-select
                v-model="selectedOption"
                :items="equivalentDocuments"
                item-text="title"
                item-value="id"
                label="Options"
              ></v-select>
              <div v-if="selectedOption">
                Content for option: {{ selectedOption }}
              </div>
              <div v-else>
                No option selected
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6">
          <!-- Box to load something related to selection -->
          <v-card>
            <v-card-title>
              Loaded attributes
            </v-card-title>
            <v-card-text>
              <v-chip v-for="(attribute, index) in equivalentAttributes" :key="index" label>
                {{ attribute }}
              </v-chip>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
            <v-card>
          <v-card-title>
            Loaded attributes
          </v-card-title>
          <v-card-text>
            <v-form ref="myForm">
              <v-row v-for="(object, index) in formFields" :key="index">
                <v-col cols="4">
                    <v-subheader>{{object.equivalentAttribute}}</v-subheader>
                </v-col>
                <v-col cols="2">
                  <v-text-field
                    v-model="object.mainAttribute"
                    :label="object.mainAttribute"
                    :placeholder="object.mainAttribute"
                  ></v-text-field>
                </v-col>
                <v-col cols="2">
                  <v-text-field
                    v-model="object.fixedAmount"

                  ></v-text-field>
                </v-col>
                <v-col cols="1">
                  <v-checkbox
                    v-model="object.uniquer"
                    hide-details
                  ></v-checkbox>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-btn color="primary"  @click="submitForm" >Submit</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>

        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedOption: null,
        formFields: [],
        uniquer:'',
      };
    },
    computed: {
      equivalentDocuments(){
        return this.$store.getters.getEquivalentDocuments
      },equivalentAttributes(){
        return this.$store.getters.getEquivalentAttributes
      },
      documentAttributes(){
        return this.$store.getters.getDocumentAttributes
      },
    },
    methods:{
      initializeFormFields() {
    this.documentAttributes.forEach(attribute => {
      this.formFields.push({
        mainAttribute: '',
        equivalentAttribute: attribute,
        uniquer: false,
        fixedAmount: ''
      })
    });
},
      loadEquivalentDocuments() {
        // console.log(this)
        this.$store.dispatch('loadEquivalentDocuments');
    },
    async loadAttributes() {
    try {
      await this.$store.dispatch('loadAttributes', this.selectedOption);
      this.initializeFormFields();
    } catch (error) {
      console.error(error);
    }
  },
    submitForm() {
      // Access the input values and attributes here
      const payload = {
        equivalent_id : this.selectedOption,
        data : this.formFields,
      }
      console.log(payload)
      this.$store.dispatch('saveAttributes', payload);
    },
  },
  watch:{
    selectedOption:{
      handler(){
        if (this.selectedOption) {
      this.loadAttributes(); 
        }
      },  deep: true
    }
  },
    created(){
        this.loadEquivalentDocuments();   
    }
  }
  </script>
  