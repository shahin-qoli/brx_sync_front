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
        }

    },
    getters:{
        equivalentDocuments(state){
            return state.equivalentDocuments;
        }
    },
    actions:{
        async loadEquivalentDocuments(context,payload){
            try {
                const {data: responseData} = await finAgent.get(`/front/job_results?page=${payload.page}&per_page=${payload.itemsPerPage}`);
                const equivalentDocuments = []
                var equivalentDocumentsData = responseData.data;
                for (const item of equivalentDocumentsData) {
                    const equivalentDocument= {
                        ...item
                    }
                    jobs.push(equivalentDocuments); 
                }
                
                context.commit('setEquivalentDocuments', equivalentDocuments)
 
            } catch (err) {
                //console.log(err.response);
                const error = new Error(
                    err.response.data.error || 'Failed to fetch'
                );
                throw error;
             } 
        }

    }
}