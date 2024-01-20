// import axios from 'axios';
// import { get } from 'http';
// import { config } from 'process';

// // 创建默认参数
// const defaultConfig = {
// 	timeout: 5000,
// 	baseUrl: '',
// };

// // 创建axios实例
// const axiosInstance = axios.create(defaultConfig);

// // 创建请求拦截
// // 接受两参数，一个成功一个失败
// axiosInstance.interceptors.request.use(
// 	(config) => {
// 		return config;
// 	},
// 	(error) => {
// 		return Promise.reject(error);
// 	}
// );

// // 创建响应拦截
// // 一样的参数
// axiosInstance.interceptors.response.use(
// 	(config) => {
// 		return config;
// 	},
// 	(error) => {
// 		return Promise.reject(error);
// 	}
// );

// // 封装请求
// // 接收两参数，请求地址 参数
// // get
// function httpRequestGet(url, params) {
// 	return axiosInstance
// 		.get(url, params)
// 		.then((res) => res.data)
// 		.catch();
// }
// // post
// function httpRequestPost(url, params) {
// 	return axiosInstance
// 		.post(url, params)
// 		.then((res) => res.data)
// 		.catch();
// }
// export default { httpRequestGet, httpRequestPost };

import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
// 创建默认参数
const defaultConfig = {
	timeout: 5000,
	baseUrl: '',
};

// 用类封装的好处：能让我们更好的区分哪些是公用哪些是私用等等
class Http {
	constructor() {
		this.httpInterceptorsRequest;
		this.httpInterceptorsResponse;
	}
	private static axiosInstance = axios.create(defaultConfig);

	// 请求拦截
	private httpInterceptorsRequest() {
		Http.axiosInstance.interceptors.request.use(
			(config: InternalAxiosRequestConfig) => {
				return config;
			},
			(error) => {
				return Promise.reject(error);
			}
		);
	}

	// 响应拦截
	private httpInterceptorsResponse() {
		Http.axiosInstance.interceptors.response.use(
			(response: AxiosResponse) => {
				return response;
			},
			(error) => {
				return Promise.reject(error);
			}
		);
	}

	// 封装请求
	// 接收两参数，请求地址 参数
	// get
	public httpRequestGet<T>(
		url: string,
		params: InternalAxiosRequestConfig
	): Promise<T> {
		return Http.axiosInstance
			.get(url, params)
			.then((res) => res.data)
			.catch();
	}

	// post
	public httpRequestPost<T>(
		url: string,
		params: InternalAxiosRequestConfig
	): Promise<T> {
		return Http.axiosInstance
			.post(url, params)
			.then((res) => res.data)
			.catch();
	}
}

export const http = new Http();
