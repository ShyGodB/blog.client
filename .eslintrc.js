module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "allowImportExportEverywhere": false,
        "codeFrame": false
    },
    "globals": {
        Buffer: true,
        process: true,
        config: true,
        __dirname: true,
        redis: true,
        instanceId: true,
        log: true,
        db: true,
        help: true,
    },
    "rules": {
        "indent": ["warn", 4], // 缩进风格
        "no-const-assign": 2, // 禁止修改const声明的变量
        "no-constant-condition": 2, // 禁止在条件中使用常量表达式 if(true) if(1)
        "no-alert": 0, // 禁止使用alert confirm prompt
        "no-dupe-keys": 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
        "no-dupe-args": 2, // 函数参数不能重复
        "no-undef": 2, // 不能有未定义的变量
        "no-unreachable": 2, // 不能有无法执行的代码
        "no-return-assign": 1, // return 语句中不能有赋值表达式
        "no-duplicate-case": 2, // switch中的case标签不能重复
        "valid-typeof": 2, // 必须使用合法的typeof的值
        "no-spaced-func": 2, // 函数调用时 函数名与()之间不能有空格
        "no-empty": 2, // 块语句中的内容不能为空
        "no-eq-null": 2, // 禁止对null使用==或!=运算符
        "no-func-assign": 2, // 禁止重复的函数声明
        "no-multiple-empty-lines": [1, { "max": 2 }], // 空行最多不能超过2行
        "no-redeclare": 2, // 禁止重复声明变量
        "no-implied-eval": 2, // 禁止使用隐式eval
        "no-inline-comments": 0, // 禁止行内备注
        "no-var": 0, // 禁用var，用let和const代替
        "semi": ["warn", "never"],
        "no-unused-vars": ["warn"]
    }
};