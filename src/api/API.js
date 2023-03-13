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
}



