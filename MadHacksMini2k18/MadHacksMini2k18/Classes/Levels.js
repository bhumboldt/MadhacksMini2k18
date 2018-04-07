var MadHacks;
(function (MadHacks) {
    var Levels = (function () {
        function Levels() {
            // level array is two-dimensional string array
            this.levelArray = [[
                    // Level 1
                    'xxxxxxxxxxxxxxxxxxxx',
                    'w                  w',
                    'w                  w',
                    'w                  w',
                    'w                  w',
                    'w        c         w',
                    'w         w        w',
                    'w s       w        w',
                    'w p       w        w',
                    'xxxxxxxxxxxxxxxxxxex'
                ],
                [
                    'xxxxxxxxxxxxxxxexxxx',
                    'x                  x',
                    'x                  x',
                    'x t                x',
                    'x             c   xx',
                    'x        c         x',
                    'x             c   xx',
                    'x   c              x',
                    'x p          t     x',
                    'xxxxxxxxxxxxxxxxxtxx'
                ],
                [
                    'xxxxxxxxxxxxxxxexxxx',
                    'x px               x',
                    'xxxx    x          x',
                    'x       x          x',
                    'x       xxxxxxx   xx',
                    'x       x          x',
                    'x       x      t   x',
                    'x     t x   xxxxxxxx',
                    'x   e   x       s  x',
                    'xxxxxxxxxxxxxxxxxtxx'
                ]
            ];
        }
        return Levels;
    }());
    MadHacks.Levels = Levels;
})(MadHacks || (MadHacks = {}));
//# sourceMappingURL=Levels.js.map