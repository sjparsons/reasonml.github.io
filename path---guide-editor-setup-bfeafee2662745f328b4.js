webpackJsonp([39],{"./node_modules/json-loader/index.js!./.cache/json/guide-editor-setup.json":function(e,t){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/editor-setup.md",childMarkdownRemark:{frontmatter:{title:"Editor setup",order:1}}}},{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:20}}}},{node:{relativePath:"guide/getting-started.md",childMarkdownRemark:{frontmatter:{title:"Getting started",order:0}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/modules.md",childMarkdownRemark:{frontmatter:{title:"Modules",order:3}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:10}}}},{node:{relativePath:"guide/tools.md",childMarkdownRemark:{frontmatter:{title:"Tools",order:4}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:4}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/language/conditionals.md",childMarkdownRemark:{frontmatter:{title:"Conditionals",order:4}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/language/automatic-printer-generation.md",childMarkdownRemark:{frontmatter:{title:"Automatic Printer Generation",order:20}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring & Pattern Matching",order:5}}}},{node:{relativePath:"guide/javascript/syntax-cheetsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax cheetsheet",order:1}}}},{node:{relativePath:"guide/language/data-types.md",childMarkdownRemark:{frontmatter:{title:"Built-in Data Types",order:2}}}},{node:{relativePath:"guide/language/functions.md",childMarkdownRemark:{frontmatter:{title:"Functions",order:3}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:1}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:10}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:9}}}},{node:{relativePath:"guide/language/more-functions.md",childMarkdownRemark:{frontmatter:{title:"More on Functions",order:6}}}},{node:{relativePath:"guide/language/more-types.md",childMarkdownRemark:{frontmatter:{title:"More on Types",order:7}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:8}}}},{node:{relativePath:"guide/language/let-bindings.md",childMarkdownRemark:{frontmatter:{title:"Let Bindings",order:2}}}},{node:{relativePath:"guide/language/types.md",childMarkdownRemark:{frontmatter:{title:"Types",order:1}}}},{node:{relativePath:"guide/language/primitives.md",childMarkdownRemark:{frontmatter:{title:"Primitives",order:0}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:5}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}}]},file:{relativePath:"guide/editor-setup.md",childMarkdownRemark:{html:'<p>See our <a href="./tools.html">tooling</a> section for a descriptions of what you need to install and which editors we support.\nOur <a href="./tools.html#editor-integration">editor integration</a> need a few binaries to be found in your <code>$PATH</code>:</p>\n<ul>\n<li><code>refmt</code>: the Reason parser/printer (editor formatter).</li>\n<li><code>ocamlmerlin-reason</code>: Reason bridge to <a href="./tools.html#tools-command-line-utilities-merlin">Merlin</a>.</li>\n<li><code>ocamlmerlin</code>: the Merlin binary.\nThe tooling section explains what these binaries do.\n<strong>Install reason-cli globally</strong> with npm:</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-sh"><code><span class="hljs-comment">## on Linux:</span>\nnpm install -g https://github.com/reasonml/reason-cli/archive/beta-v-<span class="hljs-number">1.13</span>.<span class="hljs-number">6</span>-bin-linux.tar.gz\n<span class="hljs-comment">## on MacOS:</span>\nnpm install -g https://github.com/reasonml/reason-cli/archive/beta-v-<span class="hljs-number">1.13</span>.<span class="hljs-number">6</span>-bin-darwin.tar.gz\n<span class="hljs-comment">## test that you have them installed correctly</span>\n<span class="hljs-built_in">which</span> ocamlmerlin refmt ocamlmerlin-reason</code></pre>\n      </div>\n<p><strong>Note</strong>: the global toolchain <code>reason-cli</code> currently doesn\'t work on Windows.\n<strong>Note</strong>: please verify that your installed OCaml version is <code>4.02.x</code> and that Merlin is <code>>=2.5.1</code>. The above installation does that automatically, but people sometimes install our toolchain through other ways (e.g. native workflow, with looser version constraints).</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-sh"><code>ocamlc -version\nocamlmerlin -version</code></pre>\n      </div>',frontmatter:{title:"Editor setup"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/editor-setup.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-editor-setup-bfeafee2662745f328b4.js.map