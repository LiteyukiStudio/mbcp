import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.DpC1ZpOZ.js";const E=JSON.parse('{"title":"mbcp.mp_math.point","description":"","frontmatter":{"title":"mbcp.mp_math.point","lastUpdated":false},"headers":[],"relativePath":"en/api/mp_math/point.md","filePath":"en/api/mp_math/point.md"}'),e={name:"en/api/mp_math/point.md"},h=t('<h1 id="module-mbcp-mp-math-point" tabindex="-1"><strong>Module</strong> <code>mbcp.mp_math.point</code> <a class="header-anchor" href="#module-mbcp-mp-math-point" aria-label="Permalink to &quot;**Module** `mbcp.mp_math.point`&quot;">​</a></h1><p>本模块定义了三维空间中点的类。</p><h3 id="class-point3" tabindex="-1"><em><strong>class</strong></em> <code>Point3</code> <a class="header-anchor" href="#class-point3" aria-label="Permalink to &quot;***class*** `Point3`&quot;">​</a></h3><h4 id="method-init-self-x-float-y-float-z-float" tabindex="-1"><em><strong>method</strong></em> <code>__init__(self, x: float, y: float, z: float)</code> <a class="header-anchor" href="#method-init-self-x-float-y-float-z-float" aria-label="Permalink to &quot;***method*** `__init__(self, x: float, y: float, z: float)`&quot;">​</a></h4><p><strong>Description</strong>: 笛卡尔坐标系中的点。</p><p><strong>Arguments</strong>:</p><blockquote><ul><li>x (<a href="https://docs.python.org/3/library/functions.html#float" target="_blank" rel="noreferrer"><code>float</code></a>): x 坐标</li><li>y (<code>float</code>): y 坐标</li><li>z (<code>float</code>): z 坐标</li></ul></blockquote><details><summary><b>Source code</b> or <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/point.py#L15" target="_blank">View on GitHub</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __init__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, x: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, y: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, z: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.z </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> z</span></span></code></pre></div></details><h4 id="method-approx-self-other-point3-epsilon-float-approx-bool" tabindex="-1"><em><strong>method</strong></em> <code>approx(self, other: Point3, epsilon: float = APPROX) -&gt; bool</code> <a class="header-anchor" href="#method-approx-self-other-point3-epsilon-float-approx-bool" aria-label="Permalink to &quot;***method*** `approx(self, other: Point3, epsilon: float = APPROX) -&gt; bool`&quot;">​</a></h4><p><strong>Description</strong>: 判断两个点是否近似相等。</p><p><strong>Arguments</strong>:</p><blockquote><ul><li>other (<a href="./point.html#class-point3"><code>Point3</code></a>): 另一个点</li><li>epsilon (<a href="https://docs.python.org/3/library/functions.html#float" target="_blank" rel="noreferrer"><code>float</code></a>): 误差</li></ul></blockquote><p><strong>Return</strong>: <a href="https://docs.python.org/3/library/functions.html#bool" target="_blank" rel="noreferrer"><code>bool</code></a>: 是否近似相等</p><details><summary><b>Source code</b> or <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/point.py#L27" target="_blank">View on GitHub</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> approx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, other: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Point3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, epsilon: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">float</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">APPROX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">abs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> other.x) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> epsilon, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">abs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> other.y) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> epsilon, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">abs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.z </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> other.z) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> epsilon])</span></span></code></pre></div></details><p><code>@overload</code></p><h4 id="method-self-other-vector3-point3" tabindex="-1"><em><strong>method</strong></em> <code>self + other: Vector3 =&gt; Point3</code> <a class="header-anchor" href="#method-self-other-vector3-point3" aria-label="Permalink to &quot;***method*** `self + other: Vector3 =&gt; Point3`&quot;">​</a></h4><details><summary><b>Source code</b> or <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/point.py#L47" target="_blank">View on GitHub</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@overload</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __add__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, other: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Vector3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Point3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    ...</span></span></code></pre></div></details><p><code>@overload</code></p><h4 id="method-self-other-point3-point3" tabindex="-1"><em><strong>method</strong></em> <code>self + other: Point3 =&gt; Point3</code> <a class="header-anchor" href="#method-self-other-point3-point3" aria-label="Permalink to &quot;***method*** `self + other: Point3 =&gt; Point3`&quot;">​</a></h4><details><summary><b>Source code</b> or <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/point.py#L51" target="_blank">View on GitHub</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@overload</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __add__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, other: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Point3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Point3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    ...</span></span></code></pre></div></details><h4 id="method-self-other" tabindex="-1"><em><strong>method</strong></em> <code>self + other</code> <a class="header-anchor" href="#method-self-other" aria-label="Permalink to &quot;***method*** `self + other`&quot;">​</a></h4><p><strong>Description</strong>: P + V -&gt; P P + P -&gt; P</p><p><strong>Arguments</strong>:</p><blockquote><ul><li>other (<a href="./vector.html#class-vector3"><code>Vector3</code></a> | <a href="./point.html#class-point3"><code>Point3</code></a>): 另一个点或向量</li></ul></blockquote><p><strong>Return</strong>: <a href="./point.html#class-point3"><code>Point3</code></a>: 新的点</p><details><summary><b>Source code</b> or <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/point.py#L54" target="_blank">View on GitHub</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __add__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, other):</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Point3(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> other.x, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> other.y, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.z </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> other.z)</span></span></code></pre></div></details><h4 id="method-eq-self-other" tabindex="-1"><em><strong>method</strong></em> <code>__eq__(self, other)</code> <a class="header-anchor" href="#method-eq-self-other" aria-label="Permalink to &quot;***method*** `__eq__(self, other)`&quot;">​</a></h4><p><strong>Description</strong>: 判断两个点是否相等。</p><p><strong>Arguments</strong>:</p><blockquote><ul><li>other (<a href="./point.html#class-point3"><code>Point3</code></a>): 另一个点</li></ul></blockquote><p><strong>Return</strong>: <a href="https://docs.python.org/3/library/functions.html#bool" target="_blank" rel="noreferrer"><code>bool</code></a>: 是否相等</p><details><summary><b>Source code</b> or <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/point.py#L65" target="_blank">View on GitHub</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __eq__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, other):</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> approx(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.x, other.x) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> approx(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.y, other.y) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> approx(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.z, other.z)</span></span></code></pre></div></details><h4 id="method-self-other-point3-vector3" tabindex="-1"><em><strong>method</strong></em> <code>self - other: Point3 =&gt; Vector3</code> <a class="header-anchor" href="#method-self-other-point3-vector3" aria-label="Permalink to &quot;***method*** `self - other: Point3 =&gt; Vector3`&quot;">​</a></h4><p><strong>Description</strong>: P - P -&gt; V</p><p>P - V -&gt; P 已在 <a href="./vector.html#class-vector3"><code>Vector3</code></a> 中实现</p><p><strong>Arguments</strong>:</p><blockquote><ul><li>other (<a href="./point.html#class-point3"><code>Point3</code></a>): 另一个点</li></ul></blockquote><p><strong>Return</strong>: <a href="./vector.html#class-vector3"><code>Vector3</code></a>: 新的向量</p><details><summary><b>Source code</b> or <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/point.py#L75" target="_blank">View on GitHub</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __sub__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, other: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Point3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Vector3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .vector </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Vector3</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Vector3(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> other.x, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> other.y, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.z </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> other.z)</span></span></code></pre></div></details>',39),n=[h];function l(p,o,r,k,d,g){return a(),i("div",null,n)}const y=s(e,[["render",l]]);export{E as __pageData,y as default};
