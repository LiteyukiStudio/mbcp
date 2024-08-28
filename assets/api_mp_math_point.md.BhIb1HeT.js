import{_ as s,c as i,o as a,a2 as l}from"./chunks/framework.BV61Qrc0.js";const y=JSON.parse('{"title":"mbcp.mp_math.point","description":"","frontmatter":{"title":"mbcp.mp_math.point"},"headers":[],"relativePath":"api/mp_math/point.md","filePath":"api/mp_math/point.md"}'),t={name:"api/mp_math/point.md"},n=l(`<h3 id="class-point3" tabindex="-1"><em><strong>class</strong></em> <code>Point3</code> <a class="header-anchor" href="#class-point3" aria-label="Permalink to &quot;***class*** \`Point3\`&quot;">​</a></h3><ul><li><h4 id="def-init-self-x-float-y-float-z-float" tabindex="-1"><em>def</em> <code>__init__(self, x: float, y: float, z: float)</code> <a class="header-anchor" href="#def-init-self-x-float-y-float-z-float" aria-label="Permalink to &quot;*def* \`__init__(self, x: float, y: float, z: float)\`&quot;">​</a></h4></li></ul><p>笛卡尔坐标系中的点。</p><p>参数:</p><p>x: x 坐标</p><p>y: y 坐标</p><p>z: z 坐标</p><ul><li><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h1></li></ul><details><summary>源码</summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __init__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, x: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, y: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, z: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        笛卡尔坐标系中的点。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        Args:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            x: x 坐标</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            y: y 坐标</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            z: z 坐标</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.z </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> z</span></span></code></pre></div></details><ul><li><h4 id="def-approx-self-other-point3-epsilon-float-approx" tabindex="-1"><em>def</em> <code>approx(self, other: &#39;Point3&#39;, epsilon: float = APPROX)</code> <a class="header-anchor" href="#def-approx-self-other-point3-epsilon-float-approx" aria-label="Permalink to &quot;*def* \`approx(self, other: &#39;Point3&#39;, epsilon: float = APPROX)\`&quot;">​</a></h4></li></ul><p>判断两个点是否近似相等。</p><p>参数:</p><p>other:</p><p>epsilon:</p><ul><li><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-label="Permalink to &quot;&quot;">​</a></h1></li></ul><details><summary>源码</summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> approx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, other: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Point3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, epsilon: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">float</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">APPROX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        判断两个点是否近似相等。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        Args:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            other:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            epsilon:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        Returns:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            是否近似相等</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">abs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> other.x) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> epsilon, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">abs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> other.y) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> epsilon, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">abs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.z </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> other.z) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> epsilon])</span></span></code></pre></div></details><ul><li><h4 id="def-str-self" tabindex="-1"><em>def</em> <code>__str__(self)</code> <a class="header-anchor" href="#def-str-self" aria-label="Permalink to &quot;*def* \`__str__(self)\`&quot;">​</a></h4></li><li><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-label="Permalink to &quot;&quot;">​</a></h1></li></ul><details><summary>源码</summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __str__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Point3(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.y</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.z</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)&#39;</span></span></code></pre></div></details><ul><li><h4 id="overload" tabindex="-1"><code>@overload</code> <a class="header-anchor" href="#overload" aria-label="Permalink to &quot;\`@overload\`&quot;">​</a></h4></li><li><h4 id="def-add-self-other-vector3" tabindex="-1"><em>def</em> <code>__add__(self, other: &#39;Vector3&#39;)</code> <a class="header-anchor" href="#def-add-self-other-vector3" aria-label="Permalink to &quot;*def* \`__add__(self, other: &#39;Vector3&#39;)\`&quot;">​</a></h4></li><li><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-label="Permalink to &quot;&quot;">​</a></h1></li></ul><details><summary>源码</summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@overload</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __add__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, other: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Vector3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Point3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    ...</span></span></code></pre></div></details><ul><li><h4 id="overload-1" tabindex="-1"><code>@overload</code> <a class="header-anchor" href="#overload-1" aria-label="Permalink to &quot;\`@overload\`&quot;">​</a></h4></li><li><h4 id="def-add-self-other-point3" tabindex="-1"><em>def</em> <code>__add__(self, other: &#39;Point3&#39;)</code> <a class="header-anchor" href="#def-add-self-other-point3" aria-label="Permalink to &quot;*def* \`__add__(self, other: &#39;Point3&#39;)\`&quot;">​</a></h4></li><li><h1 id="-4" tabindex="-1"><a class="header-anchor" href="#-4" aria-label="Permalink to &quot;&quot;">​</a></h1></li></ul><details><summary>源码</summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@overload</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __add__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, other: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Point3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Point3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    ...</span></span></code></pre></div></details><ul><li><h4 id="def-add-self-other" tabindex="-1"><em>def</em> <code>__add__(self, other)</code> <a class="header-anchor" href="#def-add-self-other" aria-label="Permalink to &quot;*def* \`__add__(self, other)\`&quot;">​</a></h4></li></ul><p>P + V -&gt; P P + P -&gt; P</p><p>参数:</p><p>other:</p><ul><li><h1 id="-5" tabindex="-1"><a class="header-anchor" href="#-5" aria-label="Permalink to &quot;&quot;">​</a></h1></li></ul><details><summary>源码</summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __add__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, other):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        P + V -&gt; P</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        P + P -&gt; P</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        Args:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            other:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        Returns:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Point3(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> other.x, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> other.y, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.z </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> other.z)</span></span></code></pre></div></details><ul><li><h4 id="def-eq-self-other" tabindex="-1"><em>def</em> <code>__eq__(self, other)</code> <a class="header-anchor" href="#def-eq-self-other" aria-label="Permalink to &quot;*def* \`__eq__(self, other)\`&quot;">​</a></h4></li></ul><p>判断两个点是否相等。</p><p>参数:</p><p>other:</p><ul><li><h1 id="-6" tabindex="-1"><a class="header-anchor" href="#-6" aria-label="Permalink to &quot;&quot;">​</a></h1></li></ul><details><summary>源码</summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __eq__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, other):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        判断两个点是否相等。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        Args:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            other:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        Returns:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> approx(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.x, other.x) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> approx(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.y, other.y) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> approx(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.z, other.z)</span></span></code></pre></div></details>`,34),h=[n];function e(p,k,d,r,o,E){return a(),i("div",null,h)}const g=s(t,[["render",e]]);export{y as __pageData,g as default};
