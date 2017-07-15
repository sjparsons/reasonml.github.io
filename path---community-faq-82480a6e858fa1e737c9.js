webpackJsonp([43],{"./node_modules/json-loader/index.js!./.cache/json/community-faq.json":function(e,t){e.exports={data:{allFile:{edges:[{node:{relativePath:"community/blog.md",childMarkdownRemark:{frontmatter:{title:"Blog",order:8}}}},{node:{relativePath:"community/articles-and-videos.md",childMarkdownRemark:{frontmatter:{title:"Articles and Videos",order:0}}}},{node:{relativePath:"community/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:1}}}},{node:{relativePath:"community/events.md",childMarkdownRemark:{frontmatter:{title:"Events",order:3}}}},{node:{relativePath:"community/index.md",childMarkdownRemark:{frontmatter:{title:"Community",order:0}}}},{node:{relativePath:"community/roadmap.md",childMarkdownRemark:{frontmatter:{title:"Roadmap",order:2}}}},{node:{relativePath:"community/faq.md",childMarkdownRemark:{frontmatter:{title:"Frequently Asked Questions",order:9}}}}]},file:{relativePath:"community/faq.md",childMarkdownRemark:{html:'<h1>Frequently Asked Questions</h1>\n<h4>Should I learn Reason or OCaml first?</h4>\n<p>There\'s no need to pick! Reason and OCaml share the exact same semantics (i.e. how the code runs). Only the syntax differ. Carry <a href="https://github.com/reasonml/reason-tools">Reason-tools</a> around so that you can freely convert between the two syntaxes. A Reason tutorial is an OCaml tutorial, vice-versa.</p>\n<h4>I\'m not sure what to do with Reason</h4>\n<p><a href="./gettingStarted.html#javascript-workflow">We compile to JS very well</a>. Think of what project you\'d usually make if it was pure JavaScript; try porting/writing that in Reason + BuckleScript instead! We recommend trying to make concrete, end-user projects (e.g. a little command line util) rather than infra-level projects (e.g. a boilerplate generator). The latter category requires expertise and understanding idiomatic Reason code.</p>\n<h4>What\'s the relation between Reason, BuckleScript and OCaml?</h4>\n<p>See <a href="./gettingStarted.html#javascript-workflow">here</a>. Reason\'s a syntax for OCaml and supports all its features. BuckleScript compiles OCaml/Reason code into JavaScript.</p>\n<h4>Where can I find documentation on the stdlib (standard library)?</h4>\n<p>Reason uses whatever OCaml uses. For BuckleScript (JS workflow), it\'d be at <a href="http://bucklescript.github.io/bucklescript/api">http://bucklescript.github.io/bucklescript/api</a>. For native, it\'d be at <a href="http://caml.inria.fr/pub/docs/manual-ocaml/libref/index.html">http://caml.inria.fr/pub/docs/manual-ocaml/libref/index.html</a>.</p>\n<h4>Where do all these <code>print_endline</code>, <code>string_of_int</code> functions come from?</h4>\n<p>They\'re from the standard library, pre-<code>open</code>ed during the compilation of your file. This is why you see them in scope.</p>\n<h4>What\'s the server-side story? Should I compile to native or to JS and use node.js?</h4>\n<p>We do compile to native, but the native workflow is currently work-in-progress. At this time, we recommend compiling to JS through BuckleScript and use the bindings at <a href="https://github.com/buckletypes">BuckleTypes</a> or somewhere else.</p>\n<h4>What\'s the <code>.merlin</code> file at the root of my project?</h4>\n<p>That\'s the metadata file for <a href="./tools.html#tools-command-line-utilities-merlin">Merlin</a>, the shared editor integration backend for autocomplete, jump-to-definition, etc. For the <a href="./gettingStarted.html#javascript-workflow">JavaScript Workflow</a>, <code>bsb</code> the build system generates the <code>.merlin</code> for you; You don\'t need to check that into your version control and don\'t have to manually modify it.</p>\n<h4>I don\'t see any <code>import</code> or <code>require</code> in my file; how does module resolution work?</h4>\n<p>Reason/OCaml doesn\'t require you to write any import; modules being referred to in the file are automatically searched in the project. Specifically, a module <code>Hello</code> asks the compiler to look for the file <code>hello.re</code> or <code>hello.ml</code> (and their corresponding <a href="./modules.html#modules-signatures">interface file</a>, <code>hello.rei</code> or <code>hello.mli</code>, if available).</p>\n<p>A module name is the file name, capitalized. It has to be unique per project; this abstracts away the file system and allows you to move files around without changing code.</p>\n<h4>BuckleScript: Is there a generic way to transform a record into a JS object?</h4>\n<p>Not currently. You\'d have to do the manual translation. Alternatively, try <a href="http://bucklescript.github.io/bucklescript/Manual.html#_create_js_objects_using_bs_obj">using JS objects directly</a></p>\n<p>Generally speaking, we recommend binding to the JS library thinly rather than thickly and idiomatically; better stay lightweight and catch conversion mistakes.</p>\n<p>See also our <a href="./gettingStarted.html#javascript-workflow-talk-to-existing-js-libraries">JS interop guide</a>.</p>\n<h4>Bsb: is there a way to configure the output directory?</h4>\n<p>Not currently. We\'d like to keep the configuration minimal.</p>\n<h4>The compiler says the module can\'t be found.</h4>\n<p>Are you using a third-party module? If you\'re compiling to JS, did you add the dependency in your <a href="http://bucklescript.github.io/bucklescript/Manual.html#_get_started"><code>bsconfig.json</code></a>\'s <code>bs-dependencies</code> field? Also, did you do <code>bsb -make-world</code>? <code>bsb</code> by default only build the root project itself for performance.</p>\n<p>Additionally, don\'t forget to add the source folders into your <code>bsconfig.json</code>! For performance, <code>bsb</code> doesn\'t automatically and recursively build nested folders.</p>\n<h4>Is <code>Some | None</code>, <code>contents</code>, <code>Array</code>, <code>List</code> and all of these special? Where do they come from?</h4>\n<p>They\'re ordinary variants/records/module definitions that comes with the <a href="http://caml.inria.fr/pub/docs/manual-ocaml/libref/">standard library</a>, <code>open</code>ed by default during compilation out of convenience.</p>\n<h4>What does an argument with a prepended underscore (e.g. <code>_</code> or <code>_foo</code>) mean?</h4>\n<p>Say you have <code>List.map (fun item => 1) myList</code>. The argument <code>item</code> isn\'t used and will generate a compiler warning. Using <code>fun _ => 1</code> instead indicates that you\'re intentionally receiving and ignoring the argument, therefore bypassing the warning. Alternatively, <code>fun _item => 1</code> has the same effect, but indicates more descriptively what you\'re ignoring.</p>\n<h4>What\'s this <code>MyModule.t</code> I keep seeing?</h4>\n<p>Assuming <code>MyModule</code> is a module\'s name, <code>t</code> is a community convention that indicates "the type that represents that module, whatever that means". For example, for the <a href="http://bucklescript.github.io/bucklescript/api/Js.String.html"><code>Js.String</code></a> module, <a href="http://bucklescript.github.io/bucklescript/api/Js.String.html#TYPEt"><code>String.t</code></a> is the type carried around and representing "a string".</p>\n<h4>Why is there a <a href="http://bucklescript.github.io/bucklescript/api/Js_promise.html"><code>Js_promise</code></a> and then a <a href="http://bucklescript.github.io/bucklescript/api/Js.Promise.html"><code>Js.Promise</code></a>? What about <a href="http://bucklescript.github.io/bucklescript/api/Js_array.html"><code>Js_array</code></a>, <a href="http://bucklescript.github.io/bucklescript/api/Js_string.html"><code>Js_string</code></a> and whatever else?</h4>\n<p>As a convention, <code>Js_foo</code> is the actual module, and <code>Js.Foo</code> is just an alias for it. They\'re <a href="https://github.com/bloomberg/bucklescript/blob/7bc37f387a726ba1ae4afeefe02b9c82577d9e10/jscomp/runtime/js.ml#L124-L138">equivalent</a>. Prefer <code>Js.Foo</code>, because that\'s the official, public module name.</p>\n<h4>Why are BuckleScript and bsb so fast? How can I slow it down?</h4>\n<p>BuckleScript is optimized for performance across the whole stack. You can try slowing it down by adding a dozen layers of indirections and metaprogramming. Try:</p>\n<ul>\n<li>Adding a few infinite loops here and there.</li>\n<li>Stuffing a JavaScript build tool in the pipeline.</li>\n<li>Dragging in more dependencies for writing a hello world.</li>\n</ul>',frontmatter:{title:"Frequently Asked Questions"}}}},pathContext:{section:"community",sectionTitle:"Community",relativePath:"community/faq.md",relatedFiles:"/^community\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---community-faq-82480a6e858fa1e737c9.js.map