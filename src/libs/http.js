class Http {
  static instance = new Http();

  get = async url => {
    try {
      let req = await fetch(url);
      let res = await req.json();
      return res;
    } catch (error) {
      console.log('http get error: ', error);
      throw Error(error);
    }
  };

  post = async (url, body) => {
    try {
      let req = await fetch(url, {
        method: 'POST',
        body,
      });
      let res = await req.json();
      return res;
    } catch (error) {
      console.log('http post error: ', error);
      throw Error(error);
    }
  };
}

export default Http;
