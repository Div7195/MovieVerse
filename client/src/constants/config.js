export const API_NOTIFICATION_MESSAGES={
    loading:{
        title:'Loading..',
        message:'Data is being loaded, please wait..'
    },
    success:{
        title:'success',
        message:'Data successfully loaded'
    },
    responseFailure:{
        title:'error',
        message:'An error occurred while fetching response from the server'
    },
    requestFailure:{
        title:'error',
        message:'An error occurred while parsing request data'
    },
    networkError:{
        title:'error',
        message:'Unable to connect with the server, please check internet connectivity and try again later'
    },
    
}
export const SERVICE_URLS={
    userSignup:{
        url:'/signup',
        method:'POST'
    },
    userLogin:{
        url:'/login',
        method:'POST'
    }
}