class ApiClient {
  constructor() {
    this.apiUrl = 'https://api.covid19api.com/';
  }

  get(url, query = '') {
    return this.request({ url, query, method: 'GET' });
  }

  async request(params = {}) {
    const { query, url, method } = params;

    try {
      const response = await fetch(`${this.apiUrl}${url}${query}`, { method });
      return await response.json();
    } catch (error) {
      console.error(error);
      return new Error(error);
    }
  }
}

export default ApiClient;
