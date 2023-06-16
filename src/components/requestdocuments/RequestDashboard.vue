<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-text>
                        <v-row>
                            <v-col cols="4">
                                <v-select
                                v-model="selectedOption"
                                :items="jobList"
                                item-text="title"
                                item-value="document.title"
                                label="لیست کارها"
                                solo
                                ></v-select>
                            </v-col>
                            <v-col v-if="selectedOption" cols="4">
                                <v-text-field
                                :value=mainDocument
                                label="سند مادر"
                                disabled
                                ></v-text-field>
                            </v-col>
                            <v-col v-if="selectedOption" cols="4">
                                <v-text-field
                                :value=equivalentDocument
                                label="سند معادل"
                                disabled
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-text>
                        <v-data-table
                        fixed-header
                        dense
                        :headers="headers"
                        :items="raws"
                        item-key="id"
                        :options.sync="options"
                        :server-items-length="itemCount"
                        class="elevation-1"
                        >
                        <template v-slot:[`item.controls`]="props">
                         <v-btn  class="mx-2" small  @click="retryJob(props.item)">
                        <v-icon>mdi-check-outline</v-icon>
                        </v-btn>
                        </template>
                        <template v-slot:[`item.mainDocument`]="props">
                            <span>{{ JSON.stringify(props.item.mainDocument) }}</span>
                        </template>
                        <template v-slot:[`item.equivalentDocument`]="props">
                            <span>{{ JSON.stringify(props.item.equivalentDocument) }}</span>
                        </template>
                        </v-data-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default{
    data() {
        return {
            jobList:[1,2,3],
            selectedOption: null,
            mainDocument:"something",
            equivalentDocument:"equivalent",
            raws:[
                {
                    id: 1,
                    mainDocument:{
                    "token": "{{token}}",
                    "marketdoc": {
                        "doctype": 23,
                        "cardcode": "c50000",
                        "marketingapprelatedid": "testodoo12",
                        "doctime": "2022-10-04T13:20:26.1134028+03:30",
                        "marketinglines": [
                            {
                                "itemcode": "5320",
                                "itemqty": 2.0,
                                "towhscode": "twhsshah"
                            },
                            {
                                "itemcode": "5340",
                                "itemqty": 2.0,
                                "towhscode": "twhsshah"
                            }
                        ],
                        "deliveraddress": "تهرانسر، بلوار لاله، کوچه 12 شرقی پلاک 12 طبقه دوم :, , , b",
                        "marketingdetails": {
                            "invtype": 1,
                            "settletype": 1,
                            "paymenttime": 1,
                            "campaign": 0,
                            "slpcode": 41,
                            "deliverytype": 11,
                            "payduedate": 1,
                            "taxonurl": "10646"
                        },
                        "paymentdetails": {
                            "realpayerinfo": ""
                        },
                        "comment": "",
                        "documenttotal": 0.0,
                        "relatedteam": 1
                    }
                },
                equivalentDocument:{
                    "customer": "c50000",
                    "sourceField": "testodoo12",
                    "date": "2022-10-04T13:20:26.1134028+03:30",
                    "stockCode": "b333",
                    "orderDetails": [
                        {
                            "item": "5320",
                            "quantity": 2.0,
                            "price": 34000
                        },
                                {
                            "item": "5322",
                            "quantity": 7.0,
                            "price": 37000
                        }
                    ],
                    "paymentdetails": {
                        "paidAmount": 440000
                    },
                    "description": "",
                    "totalAmount": 0.0,
                    "customerGroup": 1
                },
                }
            ]
        }
    },
    computed:{
        headers(){
            return [
                {
            text: "ردیف",
            align: "center",
            //sortable: false,
            value: "id",
          },
          {
            text: "سند مادر",
            align: "center",
            //sortable: false,
            value: "mainDocument",
          },
          {
            text: "سند معادل",
            align: "center",
            //sortable: false,
            value: "equivalentDocument",
          },
          {
            text: "عملیات",
            align: "center",
            //sortable: false,
            value: "controls",
          },
          {
            text: "پاسخ",
            align: "center",
            //sortable: false,
            value: "response",
          },
            ]
        }
    }
}
</script>
