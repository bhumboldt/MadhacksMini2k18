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
                    'x  x               x',
                    'x px    x          x',
                    'xxxx    xxxxx      x',
                    'x       x          x',
                    'x       x       e  x',
                    'x       x   xxxxxxxx',
                    'x     t x          x',
                    'x   e   x       s  x',
                    'xxxxxxxxxxxxxxxxxxxx'
                ]
            ];
        }
        return Levels;
    }());
    MadHacks.Levels = Levels;
})(MadHacks || (MadHacks = {}));
//# sourceMappingURL=Levels.js.map