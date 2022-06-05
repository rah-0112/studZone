import React from "react";
import NoReccords from "../components/NoReccords";
import { motion } from "framer-motion";
import { PlusCircleIcon } from "@heroicons/react/solid";

const data = [
    {
        name: "Bucephala clangula",
        date: "4/11/2022",
        document:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAH4SURBVDjLpZPJiiJBEIb7oeqd6qQgoiNaavoCIgqKoBcvih48eBJE8iCKIOKWLgcP7mup5YKiYnRG0l2OdNPNMAlBlZn+X/wRkfUGAG//E182er2e1O12SafToe12W2WMqc1mkzYaDVKr1aQfAVwsczFbrVZwOp3gfr+LOB6PMJ/PoVqtskqlIn8L+BBrl8sFcOFzv9+DpmlwPp/FHkLL5bJWKpXkF8CHbfYp3m63sFgsQFVVEev1GqbTqQ6hlLJ8Pi/pAF4vQdt/i51O54tYURSxj6vf70MmkyE6gDeLIhmtYq1W6x8BQOhkMgGj0SgAeIb92Gw2kEqlqA5otVoqNgsPLBYLD6sQYGaDwcDDCA6HQ/xGF9frFeLxuKoD+JgEYLfbgdtNwGw2CwACbTYbmEwmsNvtws2ni1gs9gTU63WKHccylssluFxuXoILZrOZECBMUZwwHo/FZAaDAUSj0WcJfL4EDx+PhxCgTY/HIzJioHVCCAyHQ7jdblAsFiEcDj+byOcqFQoFhiXgQhFmR+hoNBJCfGICfOdixkN6uUi5XE7OZrMajg3/eDgchBsE4WXCzGidC7VAICB/e5XT6bScTCYZL0nYxp5gzTh3fnmAC5nP55N//JgSiYQUiURIKBSiwWBQ9fv9KhdRr9dL+Lv069f4r/EO4RAxpm00KCQAAAAASUVORK5CYII=",
        description:
            "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    },
    {
        name: "Globicephala melas",
        date: "9/14/2021",
        document:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGJSURBVDjLY/j//z8DJZiB6gaUl5fXw9g5OTkOqamp++Pi4uaHhYUpwMRtbGwKjI2N52tpaQmgazYoKir6n5+fnwATi46Onh8cHHwfWZ2BgUGAurq6AoYLiouLE3Jzc+enp6fDNQQEBCh4enr+t7OzC4CJqaioJGD1AtTJCkAn/wc6OQDJyeuBTt4PYisqKipISkoaYBiQmZkZkJycLABiA52838vLaz+Skx20tbX/y8vLK4iLiydgDcSEhISAiIgIB6CTHdzd3ROcnZ3/m5mZOcDkZWRk7ouIiOzn4+PDNADoZAegkx2QJYBOvg8MZbgrhISEEri5ue9jRCMwlAWATi4AOjkAyckKwFCuBzq5HuhksMFcXFwCLCwsBTjTQciUB0KV655fIpRwoqc9uGqec0kTxQCgZt2uHa++zDr49v+E3a//9+549b9j26v/zZue/89b/PhZ2rxHz/IXPf6fMe/h/6Ilj/+71984rR5+WhPFBYET7gnlL3tK0AWeDTeuwTTTJi/Q3QAAViCHY9kyiUsAAAAASUVORK5CYII=",
        description:
            "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    },
    {
        name: "Anas platyrhynchos",
        date: "11/12/2021",
        document:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAG6SURBVDjLxVNNKERRFP7ue0/JiIxXyE8aq/HTSP4iG2JpYSEL0qzYWFgrG8zCVopSs5CVnZVIWbFAYuG3NGaKmCz8z9z37rvuvTN+htSUhVPfPefczvd1zrldwjnHX0zDH+3/BQx5BIPBDuGmBJrS5F0IjPr9/hUjeTHj83m9BQWmSghRZzL+9ImYIBq98+zsHMyK5EPAdLtzEQ7fwLJYYjZN+yBJvOeGYaC4OF9xvu2AQNd1VSiLZCz9O5YvxrBwNCxiWaP/XKIk6rqRQv4qEmcUJaYXge0+0YmWusTEjFJAA+eGanXxdBTgNqgjYDMU5VXAW9iEx9gzBpYa0JszkRAQL8DLy0uRleWCy+VSo0gB+5iis2oQjDtgDoMDjqv7CGpKWvFEXzEfGclEEFx1EApFFL5ajFBFvrw7hyW6sB0LFrPwEH9EbWkbnqwXTIeGQH77C/0LlbzbNySITEGKXd+H4c4uxH5kC+snqyfURt2vAj1zHhajVOyAImZTVJhVWrOnC7vhLWycrR0KcuNVgMdJur+xelKL1pe1m5tnG3vUQYsgU7X8dAU84yTKHN18dVjGbUA8T9LeAB6et/fbYA/BAAAAAElFTkSuQmCC",
        description: "Fusce consequat. Nulla nisl. Nunc nisl.",
    },
    {
        name: "Bubo sp.",
        date: "10/18/2021",
        document:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAACYSURBVDjLY/j//z8DJZhh1AAcBvSLXQHi//97xD797xLb/b9V1IZ0F3SJ8QE1pv6vFz3yv0rk/v9SYRviDWgVvQLU+A+o8Q5QY8r/AqEj/zOFdpPmglLhIKDGOUCNd/4nC6b+jxP4RLwBBUL7/tcq/wdqTAdq/Pc/UoDvfwj/f+INSBacDNR4AswO4b8Cpn35roymRBoZAADgYeRxtD76EQAAAABJRU5ErkJggg==",
        description:
            "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    },
    {
        name: "Hymenolaimus malacorhynchus",
        date: "5/8/2022",
        document:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIWSURBVDjLjZNPSBRRHMf32rVTdFOsDkJEhODNLGqXukgJpmiEURBGdEnbskNktrhCRQuaLEEikUhlbK5EiZmxjbWwfxvL0dHdtdlCx3VtZxyaed/eG5qwZct98DnM4/f9vN/M+40NgK1Y5p7tPTY9UIeZ4Q6EvIcQ9pQ3FR1O+kvqpbFWZCI+YG0RK5EhBNz2dFHhxIvSWjl+TdOSzyGNd0GJPoE+P4nogzPqpuGUv8wux64ahjIJZbYFy1Pnwfc3I9LXuDR1t2bnf8PC0xKHHL0MQw0gJ5yEmmhA9pMTYm9VOth9cA+rsdV1jm6lDFA0Cizabl6H9KH1d7gJ6kI9VmNXIHiqs5/dFfusQ5hg+PGbL/ipG7CWxPvAv7wEQ5mAKjZjPdGIDO2E9xwmgS7Hjo1dMoFuEIKMQvAtS8C9eoT4iBNh/22kuFrkxAYsh9ow661Bp9fHuqv4S9DiGTdPTa8SfM0QDLoOANl5TN8/jjHndrzrceCt2w71uwDXYJAJjhQULNJwQia4cXY3tMA9aNwdcB37MXRuF4Ih3qwpKLBegbUvLhGcqN6GW6fK8dp1FBP9F/AxvoBwSjcF7Q/fM0FlvsD8iEyycbFuQknDFLPl40QWnqFsyRdY16hbV+gdjf8Rraytm890P0opy5+VggNECwVJzllBldL+r2ErFO7uHYmx4A/Kxc1GPT9cSpmjnC72L/0FRS76cD+dhSEAAAAASUVORK5CYII=",
        description:
            "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    },
    {
        name: "Grus antigone",
        date: "1/18/2022",
        document:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKUSURBVDjLfZPta9V1GMY/39/vbGdnTubEhsOcFIPjDEdCvijEwletQWRRYFIoEkFEIv4Bw4EEYm96WYFQ+ACCixINxFKokWFmakvwzESX7fGnR7ezne/T1Yu2OqPWDRc33Pd9XdzcD0YS8/bu2Z16obObS9kAQZEQwxwiPno2rtjEoc8/5as958w8J0eNeeeJ+qs4xICPcc7/A2t9LYVkgYD1SOBCwAZPh/2Dl6cvYIPDh7lc1S0u4KwnTyP5pAEXPE9Xh+hKEx6ZnSCfFiioCWf/X6Bv8NavrM530CrR7iZIlm9h49QwjzUUufTzZZz1fYsKHHm9v/f84Dd9Y8MZm6mQa3uNZNkzdM3cYfTGOKcvnOr78cCV3lqOkYT7bk1BSouKSqPgwFDr2ztWV95aWdwNST329jGO/nT5y1fa6/ZJCTGK4Crjba+O3TaSsOfbhtXYuUoCSSiKpGUzNK5B7h5yZdzkFUJlDGGIzmEf3sJmE28aSVROmBej43C67p2m3KptyI4Q7T2iyyBUQB5MDpNbSvSO8sUjZBevfUGe7Wb+kMqfmY4YOFm/dmsxffQlZEeRn0axgsIMmBSf3WXk9PFgH9Lb9aH2Lxhi8xsqkeep2d/6++ODQZCQqihWQRZDyujXxzNXpXue/K8ttGzTlCksOePKJWQARQwGFFCMkDK1/qDOLLpGANHQU9fyJMbkkPfY7C6mbjlJfTP1rSvbr+4z62vrF/zCZP+KQhRb0mXrKP/wAZMDAyUM3y4pduxYuvY58m1PkA2N9ABX/7ODEPyzpunxwvjJvYyfG/jIOzZ0vq+d96+Xum+e+OR3O2OZnaZnYcvS3xj+mF2l/dy8tofna+OS+P49ms9u59CprfxSG/8TX76Rzx39RVIAAAAASUVORK5CYII=",
        description:
            "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    },
    {
        name: "Coluber constrictor",
        date: "10/7/2021",
        document:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJOSURBVDjLpZO7T5NhGMXP+30fbalAUVtBbmIRE6RgFdIoSuIlODkYByMx6oI64ECMs4uk8ieIE8YmDu4OEIgaMKBUKSJRwCBgmsod7OX93qsTAwmICWc8yfnlyfM8h2itsRsZ2KWsrczzHd/PmRaaHKbhYVxzyTUhgNte4at0xX4sbJmMRUJ6W4ASen+gfE9zpc95WCkFIYH4EhcxluxJ/dZyI7wtQDI9NL/Cp5wG8UIrUwkY0S/rz9cTtG3kRT3dcQdEqBtF+VmNY9OZnpHx1Ku9btMl0oJ87toc3nKC0w9G/dXHcluXV1lieSb1EkCAcQVoI2fHK4RaY6bb4+hwWsQ3PrL2hCXZa0WlS0qN4/Vt1+52ndT/BBDo5qOlrsuJRT4hbZXQQpVbDlJIANhSmCXeKlzvrNoEIRuPVNcS9QWCnq/FXqcvNpUeq/TfCUgpNNcCXEhStK8CtSVn8eFnH2K/BgUVzPHu4bK2AODErWHiKXCFyw44fT29888GO+vu3Y8w3RS4TaRWkEpCQSO+NoeakjNIsowVnX3LatsNhxW8+dFNTNIQCua1TM3RpdQiiwAAFQxSK8wsTYIrAaE4uORYt/8gWNqIJE9bQ9P91MjOsSI1QU/3wiIDzUiilbpy5GJfPhUUQgoU5JWhMO8QDnr8yDKz4cstxqe5AQz86P+WZsgn25Xp6lO/pIyBKQYqGCq81cYp/yUMz75H70T3KBMIxcPaJv/bxkC7sVBfdsH7ZqI3yhQa4mHNNl1hJ/kfkQWpTG9Gyaz5sBYb/l+aZznkhSoxiAAAAABJRU5ErkJggg==",
        description:
            "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    },
    {
        name: "Eolophus roseicapillus",
        date: "5/6/2022",
        document:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKfSURBVDjLlZNPaFRXFMZ/982bSSZ2YmKiQpoIQSsihiDVYsGFBUHUhmLQLLsQLCgqtLhyoRtdWCwU7KLdqBBXRVyUCK2CiGYXC9UiamIaO0nGzGgmybz5c+97797jYtIGEWJ74OPAWfy+78A5iAj/V5dP8nXuZ6rXT/CLz3+sn46pr7o+ZGfKp3FXL3uCSdKleVa81+3kZ7Tfv8SQeXZEJHte3P2PpXjZlx8Oca1/Ix3ecq7ffak+P3Z83Z1P+87tT/lVyF6A4u80d6yg5yO2tzSQfGeFw9uUt2EDu/r2cvHoqf1bmrr6k+QGMblhzFyML9CYikglyCQ8Uv7oze1/NDZv3qxUPcw3Zw8qW7yb6Nn3hdKFKeKxM9hSiVI+ZjYLHZ2ATTKRY3K2TM1X4m3q2nklqZQCgZa5PE+HTmBeTTAzOsXfD/M0r4xZ3wltLWA1BBX4c5QbQY28RywaF2Kmv6f64hKJ4FfW9e5h5HaBZNqntWMbW/uP8mTcp6KhtQ2msmV5PsPNW9MS+UTKExdiwxTiBFfLouYnWNveSXV8ljSWsaEHrMpsJQLGZiCVRkXRiAD4KGl0cY3KywImP44LqyQaVrJ+YBCxltzTB9j5J7SudcTa8EGmjexvVzERpg6IPPz0GlbvOA04EEFcQFwaxukJ1rQbyskihclplC5Qae4DoKyZXASIiNW46iPELiA2wOkXIA5xGlyNprQm3d2A2DbS3QOMP77GvdeymMAg4mJc9AqJF+oQZ0BiEIO4KmIruDhAbABKvXU3PqGIwiJxEYnn67ILS7A4QGwJsRXEaZzJAuh/ARK6ubg62xSVUxlcxhNJgsuAtCPWACHi1bvyLFZrkdCZJYA23/7144FPEHajyCz7kgKo4RAng/+M3gCnSKmLCc4yugAAAABJRU5ErkJggg==",
        description:
            "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    },
    {
        name: "Acridotheres tristis",
        date: "1/28/2022",
        document:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIsSURBVDjLjZNfa9NQGIdnP4cDv8Nkn8PL6UfwSgQZOoSBYkUvZLN1lMFArQyHrsIuWkE3ug2t1K3O0LXrZotdlzZp0qZp/qc9P8852qyyigs8F8nJ7znveZN3DMAYg14XKROUyf9wiRIKckOCCcdxNN/3+71eD6Og64hEInPDkmHBJAsbhgHTNAM6nQ7a7TYkSeKSer2OaDQaSAbhC7efJGY28gZWPrUQTyt4l2lCKLfR7XahaRpkWeYCy7LANonFYr8lqzt26PUXIxzf7pCfioeS5EI2fVQkG+GVH0hlRVqFjmazeeZIvCc0PBXf1ohu96GZBEnBQMMmcAjgeH3cWRKQyTf4URRF4ZWIongqoOFURXZpUEOt1YNm+BzDI6AeFKo6IqsF3g9d13k/VFU9FSytK9V8zUJiR0WbBh+/2cVich+trodvNQeFEwvTsa/8C7Dzs54wUSBYeN+ofq+ageDZmoBX64dQdRcbByaEqoGbTzPwPA+u63IJIxDMrR2nDkUTR6oPxSJ8ZxYuNlxsHtnYLal48DIH+om5gMGqCQSP3lam7i+XSMfp40AFsjWCrbKHdMlGpeng2uxHpHM1XgGDhf8S3Fsuhe4+3w9PL+6RvbKGguhAODaRLSq4OvsBL5JFvutAMCAQDH6kK9fnZyKJAm4tZHFj/jMexnPYzJ3w0kdxRsBu6EPyrzkYQT8Q/JFcpqWabOE8Yfpul0/vkGCcSc4xzgPY6I//AmC87eKq4rrzAAAAAElFTkSuQmCC",
        description:
            "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
    {
        name: "Anastomus oscitans",
        date: "10/7/2021",
        document:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ8SURBVDjLpVLfS1NhGPYP8D6im8DKwrYhUaa1tEyyIXlRWtFFJlZQERIGUZKGI5dO7ZeUEl1YaKUYkyU1J0hE/ppzuOnUDbdpbp7Nue2crZ2J9fSeQ4LhdtUHLx/fx/c87/M+z5cEIOl/6p/DsjGnzWfIhnf0CJjhw2AGD2HpWxY8Xw/CPXAAi/378aNvHxY+p7viEhD416q/FTFfC2JLL8AvPkd0/gl+OhoRsdXDN1gsgLm4CghcE5opw6qvFeHpfHDm4wgZsxEcykLEroZ/tFQAryUcwTsij8WYZ4i6boGz5IE1HkWQxojY6xAwlZN0OVyfZClxCbzD8jMBywXEvC0IT50AazqG4Kgc3ORNcNYqeAYUcGllioQmklnhiKsavLsR3EQuQmPZCAxmitK9388RWFqRMAUCZyyPFSLGvKSOCoTG8xAcycEKOR+eeSSAfzs1e3lHdxo/17WHt79P5W3tO/nZNymMSEAxMezsbepO8y+Q484Gce6IrQ5hqwqsWUmkVQgaKhEYvosFbT4IHJl+vV30I4kyDlLGPGXMU8Y8Oc3P98p4zvoQvl4ZlvWkyliNro4iVDQX40pjIc4rc9iTd6SVm/7Bejl7JAMrhnKwEzUEvo/2tlN40HkJWkszTG4dmvqu4WyTBBnXt6rjEjg+ponSPf1FmPsgxUVV7prG/BiaqacQllp/GU36qwJBNB543KMvhFtXAHvHLr/t7Y4tBffS0Wt5hY2rZ6JZINgETnZ0SzDXmQZyum79PvPGtmi9rhS1uhIRXPulJL4CimmSYmIInLzxnh4qT6t3o0FXJnYWduG8yQP7u9SMRB+GHquoWEH2310l3P8B4M3c7jDaDNsAAAAASUVORK5CYII=",
        description:
            "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    },
];
const Achievements = () => {
    return (
        <div>
            {data.length !== 0 ? (
                <>
                    <motion.button className="w-fit bg-[#FF844B] font-bold text-white p-2 rounded-full hover:bg-[#e3723d] flex items-center justify-center">
                        Add achievement{" "}
                        <PlusCircleIcon
                            height={20}
                            width={20}
                            className="m-1"
                        />
                    </motion.button>
                    <div className="w-full flex-1 flex">Hello</div>
                </>
            ) : (
                <NoReccords heading="Achievements" />
            )}
        </div>
    );
};

export default Achievements;
