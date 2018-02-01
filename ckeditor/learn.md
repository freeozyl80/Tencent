* new MutationObserver(
  function callback
);

*
<code>
{
  "presets": [
    ["@babel/env", {
      "modules": false,
      "targets": {
        "browsers": [
          "Explorer 10"
        ]
      },
      "debug": false,
      "include": ["es6.map","es6.array.iterator"],
      "useBuiltIns": "usage" 
    }],
    "@babel/stage-2"
  ],
  "plugins": [
    ["@babel/transform-runtime",{
      "helpers": true,
      "polyfill": true,
      "regenerator": true
    }]
  ]
}
</code>