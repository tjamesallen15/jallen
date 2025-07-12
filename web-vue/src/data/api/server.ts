export function getServerPath(path: string) {
  const apiPath = `https://tyrael.up.railway.app/${path}`
  return apiPath
}

export function getServerConfig(method?: string) {
  const config = {
    cache: 'no-store',
    method: method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa('root:1234')}`,
    },
  }

  return config
}

export function getValidatedConfig(method?: string) {
  const config = {
    method: method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa('root:1234')}`,
    },
  }

  return config
}

export function getCachedConfig(method?: string) {
  const config = {
    cache: 'force-cache',
    method: method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa('root:1234')}`,
    },
  }

  return config
}
