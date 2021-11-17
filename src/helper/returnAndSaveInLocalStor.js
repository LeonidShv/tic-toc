export default async function returnAndSaveInLocalStor(localStorKey, apiCallBack, id = '') {
  let data;
  // I have only 100 free requests, localStorage can solve this problem

  if (localStorage.getItem(localStorKey)) {
    data = JSON.parse(localStorage.getItem(localStorKey));
  } else {
    try {
      const response = await apiCallBack(id);
      data = response?.data;
    } catch (error) {
      // empty block
    }

    localStorage.setItem(localStorKey, JSON.stringify(data || []));
  }

  return data;
}
