export const API_URL =
  "http://localhost:4000";

export interface Project {
  id: string;
  title: string;
  short_title: string | null;
  description: string;
  details: string | null;
  category: string;
  image_url: string | null;
  technologies: string[];
  benefits: string[];
  project_url: string | null;
  demo_url: string | null;
  featured: boolean;
  status:
    | "completed"
    | "in-progress"
    | "maintenance";
  sort_order: number;
  created_at: string;
  updated_at: string;
};
interface ProjectsResponse {
  success: boolean;
  data: Project[];
  message?: string;
}

export async function fetchProjects(): Promise<Project[]> {
  const response = await fetch(
    `${API_URL}/api/projects`
  );

  const data =
    (await response.json()) as ProjectsResponse;

  if (!response.ok || !data.success) {
    throw new Error(
      data.message ??
        "Impossible de récupérer les réalisations."
    );
  }

  return data.data;
}