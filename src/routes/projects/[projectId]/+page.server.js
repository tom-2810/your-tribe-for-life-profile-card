import { createClient } from "$lib/prismicio";

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, request, params }) {
  let project = "monwest";

  if (params.projectId) project = params.projectId;

  const client = createClient({ fetch, request });

  const projects = await client.getAllByType("project");
  const document = await client.getByUID("project", project, {
    fetchLinks: ["project.title", "project.hero_image"],
  });

  const getNextProject =
    projects[projects.findIndex((o) => o.uid === document.uid) + 1] !== undefined
      ? projects[projects.findIndex((o) => o.uid === document.uid) + 1]
      : projects[0];

  document.next_project = getNextProject;

  return document;
}
