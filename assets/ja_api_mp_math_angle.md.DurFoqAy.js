import{_ as s,c as a,o as i,a4 as t}from"./chunks/framework.DpC1ZpOZ.js";const m=JSON.parse('{"title":"mbcp.mp_math.angle","description":"","frontmatter":{"title":"mbcp.mp_math.angle","lastUpdated":false},"headers":[],"relativePath":"ja/api/mp_math/angle.md","filePath":"ja/api/mp_math/angle.md"}'),e={name:"ja/api/mp_math/angle.md"},n=t('<h1 id="モジュール-mbcp-mp-math-angle" tabindex="-1"><strong>モジュール</strong> <code>mbcp.mp_math.angle</code> <a class="header-anchor" href="#モジュール-mbcp-mp-math-angle" aria-label="Permalink to &quot;**モジュール** `mbcp.mp_math.angle`&quot;">​</a></h1><p>本模块定义了角度相关的类</p><h3 id="class-angle" tabindex="-1"><em><strong>class</strong></em> <code>Angle</code> <a class="header-anchor" href="#class-angle" aria-label="Permalink to &quot;***class*** `Angle`&quot;">​</a></h3><h3 id="class-anyangle-angle" tabindex="-1"><em><strong>class</strong></em> <code>AnyAngle(Angle)</code> <a class="header-anchor" href="#class-anyangle-angle" aria-label="Permalink to &quot;***class*** `AnyAngle(Angle)`&quot;">​</a></h3><h4 id="method-init-self-value-float-is-radian-bool-false" tabindex="-1"><em><strong>method</strong></em> <code>__init__(self, value: float, is_radian: bool = False)</code> <a class="header-anchor" href="#method-init-self-value-float-is-radian-bool-false" aria-label="Permalink to &quot;***method*** `__init__(self, value: float, is_radian: bool = False)`&quot;">​</a></h4><p><strong>説明</strong>: 任意角度。</p><p><strong>引数</strong>:</p><blockquote><ul><li>value: 角度或弧度值</li><li>is_radian: 是否为弧度，默认为否</li></ul></blockquote><details><summary><b>ソースコード</b> または <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/angle.py#L17" target="_blank">GitHubで表示</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __init__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, value: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, is_radian: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">False</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> is_radian:</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.radian </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.radian </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> PI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 180</span></span></code></pre></div></details><p><a href="https://docs.python.org/3/library/functions.html#property" target="_blank" rel="noreferrer"><code>@property</code></a></p><h4 id="method-complementary-self-anyangle" tabindex="-1"><em><strong>method</strong></em> <code>complementary(self) -&gt; AnyAngle</code> <a class="header-anchor" href="#method-complementary-self-anyangle" aria-label="Permalink to &quot;***method*** `complementary(self) -&gt; AnyAngle`&quot;">​</a></h4><p><strong>説明</strong>: 余角：两角的和为90°。</p><p><strong>戻り値</strong>: 余角</p><details><summary><b>ソースコード</b> または <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/angle.py#L30" target="_blank">GitHubで表示</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> complementary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self) -&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;AnyAngle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AnyAngle(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.minimum_positive.radian, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">is_radian</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></details><p><a href="https://docs.python.org/3/library/functions.html#property" target="_blank" rel="noreferrer"><code>@property</code></a></p><h4 id="method-supplementary-self-anyangle" tabindex="-1"><em><strong>method</strong></em> <code>supplementary(self) -&gt; AnyAngle</code> <a class="header-anchor" href="#method-supplementary-self-anyangle" aria-label="Permalink to &quot;***method*** `supplementary(self) -&gt; AnyAngle`&quot;">​</a></h4><p><strong>説明</strong>: 补角：两角的和为180°。</p><p><strong>戻り値</strong>: 补角</p><details><summary><b>ソースコード</b> または <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/angle.py#L39" target="_blank">GitHubで表示</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> supplementary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self) -&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;AnyAngle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AnyAngle(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.minimum_positive.radian, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">is_radian</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></details><p><a href="https://docs.python.org/3/library/functions.html#property" target="_blank" rel="noreferrer"><code>@property</code></a></p><h4 id="method-degree-self-float" tabindex="-1"><em><strong>method</strong></em> <code>degree(self) -&gt; float</code> <a class="header-anchor" href="#method-degree-self-float" aria-label="Permalink to &quot;***method*** `degree(self) -&gt; float`&quot;">​</a></h4><p><strong>説明</strong>: 角度。</p><p><strong>戻り値</strong>: 弧度</p><details><summary><b>ソースコード</b> または <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/angle.py#L48" target="_blank">GitHubで表示</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> degree</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.radian </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 180</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> PI</span></span></code></pre></div></details><p><a href="https://docs.python.org/3/library/functions.html#property" target="_blank" rel="noreferrer"><code>@property</code></a></p><h4 id="method-minimum-positive-self-anyangle" tabindex="-1"><em><strong>method</strong></em> <code>minimum_positive(self) -&gt; AnyAngle</code> <a class="header-anchor" href="#method-minimum-positive-self-anyangle" aria-label="Permalink to &quot;***method*** `minimum_positive(self) -&gt; AnyAngle`&quot;">​</a></h4><p><strong>説明</strong>: 最小正角。</p><p><strong>戻り値</strong>: 最小正角度</p><details><summary><b>ソースコード</b> または <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/angle.py#L57" target="_blank">GitHubで表示</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> minimum_positive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self) -&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;AnyAngle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AnyAngle(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.radian </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> PI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div></details><p><a href="https://docs.python.org/3/library/functions.html#property" target="_blank" rel="noreferrer"><code>@property</code></a></p><h4 id="method-maximum-negative-self-anyangle" tabindex="-1"><em><strong>method</strong></em> <code>maximum_negative(self) -&gt; AnyAngle</code> <a class="header-anchor" href="#method-maximum-negative-self-anyangle" aria-label="Permalink to &quot;***method*** `maximum_negative(self) -&gt; AnyAngle`&quot;">​</a></h4><p><strong>説明</strong>: 最大负角。</p><p><strong>戻り値</strong>: 最大负角度</p><details><summary><b>ソースコード</b> または <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/angle.py#L66" target="_blank">GitHubで表示</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> maximum_negative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self) -&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;AnyAngle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AnyAngle(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.radian </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> PI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">is_radian</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></details><p><a href="https://docs.python.org/3/library/functions.html#property" target="_blank" rel="noreferrer"><code>@property</code></a></p><h4 id="method-sin-self-float" tabindex="-1"><em><strong>method</strong></em> <code>sin(self) -&gt; float</code> <a class="header-anchor" href="#method-sin-self-float" aria-label="Permalink to &quot;***method*** `sin(self) -&gt; float`&quot;">​</a></h4><p><strong>説明</strong>: 正弦值。</p><p><strong>戻り値</strong>: 正弦值</p><details><summary><b>ソースコード</b> または <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/angle.py#L75" target="_blank">GitHubで表示</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> math.sin(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.radian)</span></span></code></pre></div></details><p><a href="https://docs.python.org/3/library/functions.html#property" target="_blank" rel="noreferrer"><code>@property</code></a></p><h4 id="method-cos-self-float" tabindex="-1"><em><strong>method</strong></em> <code>cos(self) -&gt; float</code> <a class="header-anchor" href="#method-cos-self-float" aria-label="Permalink to &quot;***method*** `cos(self) -&gt; float`&quot;">​</a></h4><p><strong>説明</strong>: 余弦值。</p><p><strong>戻り値</strong>: 余弦值</p><details><summary><b>ソースコード</b> または <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/angle.py#L84" target="_blank">GitHubで表示</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> math.cos(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.radian)</span></span></code></pre></div></details><p><a href="https://docs.python.org/3/library/functions.html#property" target="_blank" rel="noreferrer"><code>@property</code></a></p><h4 id="method-tan-self-float" tabindex="-1"><em><strong>method</strong></em> <code>tan(self) -&gt; float</code> <a class="header-anchor" href="#method-tan-self-float" aria-label="Permalink to &quot;***method*** `tan(self) -&gt; float`&quot;">​</a></h4><p><strong>説明</strong>: 正切值。</p><p><strong>戻り値</strong>: 正切值</p><details><summary><b>ソースコード</b> または <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/angle.py#L93" target="_blank">GitHubで表示</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> math.tan(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.radian)</span></span></code></pre></div></details><p><a href="https://docs.python.org/3/library/functions.html#property" target="_blank" rel="noreferrer"><code>@property</code></a></p><h4 id="method-cot-self-float" tabindex="-1"><em><strong>method</strong></em> <code>cot(self) -&gt; float</code> <a class="header-anchor" href="#method-cot-self-float" aria-label="Permalink to &quot;***method*** `cot(self) -&gt; float`&quot;">​</a></h4><p><strong>説明</strong>: 余切值。</p><p><strong>戻り値</strong>: 余切值</p><details><summary><b>ソースコード</b> または <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/angle.py#L102" target="_blank">GitHubで表示</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> math.tan(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.radian)</span></span></code></pre></div></details><p><a href="https://docs.python.org/3/library/functions.html#property" target="_blank" rel="noreferrer"><code>@property</code></a></p><h4 id="method-sec-self-float" tabindex="-1"><em><strong>method</strong></em> <code>sec(self) -&gt; float</code> <a class="header-anchor" href="#method-sec-self-float" aria-label="Permalink to &quot;***method*** `sec(self) -&gt; float`&quot;">​</a></h4><p><strong>説明</strong>: 正割值。</p><p><strong>戻り値</strong>: 正割值</p><details><summary><b>ソースコード</b> または <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/angle.py#L111" target="_blank">GitHubで表示</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> math.cos(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.radian)</span></span></code></pre></div></details><p><a href="https://docs.python.org/3/library/functions.html#property" target="_blank" rel="noreferrer"><code>@property</code></a></p><h4 id="method-csc-self-float" tabindex="-1"><em><strong>method</strong></em> <code>csc(self) -&gt; float</code> <a class="header-anchor" href="#method-csc-self-float" aria-label="Permalink to &quot;***method*** `csc(self) -&gt; float`&quot;">​</a></h4><p><strong>説明</strong>: 余割值。</p><p><strong>戻り値</strong>: 余割值</p><details><summary><b>ソースコード</b> または <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/angle.py#L120" target="_blank">GitHubで表示</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> csc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> math.sin(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.radian)</span></span></code></pre></div></details><h4 id="method-self-other-anyangle-anyangle" tabindex="-1"><em><strong>method</strong></em> <code>self + other: AnyAngle =&gt; AnyAngle</code> <a class="header-anchor" href="#method-self-other-anyangle-anyangle" aria-label="Permalink to &quot;***method*** `self + other: AnyAngle =&gt; AnyAngle`&quot;">​</a></h4><details><summary><b>ソースコード</b> または <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/angle.py#L128" target="_blank">GitHubで表示</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __add__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, other: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;AnyAngle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;AnyAngle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AnyAngle(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.radian </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> other.radian, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">is_radian</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></details><h4 id="method-eq-self-other" tabindex="-1"><em><strong>method</strong></em> <code>__eq__(self, other)</code> <a class="header-anchor" href="#method-eq-self-other" aria-label="Permalink to &quot;***method*** `__eq__(self, other)`&quot;">​</a></h4><details><summary><b>ソースコード</b> または <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/angle.py#L131" target="_blank">GitHubで表示</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __eq__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, other):</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> approx(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.radian, other.radian)</span></span></code></pre></div></details><h4 id="method-self-other-anyangle-anyangle-1" tabindex="-1"><em><strong>method</strong></em> <code>self - other: AnyAngle =&gt; AnyAngle</code> <a class="header-anchor" href="#method-self-other-anyangle-anyangle-1" aria-label="Permalink to &quot;***method*** `self - other: AnyAngle =&gt; AnyAngle`&quot;">​</a></h4><details><summary><b>ソースコード</b> または <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/angle.py#L134" target="_blank">GitHubで表示</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __sub__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, other: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;AnyAngle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;AnyAngle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AnyAngle(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.radian </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> other.radian, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">is_radian</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></details><h4 id="method-self-other-float-anyangle" tabindex="-1"><em><strong>method</strong></em> <code>self * other: float =&gt; AnyAngle</code> <a class="header-anchor" href="#method-self-other-float-anyangle" aria-label="Permalink to &quot;***method*** `self * other: float =&gt; AnyAngle`&quot;">​</a></h4><details><summary><b>ソースコード</b> または <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/angle.py#L137" target="_blank">GitHubで表示</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __mul__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, other: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;AnyAngle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AnyAngle(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.radian </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> other, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">is_radian</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></details><p><code>@overload</code></p><h4 id="method-self-other-float-anyangle-1" tabindex="-1"><em><strong>method</strong></em> <code>self / other: float =&gt; AnyAngle</code> <a class="header-anchor" href="#method-self-other-float-anyangle-1" aria-label="Permalink to &quot;***method*** `self / other: float =&gt; AnyAngle`&quot;">​</a></h4><details><summary><b>ソースコード</b> または <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/angle.py#L147" target="_blank">GitHubで表示</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@overload</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __truediv__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, other: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;AnyAngle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    ...</span></span></code></pre></div></details><p><code>@overload</code></p><h4 id="method-self-other-anyangle-float" tabindex="-1"><em><strong>method</strong></em> <code>self / other: AnyAngle =&gt; float</code> <a class="header-anchor" href="#method-self-other-anyangle-float" aria-label="Permalink to &quot;***method*** `self / other: AnyAngle =&gt; float`&quot;">​</a></h4><details><summary><b>ソースコード</b> または <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/angle.py#L151" target="_blank">GitHubで表示</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@overload</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __truediv__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, other: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;AnyAngle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    ...</span></span></code></pre></div></details><h4 id="method-self-other" tabindex="-1"><em><strong>method</strong></em> <code>self / other</code> <a class="header-anchor" href="#method-self-other" aria-label="Permalink to &quot;***method*** `self / other`&quot;">​</a></h4><details><summary><b>ソースコード</b> または <a href="https://github.com/snowykami/mbcp/tree/main/mbcp/mp_math/angle.py#L154" target="_blank">GitHubで表示</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __truediv__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, other):</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isinstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(other, AnyAngle):</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.radian </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> other.radian</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AnyAngle(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.radian </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> other, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">is_radian</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></details>',80),h=[n];function l(p,k,r,o,d,g){return i(),a("div",null,h)}const c=s(e,[["render",l]]);export{m as __pageData,c as default};
