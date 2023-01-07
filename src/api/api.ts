import axios from "axios";

const URL = "https://api.jikan.moe";

const AxiosSetting = axios.create({
  headers: {},
  baseURL: URL + "/v4",
});

export default class Axios {
  static get = (link: string) => AxiosSetting.get(link);

  /// *** We can use it when needed (^_^) *** ///

  //   static post = (link: string, data: object) => AxiosSetting.post(link, data);
  //   static put = (link: string, data: object) => AxiosSetting.put(link, data);
  //   static delet = (link: string, params?: string) =>
  //     AxiosSetting.delete(link, params);
}
