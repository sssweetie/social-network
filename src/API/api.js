import React from "react";
import * as axios from "axios";
const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "0086f8be-cdf1-4d9f-b77f-025c4385c376",
  },
});
export const apiAxios = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  followUser(id) {
    return instance.post(`follow/${id}`);
  },
  unfollowUser(id) {
    return instance.delete(`follow/${id}`);
  },
  getUserProfile(id) {
    return instance.get(`profile/${id}`).then((response) => response.data);
  },
  loginUser() {
    return instance.get(`auth/me`).then((response) => response);
  },
};
