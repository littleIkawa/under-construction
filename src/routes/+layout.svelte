<script lang="ts">
  import SiteHeader from "@/SiteHeader.svelte";
  import SiteFooter from "@/SiteFooter.svelte";
  import { base } from "$app/paths";
  import Analytics from "@/components/analytics/Analytics.svelte";

  const cssPath = `${base}/style/main.css`;
</script>

<!-- layoutを使っているが現状意味があまりない. 複数ページになったときのため残す -->
<svelte:head>
  <link rel="stylesheet" href={cssPath} />
</svelte:head>

<Analytics />

<SiteHeader />
<slot />
<SiteFooter />
