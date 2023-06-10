import  {finAgent} from '@/services/agent'

export default{
    state(){
        return{
            equivalentDocuments: [],
        }
    },
    mutations:{
        setEquivalentDocuments(state, equivalentDocuments){
            state.equivalentDocuments = equivalentDocuments;
        },
        createEquivalentDocument(state, payload){
            state.equivalentDocuments.push(payload)
        }

    },
    getters:{
        getEquivalentDocuments(state){
            return state.equivalentDocuments;
        }
    },
    actions:{
        async loadEquivalentDocuments(context){
            try {
                const {data: responseData} = await finAgent.get(`/equivalents`);
                const equivalentDocuments = []
                var equivalentDocumentsData = responseData.data;
                for (const item of equivalentDocumentsData) {
                    const equivalentDocument= {
                        ...item
                    }
                    equivalentDocuments.push(equivalentDocument); 
                }
                
                context.commit('setEquivalentDocuments', equivalentDocuments)
 
            } catch (err) {
                //console.log(err.response);
                const error = new Error(
                    err.response.data.error || 'Failed to fetch'
                );
                throw error;
             } 
        },
        async createEquivalentDocuments(context,payload){
            try{
                var data = {equivalent: payload}
                console.log(data)
                const {data:responseData} = await finAgent.post('/equivalents', data)
                if (responseData){
                    context.commit('createEquivalentDocument', payload)
                }
            } catch (err) {
                //console.log(err.response);
                const error = new Error(
                    err.response.data.error || 'Failed to fetch'
                );
                throw error;
             }
        },

    }
}