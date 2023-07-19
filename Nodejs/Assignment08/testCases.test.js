const { add, sub, mul, div } = require('./testCases.js');

//addition

test('should add two numbers',()=>{
    expect(add(2,3)).toBe(5);
    expect(add(2,-3)).toBe(-1);
    expect(add(-2,-3)).toBe(-5);
    expect(add(-2,3)).toBe(1);
});


test('should not add strings',()=>{
    expect(add('2',3)).toBe(NaN);
    expect(add(2,'3')).toBe(NaN);
});

test('should throw error if no arguments are passed',()=>{
    expect(()=> add()).toThrow();
});

test('should throw error if one arguments are passed',()=>{
    expect(()=> add(3)).toThrow();
});

test('should throw error if null is passed',()=>{
    expect(()=> add(null,null)).toThrow();
    expect(()=> add(null,2)).toThrow();
    expect(()=> add(2,null)).toThrow();
});

//subtraction 

test('should subtract two numbers',()=>{
    expect(sub(2,3)).toBe(-1);
    expect(sub(2,-3)).toBe(5);
    expect(sub(-2,-3)).toBe(1);
    expect(sub(2,0)).toBe(2);
});

test('should not subtract strings',()=>{
    expect(sub('2',3)).toBe(NaN);
    expect(sub(2,'3')).toBe(NaN);
});

test('should throw error if no arguments are passed',()=>{
    expect(()=> sub()).toThrow();
});

test('should throw error if one arguments are passed',()=>{
    expect(()=> sub(3)).toThrow();
});

test('should throw error if null is passed',()=>{
    expect(()=> sub(null,null)).toThrow();
    expect(()=> sub(null,2)).toThrow();
    expect(()=> sub(2,null)).toThrow();
});

//multiplication


test('should multiply two numbers',()=>{
    expect(mul(2,3)).toBe(6);
    expect(mul(2,-3)).toBe(-6);
    expect(mul(-2,-3)).toBe(6);
    expect(mul(2,0)).toBe(0);
});

test('should not multiply strings',()=>{
    expect(mul('2',3)).toBe(NaN);
    expect(mul(2,'3')).toBe(NaN);
});

test('should throw error if no arguments are passed',()=>{
    expect(()=> mul()).toThrow();
});

test('should throw error if one arguments are passed',()=>{
    expect(()=> mul(3)).toThrow();
});

test('should throw error if null is passed',()=>{
    expect(()=> mul(null,null)).toThrow();
    expect(()=> mul(null,2)).toThrow();
    expect(()=> mul(2,null)).toThrow();
});

//division

test('should divide two numbers',()=>{
    expect(div(2,3)).toBe(2/3);
    expect(div(2,-3)).toBe(-2/3);
    expect(div(-2,-3)).toBe(2/3);
});

test('should throw error if divide by zero',()=>{
    expect(()=> div(2,0)).toThrow();
});


test('should not divide strings',()=>{
    expect(div('2',3)).toBe(NaN);
    expect(div(2,'3')).toBe(NaN);
}
);

test('should throw error if no arguments are passed',()=>{
    expect(()=> div()).toThrow();
});

test('should throw error if one arguments are passed',()=>{
    expect(()=> div(3)).toThrow();
});

test('should throw error if null is passed',()=>{
    expect(()=> div(null,null)).toThrow();
    expect(()=> div(null,2)).toThrow();
    expect(()=> div(2,null)).toThrow();
});








