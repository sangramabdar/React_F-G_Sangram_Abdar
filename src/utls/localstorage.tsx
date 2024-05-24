function getDataFromStorage(): any[] {
  const keys = Object.keys(localStorage);

  const data: any[] = [];

  keys.forEach(key => {
    const t = localStorage.getItem(key) as string;
    const value = JSON.parse(t);

    const row: any = {};
    row[key] = value;

    data.push(row);
  });

  return data;
}

export { getDataFromStorage };
