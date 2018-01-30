var scales = 1 / window.devicePixelRatio
// document.write('<meta name="viewport" content="user-scalable=no, initial-scale='+scales+', maximum-scale='+scales+', minimum-scale='+scales+'">')
var width = document.documentElement.clientWidth
console.log('设备宽度'+width)
var css = 'html{font-size: '+(width / 10)+'px!important;}'
document.write('<style>'+css+'</style>')
console.log('倍数'+scales)

