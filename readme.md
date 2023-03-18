<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Library_0"></a>Library</h1>
<h3 class="code-line" data-line-start=1 data-line-end=2 ><a id="In_this_favorite_project_I_want_to_implement_my_library_1"></a>In this favorite project, I want to implement my library</h3>
<h2 class="code-line" data-line-start=2 data-line-end=3 ><a id="Method__Usege_2"></a>Method &amp; Usege</h2>
<ul>
<li class="has-line-data" data-line-start="4" data-line-end="5">$(selector) – initialization</li>
</ul>
<pre><code class="has-line-data" data-line-start="6" data-line-end="8">$(selector)
</code></pre>
<hr>
<ul>
<li class="has-line-data" data-line-start="8" data-line-end="9">$(selector).show() – show selector</li>
</ul>
<pre><code class="has-line-data" data-line-start="10" data-line-end="12">$(selector).show()
</code></pre>
<hr>
<ul>
<li class="has-line-data" data-line-start="12" data-line-end="13">$(selector).hide() – hidden selector</li>
</ul>
<pre><code class="has-line-data" data-line-start="14" data-line-end="16">$(selector).hide()
</code></pre>
<hr>
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">$(selector).toggleDisplay() – hidden selector if it’s showing and vice versa</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">$(selector).toggleDisplay()</code></pre>
<hr>
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">$("selector").addClass("className-1", "className-2", ...); – add class name for elements</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">$("selector").addClass("className-1", "className-2");</code></pre>
<hr>
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">$("selector").removeClass("className-1", "className-2", ...); – remove class name in elements</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">$("selector").removeClass("className-1", "className-2");</code></pre>
<hr>
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">$("selector").toggleClass("className"); – toggleClass class name in element</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">$("selector").toggleClass("className");</code></pre>
<hr>
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">$("selector").containsClass("className"); – returns true if the list contains a class</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">$("selector").containsClass("className");</code></pre>
<hr>
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">$("selector").on(handler, callback); – add handler event for element</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">$("selector").on(handler, callback);</code></pre>
<hr>
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">$("selector").off(handler, callback); – remove event on element</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">$("selector").off(handler, callback);</code></pre>
<hr>
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">$("selector").click( callback ); – added callback event at click for element</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">$("selector").click( callback );</code></pre>
<hr>
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">$("selector").click(); – added simulation event click for element</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">$("selector").click();</code></pre>
<hr>

<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">$("selector").attr(attributeName) - retur value data attribute</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">$("selector").attr("attributeName");</code></pre>
<hr>

<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">$("selector").attr(attributeName, value) -set attribute value </li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">$("selector").attr("attributeName", "value")</code></pre>
<hr>
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">$("selector").attrRemove(attributeName) - remove attribute</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">$("selector").attrRemove("attributeName")</code></pre>
<hr>
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">$("selector").attrToggle(attributeName, valueFirst, [valueSecond]) - toggle attribute name</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">$("selector").attrToggle("attributeName", "valueFirst", ["valueSecond"])</code></pre>
<hr>
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">$("selector").html() - return html content</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">$("selector").html()</code></pre>
<hr>
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">$("selector").html(content) - change html content in elements</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">$("selector").html("content")</code></pre>
<hr>
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">$("selector").eq(numberElem) - returned required element among group </li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">$("selector").eq(1)</code></pre>
<hr>
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">$("selector").index() - returned index current element in his parent </li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">$("selector").index()</code></pre>
<hr>
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">$("selector").find(selector) - Returns the elements found by the selector among those with which you work </li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">$("selector").find(".class")</code></pre>
<hr>
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">$("selector").closest(selector) - Returns the closest elements one that finds by the given selector</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">$("selector").closest(".class")</code></pre>
<hr>
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">$("selector").sibling(selector) - Found sibling elements of the chosen selector </li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">$("selector").sibling(".class")</code></pre>
<hr>