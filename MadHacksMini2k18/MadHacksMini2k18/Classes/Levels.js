var MadHacks;
(function (MadHacks) {
    var Levels = (function () {
        function Levels() {
            this.currentLevel = 0;
            // level array is two-dimensional string array
            this.levelArray = [[
                    // Level 1
                    'xxxxxxxxxxxxxxxxxxxx',
                    'x                  x',
                    'x                  x',
                    'x                  x',
                    'x                  x',
                    'x        c         x',
                    'x         x        x',
                    'x s       x        x',
                    'x p       x        x',
                    'xxxxxxxxxxxxxxxxxxex'
                ],
                [
                    'xxxxxxxxxxxxxxxxxxxx',
                    'x  x               x',
                    'x px    x          x',
                    'xxxx    xxxxx      x',
                    'x       x    x     x',
                    'x       x       e  x',
                    'x       x   xxxxxxxx',
                    'x     t x  x       x',
                    'x       x       s  x',
                    'xxxxxxxxxxxxxxxxxxxx'
                ],
                [
                    'xxxxxxxxxxxxxxxxxxxx',
                    'x    k     l       x',
                    'x          l       x',
                    'x          l       x',
                    'x          l    e  x',
                    'x          l       x',
                    'x  s       l       x',
                    'x  p       l       x',
                    'x          l       x',
                    'xxxxxxxxxxxxxxxxxxxx'
                ]
            ];
        }
        return Levels;
    }());
    MadHacks.Levels = Levels;
})(MadHacks || (MadHacks = {}));
//# sourceMappingURL=Levels.js.map