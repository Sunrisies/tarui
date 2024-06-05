import { fetch, Body, Response } from "@tauri-apps/api/http";
// 使用tauri-apps/api/http模块进行http请求 封装成一个类
interface ApiResponseData <D> {
  code: number;
  message: string;
  data: D;
  total?: number;
  pageSize?: number;
  page?: number;
}
// const apiUrl = "http://localhost:3000";
const apiUrl = "http://123.207.197.182:80";
class Http {
  async get<D>(url: string, params?: any) {
    console.log(url, params);
    const response = await fetch(`${apiUrl}${url}`, {
      method: "GET",
    });
    return this.handleResponse(response) as ApiResponseData<D>;
  }

  async post<D>(url: string, body: object) {
    const response = await fetch(`${apiUrl}${url}`, {
      method: "POST",
      body: Body.json(body),
    });
    return this.handleResponse(response) as ApiResponseData<D>;
  }
  private handleResponse<T>(response: Response<T>): ApiResponseData<T> {  
    if (!response.ok) {  
      throw new Error(`请求失败`);  
    }  
    return response.data as ApiResponseData<T>;
  }  

//   private handleResponse<T>(response: Response<T>){
//     if (!response.ok) {
//       throw new Error("请求失败");
//     }
//     console.log(JSON.stringify(response));
//     return response.data;
//   }
}
export const http = new Http();
