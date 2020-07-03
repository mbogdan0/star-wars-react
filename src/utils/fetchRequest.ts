
export const fetchRequest = (url: string): Promise<any[]> => {
  const cache = localStorage.getItem(url);
  if (cache) {
    return Promise.resolve(JSON.parse(cache));
  }
  const request = async (url: string) => {
    let nextPage = url;
    const results: any[] = [];
    let dataResult;
    do {
      await fetch(nextPage)
        .then((response) => {
          if (!response.ok) {
            throw response;
          }
          return response.json();
        })
        .then((json) => {
          nextPage = json.next || null;
          if (json.results) {
            results.push(...json.results);
          } else {
            dataResult = json;
          }
          return results;
        });
    } while (nextPage);
    return dataResult || results;
  };
  return request(url).then((results) => {
    localStorage.setItem(url, JSON.stringify(results));
    return results;
  })
}
