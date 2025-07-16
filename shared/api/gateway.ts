export const getServerPath = (path: string) => {
  // return "";
  // return `http://localhost:8080/${path}`;
  return `https://tyrael.up.railway.app/${path}`;
};

export const getServerData = async (path: string) => {
  try {
    const response = await fetch(getServerPath(path), {
      // cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa("root:1234")}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error instanceof Error ? error : new Error("Unknown error occurred");
  }
};

export const saveServerData = async (path: string, body: any) => {
  try {
    const response = await fetch(getServerPath(path), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa("root:1234")}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error instanceof Error ? error : new Error("Unknown error occurred");
  }
};
