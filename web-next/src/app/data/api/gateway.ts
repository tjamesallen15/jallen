export async function getServerData(path: string) {
  const apiPath = `https://tyrael.up.railway.app/${path}`;

  const response = await fetch(apiPath, {
    cache: 'no-store',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa('root:1234')}`,
    },
  });
  
  const data = await (response.json());
  return data;
}

export async function getValidateData(path: string, sec?: number) {
  const apiPath = `https://tyrael.up.railway.app/${path}`;

  const response = await fetch(apiPath, {
    next: {
      revalidate: sec || 600,
    },
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa('root:1234')}`,
    },
  });
  
  const data = await (response.json());
  return data;
}

export async function getCachedData(path: string) {
  const apiPath = `https://tyrael.up.railway.app/${path}`;

  const response = await fetch(apiPath, {
    cache: 'force-cache',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa('root:1234')}`,
    },
  });
  
  const data = await (response.json());
  return data;
}

