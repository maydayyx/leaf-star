<template>
  <div class="mx-auto w-full max-w-2xl">
    <div class="prose prose-sm md:prose-base mx-auto">
      <figure class="w-full">
        <img
          loading="lazy"
          src="../../assets/img/avatar.jpg"
          class="border-base-content bg-base-300 rounded-box border border-opacity-5"
          alt="How to make a bidirectional site using Tailwind CSS and daisyUI"
        />
      </figure>
      <div>
        <div class="text-base-content/60 mb-2 text-xs">
          <span title="1 Mar 2024" class="italic">Published last month</span> by
          <span>Pouya Saadeghi</span>
        </div>
        <h2 >How to make a bidirectional site using Tailwind CSS and daisyUI</h2>
        <p>
          Learn how to use CSS logical properties to make a bidirectional
          website using Tailwind CSS and daisyUI
        </p>
        <p data-svelte-h="svelte-19xq7zx">
          For years, making a bidirectional website was a pain. We had to make a
          LTR style first, then we had to override all the directional styles to
          make it RTL. But with the introduction of CSS logical properties, it’s
          now easier than ever to make a bidirectional website.
        </p>
        <h2 id="css-logical-properties" data-svelte-h="svelte-1jtwg9g">
          <a aria-hidden="true" tabindex="-1" href="#css-logical-properties"
            ><span
              class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"
              >#</span
            ></a
          >CSS Logical Properties
        </h2>
        <p data-svelte-h="svelte-9t8o3v">
          <a
            href="https://web.dev/learn/css/logical-properties"
            rel="nofollow"
            target="_blank"
            >CSS logical properties</a
          >
          are a set of properties that are used to define the logical direction
          of the content, rather than the physical direction.
        </p>
        <p data-svelte-h="svelte-4lcsaa">
          To use CSS logical properties, you just need to replace directional
          properties with logical properties. For example, instead of using
          <code>margin-left</code>, you can use
          <code>margin-inline-start</code>. This way, the margin will be on the
          start side of the content, regardless of the direction of the content.
        </p>
        <h2
          id="its-even-easier-with-tailwind-css-and-daisyui"
          data-svelte-h="svelte-dmhadb"
        >
          <a
            aria-hidden="true"
            tabindex="-1"
            href="#its-even-easier-with-tailwind-css-and-daisyui"
            ><span
              class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"
              >#</span
            ></a
          >It’s even easier with Tailwind CSS and daisyUI
        </h2>
        <p data-svelte-h="svelte-1txfz5p">
          <a
            href="https://tailwindcss.com/blog/tailwindcss-v3-3#simplified-rtl-support-with-logical-properties"
            rel="nofollow"
            target="_blank"
            >Tailwind CSS (3.3+) already supports CSS logical properties</a
          >. This means that you can use logical properties in your Tailwind CSS
          classes.
        </p>
        <p data-svelte-h="svelte-1sucd88">
          And
          <a
            href="https://github.com/saadeghi/daisyui/discussions/2507"
            rel="nofollow"
            target="_blank"
            >daisyUI 4</a
          >
          fully adapts to the logical properties and makes it even easier to
          make a bidirectional website.
        </p>
        <p data-svelte-h="svelte-170rced">
          All daisyUI components are now bidirectional by default. It means we
          don’t use <code>left</code> or <code>right</code> anymore, we use
          <code>start</code> and <code>end</code> instead and it will
          automatically adapt to the direction of the content.
        </p>
        <h2 id="step-1" data-svelte-h="svelte-1k4cc72">
          <a aria-hidden="true" tabindex="-1" href="#step-1"
            ><span
              class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"
              >#</span
            ></a
          >Step 1
        </h2>
        <p data-svelte-h="svelte-18civyb">
          You need to use Tailwind CSS logical class names instead of
          directional class names.<br />
          Here’s a list of some of the most common logical class names.
        </p>
        <table data-svelte-h="svelte-19p24es">
          <thead>
            <tr>
              <th>❌ Don’t use</th>
              <th>✅ Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>left-*</code></td>
              <td><code>start-*</code></td>
            </tr>
            <tr>
              <td><code>right-*</code></td>
              <td><code>end-*</code></td>
            </tr>
            <tr>
              <td><code>ml-*</code></td>
              <td><code>ms-*</code></td>
            </tr>
            <tr>
              <td><code>mr-*</code></td>
              <td><code>me-*</code></td>
            </tr>
            <tr>
              <td><code>pl-*</code></td>
              <td><code>ps-*</code></td>
            </tr>
            <tr>
              <td><code>pr-*</code></td>
              <td><code>pe-*</code></td>
            </tr>
          </tbody>
        </table>
        <p data-svelte-h="svelte-sx3mxq">
          You can find the full list in the
          <a
            href="https://tailwindcss.com/blog/tailwindcss-v3-3#simplified-rtl-support-with-logical-properties"
            rel="nofollow"
            target="_blank"
            >Tailwind CSS blog</a
          >.
        </p>
        <h2 id="step-2" data-svelte-h="svelte-nltxp5">
          <a aria-hidden="true" tabindex="-1" href="#step-2"
            ><span
              class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"
              >#</span
            ></a
          >Step 2
        </h2>
        <p data-svelte-h="svelte-13m7be3">
          Add <code>dir=rtl</code> to the root element of your website for RTL
          languages. This will automatically change the direction of the content
          based on the language of the content.
        </p>
        <h2 id="step-3" data-svelte-h="svelte-aeyuvc">
          <a aria-hidden="true" tabindex="-1" href="#step-3"
            ><span
              class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"
              >#</span
            ></a
          >Step 3
        </h2>
        <p data-svelte-h="svelte-hohbl4">
          That’s it! Now whenever your website is RTL, all spacing and
          alignments will be automatically adjusted to the RTL direction.
          daisyUI components are bidirectional by default, so you don’t need to
          do anything else.
        </p>
        <h2 id="conclusion" data-svelte-h="svelte-1bec0y6">
          <a aria-hidden="true" tabindex="-1" href="#conclusion"
            ><span
              class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"
              >#</span
            ></a
          >Conclusion
        </h2>
        <p data-svelte-h="svelte-q5tbxy">
          Making a bidirectional website is now easier than ever.<br />
          Try to make it a habit to use logical class names (like
          <code>ps-4</code> ,<code>ms-4</code>,…) instead of directional class
          names (like <code>pl-4</code>, <code>ml-4</code>,… ) in your CSS and
          you’ll see how easy it is to make a bidirectional website.
        </p>
      </div>
      <div class="mb-2 flex flex-wrap gap-2 text-xs opacity-60">
        <span data-svelte-h="svelte-1j0hbyd">Tags:</span>
        <a class="link" href="/blog/tag/daisyui">daisyUI </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
</script>

<style lang="scss" scoped></style>
