import  {finAgent} from '@/services/agent'

export default{
    state(){
        return{
            mainDocuments: [],
        }
    },
    mutations:{
        setMainDocuments(state, mainDocuments){
            state.mainDocuments = mainDocuments;
        }

    },
    getters:{
        mainDocuments(state){
            return state.mainDocuments;
        }
    },
    actions:{
        async loadMainDocuments(context,payload){
            try {
                const {data: responseData} = await finAgent.get(`/front/job_results?page=${payload.page}&per_page=${payload.itemsPerPage}`);
                const mainDocuments = []
                var mainDocumentsData = responseData.data;
                for (const item of mainDocumentsData) {
                    const mainDocument= {
                        ...item
                    }
                    jobs.push(mainDocuments); 
                }
                
                context.commit('setMainDocuments', mainDocuments)
 
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