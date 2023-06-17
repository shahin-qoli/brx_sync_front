<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-text>
                        <v-row>
                            <v-col cols="6">
                            <v-select
                            v-model="selectedOption"
                            :items="equivalentDocuments"
                            item-text="title"
                            item-value="id"
                            label="سند معادل"
                            solo
                            ></v-select>
                            </v-col>
                            <v-col v-if="selectedOption" cols="6">
                            <v-text-field
                            :value=mainDocumentTitle
                            label="سند مادر"
                            disabled
                            ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-form ref="myForm">
                            <v-row>
                                <v-col cols="6">
                                    <v-text-field
                                    label="لینک درخواست"
                                    v-model="requestLink"
                                    placeholder="Placeholder"
                                    filled
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="3">
                                    <v-radio-group
                                    v-model="requestType"
                                    row
                                    >
                                    <v-radio
                                    label="GET"
                                    value="GET"
                                    ></v-radio>
                                    <v-radio
                                    label="POST"
                                    value="POST"
                                    ></v-radio>
                                    </v-radio-group>
                                </v-col>
                                <v-col cols="3">
                                    <v-text-field
                                    label="آرایه حاوی سند"
                                    v-model="docsArray"
                                    placeholder="Placeholder"
                                    filled
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                                <v-textarea
                                name="input-7-1"
                                filled
                                label="بدنه درخواست"
                                auto-grow
                                v-model="requestBody"
                                ></v-textarea>
                            <v-row>
                                <v-col cols="12">
                                <v-btn color="primary"  @click="submitForm" >Submit</v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>           
            <v-divider></v-divider>
            <v-card>
                <v-row>
                <v-col cols="12">
                    <v-textarea
                    name="input-7-1"
                    filled
                    label="نتیجه درخواست"
                    auto-grow
                    v-model="requestResult"
                    ></v-textarea>
                </v-col>
                </v-row>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>


export default {
    data() {
      return {
        selectedOption: null,
        requestLink: null,
        requestType: null,
        docsArray: null,
        requestBody:'',
        requestResult:'طی درخواست شماره 77 به تعداد 25 سند بارگذاری شد'

      };
    },
    computed: {
      equivalentDocuments(){
        return this.$store.getters.getEquivalentDocuments
      },
      mainDocument() {
      if (this.selectedOption) {
        var equivalent = this.equivalentDocuments.find(doc => doc.id === this.selectedOption);
        return equivalent.document
      }
      return null;
    },
      mainDocumentTitle(){
        if (this.mainDocument){
            return this.mainDocument.title
        }
        return null;
      }
    },
      methods: {
        submitForm(){
            var payload = {
                equivalent_id: this.selectedOption,
                request_link: this.requestLink,
                request_type: this.requestType,
                request_docs_array: this.docsArray,
                request_body: this.requestBody,
            }
            this.$store.dispatch('makeRequest', payload)
        },
        loadEquivalentDocuments() {
        // console.log(this)
        this.$store.dispatch('loadEquivalentDocuments');
    },
      },
      created() {
        this.loadEquivalentDocuments(); 
      }
}
</script>
