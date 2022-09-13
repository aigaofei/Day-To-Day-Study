import './css/aaaa.css'
import './less/abcd.less'
import './scss/bcd.scss'
import obj from './abc.js'
console.log(obj)
console.log(obj.fn(1989))
console.log(obj.user)
console.log('不想干了，有学不完的东西。。。。')
// 支持class 高级语法时需要安装@babel/preset-proposal-class-properties包
// 在babel.config.js文件里配置
class Dog {
  name= '留年'
  static color = 'white'
}
const dog = new Dog
console.log(dog)

// 当遇到generator 时需要安装
// @babel/plugin-transform-runtime --save-dev  开发时是使用
// @babel/runtime   是开发和上线使用的包  这两个包都安装
// 然后再配置到babel.config.js
function *generatorFn() {
  yield 1,
  yield 2
  // return 3   他为什会报红？？？？
}
let newFn = generatorFn()
console.log(newFn.next())

// polyfill 是es678910在各浏览器中的兼容垫片，让新语法更好兼容低版本浏览器
// 关于安装@babel/polyfill 包时，提醒要更新core-js到3.23.3版本及以上，
// 已弃用的core-js@2.6.12: core-js@<3.23.3不再维护，
// 并且由于存在大量问题，不建议使用。由于V8发动机的突发事件，
// 旧core-js版本中的功能检测可能会导致速度降低100倍，即使没有多填充。
// 某些版本存在web兼容性问题。请将您的依赖项升级到core-js的实际版本。
//百度搜索解决方案发现：https://zhuanlan.zhihu.com/p/452118687
// 解决方法是可以将npm@8 的版本回退到@6版本---可解决【安装node@14.xx】,我这里练习项目
// 不合适使用低node，所以没有回退
// 而是使用安装 npm i core-js 和 core-js-compat 和 core-js-builder 代替
// 详细作用参考文章：https://www.kancloud.cn/cyyspring/webpack/2147070
// 使用案例
// 1.现在想在'ie10' 中使用数组方法'includes' 因此需要使用'corejs'垫片功能，可以安装'npm install core-js' ，
// 变可以发现数组的'includes' 在ie10的浏览器下也可以运行了
// 2.'core-js' 导入几种形式：
// // 导入所有新提案api
// import "core-js";
// // 唯一稳定的'core js'功能-es和web标准
// import "core-js/stable";
// // 仅支持稳定的ES功能
// import "core-js/es";
// // 只导入指定api
// import "core-js/features/set";
// import "core-js/stable/set";
// import "core-js/es/set";

// 用在开发模式中：
// 使用热模块更新，但网页不刷新，不会打开新页面，更方便检查或查看开发效果
// obj 是abc.js import导入的别名,这样写即可：
if (module.hot) {
  module.hot.accept('./abc.js', function () {
    var hotModule = require('./abc.js')
    console.log(hotModule)
  })
}