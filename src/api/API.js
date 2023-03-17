import axios from "axios";

const instance = axios.create({
   withCredentials: true,
   baseURL : `https://social-network.samuraijs.com/api/1.0/`,
   headers: { "API-KEY" : "89068660-bedd-4d79-b650-5a8eaa38ad97"}
})

export const usersAPI = {
   getUsers (currentPage=1,pageSize=5) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
          .then(response => response.data)
   },
   follow(userId) {
      return instance.post(`follow/${userId}`)
   },
   unfollow(userId) {
      return instance.delete(`follow/${userId}`)
   },
   getProfile (userId) {
     return  instance.get(`profile/`+ userId)
   }
}
export const profileAPI = {
   getStatus (userId) {
      return  instance.get(`/profile/status/`+ userId)
   },
   updateStatus (status) {
      return  instance.put(`/profile/status`, {status})
   },
}

export const authAPI = {
   me () {
      return instance.get(`auth/me`,)
   },
   login (email, password, rememberMe) {
      return instance.post(`auth/login`,{email, password, rememberMe})
   },
   logout () {
      return instance.delete(`auth/login`,)
   },
}


