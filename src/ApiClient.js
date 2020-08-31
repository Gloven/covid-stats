class ApiClient {
  constructor() {
    this.apiUrl = 'https://api.covid19api.com';
  }

  get(query = '') {
    return this.request({ query, method: 'GET' });
  }

  async request(params = {}) {
    const { query, method } = params;

    const url = `${this.apiUrl}/${query}`;

    try {
      const response = await fetch(url, { method });
      return await response.json();
    } catch (error) {
      console.error(error);
      return new Error(error);
    }
  }
}

export default ApiClient;
