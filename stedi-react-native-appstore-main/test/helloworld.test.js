import sayHello from '../utils/helloworld.js';
import assert from 'assert';

it("Hello Cody!", ()=>{
    const helloString=sayHello();
    console.log(helloString);

    expect(helloString).toBe("Hello Cody!")
})