<script lang="ts">
  import { base } from "$app/paths";
  import type { ArticleAttribute } from "$lib/articles";
  import ArticleTag from "./ArticleTag.svelte";

  export let metadata: ArticleAttribute;

  const { id, title, thumbnail, date, tags } = metadata;

  const thumbnailPath = `${base}/blog/thumb/${thumbnail}`;

  const dateText = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
</script>

<a class="article-link" href={`${base}/blog/${id}`}>
  <div class="article-card">
    <div class="img-container">
      <img src={thumbnailPath} alt="thumbnail" />
    </div>
    <div class="card-contents">
      <h2>{title}</h2>
      <span>{dateText}</span>
      <div class="tag-container">
        {#each tags as tag}
          <ArticleTag {tag} />
        {/each}
      </div>
    </div>
  </div>
</a>

<style>
  /* このリンクの親はグリッドボックスである前提なので, その大きさ指定やgap等の影響を受ける. */
  .article-link {
    display: block;
    width: 100%;
    border: 1px solid darkslateblue;
    border-radius: 5px;
    background-color: rgba(240, 255, 255, 0.6);
    overflow: hidden;
    margin: 2rem 0;
  }
  .article-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .article-card:hover {
    background-color: darkslateblue;
    color: azure;
  }
  .img-container {
    border: 4px solid darkslateblue;
    width: 100%;
    height: 20rem;
    clip: rect(0, 0, 0, 0);
  }
  .img-container > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .card-contents {
    padding: 1rem 2rem;
  }
  .tag-container {
    display: flex;
    flex-wrap: wrap;
    margin: 1rem auto;
  }
</style>
