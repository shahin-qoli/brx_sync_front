import  {finAgent} from '@/services/agent'

export default {
    state:{},
    mutations:{},
    getters:{},
    actions:{
        async makeRequest(context, payload){
            try {
                var data = {raw_documents_request: payload}
                const {data:responseData} = await finAgent.post(`/raw_documents_requests`, data);

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
        }
    },
}