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
  loginUser() {
    return instance.get(`auth/me`).then((response) => response);
  },
};
export const profileAPI = {
  getUserProfile(id) {
    return instance.get(`profile/${id}`).then((response) => response.data);
  },
  getStatus(id) {
    return instance.get(`profile/status/${id}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
};
