// 判断一个js对象中是否存在环

// JSON.stringify 的功能是，将一个 JavaScript 字面量对象转化为一个 JSON 格式的字符串。例如

// const obj = {a:1, b:2}
// JSON.stringify(obj) // => '{"a":1,"b":2}'

// 当要转化的对象有“环”存在时（子节点属性赋值了父节点的引用），为了避免死循环，JSON.stringify 会抛出异常，例如：

const obj1 = {
    foo: {
        name: 'foo',
        bar: {
            name: 'bar',
            baz: {
                name: 'baz',
                aChild: null  //待会让它指向obj.foo
            }
        }
    }
}
obj1.foo.bar.baz.aChild = obj1.foo // foo->bar->baz->aChild->foo 形成环
// JSON.stringify(obj1) // => TypeError: Converting circular structure to JSON

// 请完善以下“环”检查器函数 cycleDetector，当入参对象中有环时返回 true，否则返回 false。

function cycleDetector(obj) {
    const cache = [];
    let hasCycle = false;
    if (typeof obj === 'object' && obj !== null) {
        cache.push(obj);
    } else {
        return hasCycle
    }
    (function cycle(obj) {
        if (hasCycle) return true
        if (typeof obj === 'object' && obj !== null) {
            Object.keys(obj).forEach(key => {
                const val = obj[key];
                if (cache.includes(val)) {
                    return hasCycle = true
                } else {
                    cache.push(val);
                    cycle(val);
                    cache.pop();
                }
            })
        } else return hasCycle = false
    })(obj);
    return hasCycle
}

const obj2 = {
    name: 'tom',
    likes: {
        a: 1123
    }
}

const arr = [0,1,2];
arr[1] = arr;

console.log(cycleDetector(obj1));
console.log(cycleDetector(obj2));
console.log(cycleDetector(arr));
