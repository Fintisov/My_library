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
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">$(selector).fadeIn(duration, [display, callback]); - matched elements by fading them to opaque</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">$("div").fadeIn(2000, "flex", () => {});</code></pre>
<hr>
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">$(selector).fadeOut(duration, [display, callback]); - matched elements by fading them to transparent</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">$("div").fadeOut(2000, "flex", () => {});</code></pre>
<hr>
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">$(selector).fadeToggle(duration, [display, callback]); - display or hide the matched elements by animating their opacity.</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">$("div").fadeToggle(2000, "flex", () => {});</code></pre>
<hr>
<hr>
<h2 class="code-line" data-line-start=2 data-line-end=3 ><a id="Method__Usege_2"></a>Components</h2>

<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">$(".selector-wrapper").dropdown(); - initialize dropDown menu on page. 
   <br> You must specify the same "id" and "data-drop-id"
</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">

    <div class="dropdown-menu">
        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuBtn-1">Drop btn</button>
        <div class="dropdown-menu__list" data-drop-id="dropdownMenuBtn-1">
            <a href="#" class="dropdown-menu__item">item #1</a>
            <a href="#" class="dropdown-menu__item">item #2</a>
            <a href="#" class="dropdown-menu__item">item #3</a>
        </div>
    </div>

    <div class="dropdown-menu">
        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuBtn-2">Drop btn</button>
        <div class="dropdown-menu__list" data-drop-id="dropdownMenuBtn-2">
            <a href="#" class="dropdown-menu__item">item #4</a>
            <a href="#" class="dropdown-menu__item">item #5</a>
            <a href="#" class="dropdown-menu__item">item #6</a>
        </div> 
    </div>

    $(".dropdown-toggle").dropdown();

</code>
</pre>

<hr>
<hr>

<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">$('[data-toggle="modal"]').modal(); - initialize Modal window on page. 
    <br> - You must specify the same in button trigger "data-target" and modal window "id". 
    <br> - You must insert attribute "data-toggle="modal" in button trigger
</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">

    <a class="card__btn btn btn-primary" data-toggle="modal" data-target="#exampleModal-1" href="#">Link to</a>

    <div class="modal" id="exampleModal-1">
        <div class="modal__dialog">
            <div class="modal__content">
                <button class="close" data-close>
                    <span>&times;</span>
                </button>
                <div class="modal__header">
                    <h4 class="modal__title">Modal title</h4>
                </div>

                <div class="modal__body">
                    Lorem ipsum dolor sit amet
                </div>
                <div class="modal__footer">
                    <button class="btn btn-danger" data-close>Close</button>
                    <button class="btn btn-success" data-close>Save changes</button>
                </div>
            </div>
        </div>
    </div>

</code>
</pre>

<hr>
<hr>

<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17"> $("#trigger").click(() => $("#trigger").createModal({text: {}, btn: {}}) - initialize dynamic Modal window on page. 
    <br> - You must specify the same in button trigger "data-target" and modal window "id".
    <br> - You must initialize the modal with the id you specified for the button
</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">

    <a class="card__btn btn btn-primary" id="trigger" data-toggle="modal" data-target="#exampleModal-1" href="#">Link to</a>

    <script>
        $("#trigger").click(() => $("#trigger").createModal({
            text: {                                 // settongs modal content 
                title: "Modal title", 
                text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae cumque eaque in ipsa
                    labore quo quod reprehenderit? Aperiam aut doloremque ea inventore vitae voluptatum? Adipisci
                    aliquid dolor error quod!`,
            },
            btn: {
                settings: [                     // settings for buttons
                [                               // settings btn #1
                    "Close",                  // text in button
                    ["btn", "btn-danger"],   // class for buttons
                    true,                   // close button this modal window or not 
                ],
            [                                          // settings btn #2
                    "Save changes",                   // text in button
                    ["btn", "btn-success", "ml-10"], // class for buttons
                    false,                          // close button this modal window or not 
                    () => {                        // cb after click on button                    
                         alert("Save changes") 
                    }
                ],
            [                                           // settings btn #3
                    "Another BTN",                     // text in button
                    ["btn", "btn-warning", "ml-10"],  // class for buttons
                    false,                           // close button this modal window or not 
                        () => {                     // cb after click on button                 
                            alert("Stop");
                        }
                    ],
                ]
            }
        }));
    </script>

</code>
</pre>

<hr>
<hr>

<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17"> $(select-tab-items).tab(); - initialize component tab.
</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">

        <div class="tab mt-20 block-center">
            <div class="tab__panel" data-tab-panel>
                <div class="tab__item tab__item--active">tab-name 1</div>
                <div class="tab__item">tab-name 2</div>
                <div class="tab__item">tab-name 3</div>
            </div>
            
            <div class="tab__content tab__content--active">
                content
            </div>
            <div class="tab__content">
                 content
            </div>
            <div class="tab__content">
                content
            </div>
        </div>

    <script>
        $("[data-tab-panel] .tab__item").tab();
    </script>

</code>
</pre>

<hr>
<hr>

<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17"> $(select-tab-items).accordion([ {headActive: "",  contentActive = ""} ]); - initialize component accordion.
    <br> - You can add your activeClass for "accordion__head" and "accordion__content";
</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">

    <div class="accordion mt-20 block-center">
        <div class="accordion__head">
            <span>Collapse second element</span>
        </div>
        <div class="accordion__content">
            <div class="accordion__inner">
                content...
            </div>
        </div>
        <div class="accordion__head">
            <span>Collapse second element</span>
        </div>
        <div class="accordion__content">
            <div class="accordion__inner">
                content...
            </div>
        </div>
    </div>

    <script>
       $(".accordion__head").accordion();
    </script>

</code>
</pre>

<hr>
<hr>

<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17"> $().get(url, [dataTypeAnswer = ""]); - create get request.
    <br>  url - url request 
    <br>  dataTypeAnswer -  type answer; 
</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">

    <script>
       $().get("https://jsonplaceholder.typicode.com/posts", "json")
            .then(res => console.log(res));
    </script>

</code>
</pre>

<hr>
<hr>

<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17"> $().get(url, [dataTypeAnswer = ""]); - create get request.
    <br>  url - url request 
    <br>  dataTypeAnswer -  type answer; 
    <br>  data - data you want to send; 
</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="20">

    <script>
       $().get("https://jsonplaceholder.typicode.com/posts", "formDate", "json")
            .then(res => console.log(res));
    </script>

</code>
</pre>