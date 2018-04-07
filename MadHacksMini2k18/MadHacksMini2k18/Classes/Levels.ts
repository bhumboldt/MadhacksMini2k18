module MadHacks {

    export class Levels {
        public currentLevel = 0;

        // level array is two-dimensional string array
        public levelArray = [[
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

        [   // Level 2
            'xxxxxxxxxxxxxxxxxxxx',
            'x                  x',
            'x                  x',
            'x t                x',
            'x             c   xx',
            'x        c         x',
            'x             c   xx',
            'x   c              x',
            'x p          t     e',
            'xxxxxxxxxxxxxxxxxtxx'
            ],

        [   // Level 3
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
        constructor() {

        }
    }

}