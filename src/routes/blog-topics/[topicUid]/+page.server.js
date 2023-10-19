import { createClient } from "$lib/prismicio";

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, request, params }) {
  let topic = "monwest";

  if (params.topicUid) topic = params.topicUid;

  const client = createClient({ fetch, request });

  const topics = await client.getAllByType("topic");
  const document = await client.getByUID("topic", topic, {
    fetchLinks: [
      "topic.title",
      "topic.sub_title",
      "topic.intro",
      "topic.emoji",
    ],
  });
  const getNextTopic =
    topics[topics.findIndex((o) => o.uid === document.uid) + 1] !== undefined
      ? topics[topics.findIndex((o) => o.uid === document.uid) + 1]
      : topics[0];

  document.next_topic = getNextTopic;
  return document;
}
