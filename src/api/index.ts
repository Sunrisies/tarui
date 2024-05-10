import { http } from "./http";
export interface Article {
  id: number;
  title: string;
  cover: string;
  author: string;
  content: string;
  category: string;
  tags: string;
  status: string;
  publishTime: Date;
  updateTime: Date;
  views: number;
  isTop: boolean;
  isRecommend: boolean;
  isDelete: boolean;
  isPublish: boolean;
  isHide: boolean;
  publish_time: "1972-05-12",
  update_time: "2020-05-11 20:15:30",
  is_top: "true",
  is_recommend: "true",
  is_delete: "true",
  is_publish: "true",
  is_hide: "false",
}
// 获取文章列表
export const getArticleListApi = () => {
  return http.get<Article[]>("/api/article");
};

// 获取文章详情
export const getArticleDetailApi = (id: number) => {
  return http.get<Article>(`/api/article/${id}`);
};

// 发布文章
export const publishArticleApi = (data: Article) => {
  return http.post<Article>("/api/article", data);
}