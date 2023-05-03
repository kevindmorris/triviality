import axios, { AxiosRequestConfig } from "axios";

class Axios {
  _axios;
  constructor() {
    this._axios = axios.create({
      baseURL: "https://opentdb.com/api.php",
    });
  }

  get(a: string, b: AxiosRequestConfig<any> | undefined) {
    return this._axios.get(a, b);
  }
}

class BaseApi {
  axios: Axios;
  base: string;

  constructor() {
    this.axios = new Axios();
    this.base = "https://opentdb.com/api.php";
  }
}

export default class Api {
  baseApi() {
    return new BaseApi();
  }

  async getQuestions(amount: number): Promise<any> {
    let response = await this.baseApi().axios.get(this.baseApi().base, {
      params: { amount: amount },
    });

    return response;
  }
}
