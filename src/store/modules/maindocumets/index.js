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
        },
        createMainDocument(state, payload){
            state.mainDocuments.push(payload)
        }

    },
    getters:{
        getMainDocuments(state){
            return state.mainDocuments;
        }
    },
    actions:{
        async loadMainDocuments(context){
            try {
                const {data: responseData} = await finAgent.get(`/documents`);
                const mainDocuments = []
                var mainDocumentsData = responseData.data;
                for (const item of mainDocumentsData) {
                    const mainDocument= {
                        ...item
                    }
                    mainDocuments.push(mainDocument); 
                }
                
                context.commit('setMainDocuments', mainDocuments)
 
            } catch (err) {
                //console.log(err.response);
                const error = new Error(
                    err.response.data.error || 'Failed to fetch'
                );
                throw error;
             } 
        },
        async createMainDocuments(context,payload){
            try{
                var data = {document: payload}
                console.log(data)
                const {data:responseData} = await finAgent.post('/documents', data)
                if (responseData){
                    context.commit('createMainDocument', payload)
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