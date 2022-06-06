import axios from 'axios';

const BaseUrl = 'https://localhost:44367/api';
const AuthUrl = 'http://localhost:25004/jwt';

//https://localhost:44367/api/UserApplications/UserId/5
axios.interceptors.request.use(function (config) {
    let localStorageData :any= localStorage.getItem('user');
    if (localStorageData) {
        localStorageData = JSON.parse(localStorageData);
        let token = 'Bearer ' + localStorageData.response.jwtToken ;
        config.headers.Authorization = token;
    }
    //console.log(config);
    return config;
},(error) => {
    // trigger 'loading=false' event here
    return Promise.reject(error);
  });


axios.interceptors.response.use(function (response) {
    
    return response.data;
}, function (error) {
    if (error.response.status === 401) {
        localStorage.removeItem('data');
        window.location.href = '/login';
    } else {       
        return Promise.reject(error.response);
    }
});

export const GetUserApplicationsByUserId = (input:any) => {
    //console.log("GetUserApplicationsByUserId api call ->", input);
    return axios.get<any>(`https://localhost:44367/api/UserApplications/UserId/`+input);
}



export const GetUserApplicationsAdmin = () => {
    //console.log("GetUserApplicationsByUserId api call ->", input);
    return axios.get<any>(`https://localhost:44367/api/UserApplications/List`);
}


export const GetUserApplicationsAdminOutward = () => {
    //console.log("GetUserApplicationsByUserId api call ->", input);
    return axios.get<any>(`https://localhost:44367/api/UserApplications/List`);
}
export const GetUserApplicationsAdminInwardSearch = (data:any) => {
    //console.log("GetUserApplicationsByUserId api call ->", input);
    return axios.get<any>(`https://localhost:44367/api/UserApplications/SearchList?ApplicationNumber=${data.ApplicationNumber}&ApplicationTypeId=${data.ApplicationTypeId}&CivilId=${data.CivilId}&ApplicationStatusId=${data.ApplicationStatusId}&EmployeeName=${data.EmployeeName}&FromDate=${data.FromDate}&ToDate=${data.ToDate}`);
}

export const DeleteUserApplicationById = (id:any) => {
    //console.log("deletePost api call ->", id);
    return axios.delete(`${BaseUrl}/posts/${id}`, id);
}








export const createPost = (data:any) => {
    //console.log("createPost api call ->", data);
    return axios.post(`${BaseUrl}/posts`, data);
}

export const editPost = (data:any) => {
    //console.log("editPost api call ->", data);
    return axios.put(`${BaseUrl}/posts`, data);
}

export const deletePost = (id:any) => {
    //console.log("deletePost api call ->", id);
    return axios.delete(`${BaseUrl}/posts/${id}`, id);
}
