import { getSession } from "@/actions/GetSession";

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


const API_PROGRESS_URL = "http://127.0.0.1:1337/api/progresses";

// Fetch session and progress data
export const fetchProgressData = async () => {
  try {
    const sessionData = await getSession();

    if (!sessionData?.user?.email) {
      return { session: null, completedSubtopics: {} };
    }

    const res = await fetch(`${API_PROGRESS_URL}?filters[user][$eq]=${sessionData.user.email}`);
    const data = await res.json();

    if (data.data && data.data.length > 0) {
      const progressEntry = data.data[0];
      return { session: sessionData, completedSubtopics: progressEntry.completedSubtopics || {} };
    }

    return { session: sessionData, completedSubtopics: {} };
  } catch (error) {
    console.error("Error fetching progress data:", error);
    return { session: null, completedSubtopics: {} };
  }
};

// Update or create progress data
export const updateProgressData = async (
  session: any,
  completedSubtopics: { [key: string]: boolean },
  subtopic: string
) => {
  if (!session?.user?.email) return completedSubtopics;

  const updatedProgress = {
    ...completedSubtopics,
    [subtopic]: true,
  };

  try {
    const res = await fetch(`${API_PROGRESS_URL}?filters[user][$eq]=${session.user.email}`);
    const data = await res.json();

    if (data.data && data.data.length > 0) {
      const existingEntry = data.data[0];

      await fetch(`${API_PROGRESS_URL}/${existingEntry.documentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          data: { completedSubtopics: updatedProgress },
        }),
      });
    } else {
      await fetch(API_PROGRESS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          data: {
            user: session.user.email,
            completedSubtopics: updatedProgress,
          },
        }),
      });
    }

    return updatedProgress; // Explicitly return the updated progress
  } catch (error) {
    console.error("Error updating progress data:", error);
    return completedSubtopics; // Return the original state if an error occurs
  }
};

export const fetchCompletedSubtopicsLength = async (): Promise<number> => {
  try {
    const response = await fetch("http://127.0.0.1:1337/api/progresses");
    if (!response.ok) {
      throw new Error(`Failed to fetch progress data: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!data?.data?.length || !data.data[0]?.completedSubtopics) {
      console.warn("Invalid API response:", data);
      return 0;
    }

    const completedSubtopics = data.data[0].completedSubtopics;
    return Object.keys(completedSubtopics).length;
  } catch (error) {
    console.error("Error fetching completed subtopics:", error);
    return 0;
  }
};
