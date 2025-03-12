export async function fetchHomePageAPI() {
  try {
    const path = "/api/home-page";
    const BASE_URL = process.env.STRAPI_API_URL ?? "http://127.0.0.1:1337";
    const url = new URL(path, BASE_URL);
    const res = await fetch(url.href);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data = await res.json();
    return { ...data.data };
  } catch (error) {
    console.error("Error fetching home page API:", error);
    return null;
  }
}

export async function fetchNavAPI() {
  try {
    const path = "/api/navigation";
    const BASE_URL = process.env.STRAPI_API_URL ?? "http://127.0.0.1:1337";
    const url = new URL(path, BASE_URL);
    const res = await fetch(url.href);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data = await res.json();
    return { ...data.data };
  } catch (error) {
    console.error("Error fetching navigation API:", error);
    return null;
  }
}

export async function fetchCoursesAPI() {
  try {
    const path = "/api/courses-page";
    const BASE_URL = process.env.STRAPI_API_URL ?? "http://127.0.0.1:1337";
    const url = new URL(path, BASE_URL);
    const res = await fetch(url.href);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data = await res.json();
    return { ...data.data };
  } catch (error) {
    console.error("Error fetching courses API:", error);
    return null;
  }
}

export async function fetchAuthAPI() {
  try {
    const path = "/api/auth-page";
    const BASE_URL = process.env.STRAPI_API_URL ?? "http://127.0.0.1:1337";
    const url = new URL(path, BASE_URL);
    const res = await fetch(url.href);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data = await res.json();
    return { ...data.data };
  } catch (error) {
    console.error("Error fetching auth API:", error);
    return null;
  }
}

export async function getSidebarMenuItemsAPI() {
  try {
    const path = "/api/frontend-dashboard-page";
    const BASE_URL = process.env.STRAPI_API_URL ?? "http://127.0.0.1:1337";
    const url = new URL(path, BASE_URL);
    const res = await fetch(url.href);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data = await res.json();
    return { ...data.data };
  } catch (error) {
    console.error("Error fetching auth API:", error);
    return null;
  }
}