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
                :items="options"
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
              <v-chip v-for="(attribute, index) in selectedAttributes" :key="index" label>
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
              <v-row v-for="(attribute, index) in selectedAttributes" :key="index">
                <v-col cols="4">
                    <v-subheader>{{attribute.placeholder}}</v-subheader>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    v-model="attribute.value"
                    :label="attribute.label"
                    :placeholder="attribute.placeholder"
                    :rules="attribute.rules"
                  ></v-text-field>
                </v-col>
                <v-col cols="1">
                  <v-checkbox
                    v-model="attribute.uniquer"
                    label="Uniquer"
                    hide-details
                  ></v-checkbox>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-btn color="primary" @click="submitForm">Submit</v-btn>
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
        options: ['Option 1', 'Option 2', 'Option 3'],
        attributes: [
        { label: 'Attribute 1', placeholder: 'Enter attribute 1', value: '', rules: [], uniquer: true },
        { label: 'Attribute 2', placeholder: 'Enter attribute 2', value: '', rules: [], uniquer: false },
        { label: 'Attribute 3', placeholder: 'Enter attribute 3', value: '', rules: [], uniquer: false },
      ],
      };
    },
    computed: {
      selectedAttributes() {
        // Simulating attributes related to the selected option
        switch (this.selectedOption) {
          case 'Option 1':
            return ['Attribute 1', 'Attribute 2'];
          case 'Option 2':
            return ['Attribute 3', 'Attribute 4'];
          case 'Option 3':
            return ['Attribute 5', 'Attribute 6'];
          default:
            return [];
        }
      },
    },
  };
  </script>
  