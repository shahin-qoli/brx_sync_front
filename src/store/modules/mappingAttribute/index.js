import  {finAgent} from '@/services/agent'

export default{
    state(){
        return{
            documentAttributes: [],
            equivalentAttributes:[],

        }
    },
    mutations:{
        setEquivalentAttributes(state, equivalentAttributes){
            state.equivalentAttributes = equivalentAttributes;
        },
        setDocumentAttributes(state,documentAttributes ){
            state.documentAttributes = documentAttributes
        }
    },
    getters:{
        getEquivalentAttributes(state){
            return state.equivalentAttributes;
        },
        getDocumentAttributes(state){
            return state.documentAttributes;
        }
    },
    actions:{
        async loadAttributes(context, payload){
            try {
                var data = {equivalent_id: payload}
                const {data:responseData} = await finAgent.post(`/attribute_mappings/retrieve_attributes`, data);

                const equivalentAttributes = responseData.equivalent_attributes
                const documentAttributes = responseData.document_attributes
                context.commit('setDocumentAttributes', documentAttributes)
                context.commit('setEquivalentAttributes', equivalentAttributes)
 
            } catch (err) {
                //console.log(err.response);
                const error = new Error(
                    err.response.data.error || 'Failed to fetch'
                );
                throw error;
             } 
        },
        async saveAttributes(context, payload){
            const {data:responseData} = await finAgent.post(`/attribute_mappings/create_mapping`, payload);
            console.log(responseData)
        }
    }
}