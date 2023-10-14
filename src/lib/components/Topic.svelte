<script>
  export let topic;

  console.log(topic)
</script>

<a href=/blog-topics/{topic.uid}>
  <h3>{topic.data.title}</h3>
  <h4>{topic.data.sub_title}</h4>
  <p>{topic.data.intro}</p>
</a>
