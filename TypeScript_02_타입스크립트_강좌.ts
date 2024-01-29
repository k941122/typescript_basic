
let cosmatic:string = "lipstick";

cosmatic = "B.Bcream";

// cosmatic = 77; err -> TypeError

/**
 * cosmatic은 이미 string으로 지정되었기 때문에 문자형으로는 다시 값을 할당할수 있지만
 * 숫자형 으로는 오류가 뜬다. 
 */

let animal = "cat";

/**
 * TypeScript는 타입추론이 가능하다.
 * let animal은 이미 값이 "cat"이라는 문자형으로 할당되 있기 때문에
 * animal 변수는 타입이 string으로 지정되어 있다.
 */

let age:number = 30;

let isAudult:boolean = true;

let a:number[] = [1,2,3];
let a2:Array<number> = [1,2,3];

let week1:string[] = ['mon','tue','wed'];
let week2:Array<string> = ['mon','tue','wed'];

week1.push(3);

/**
 * 변수뒤에 원하는 type을 적으면 변수의 타입이 지정된다.
 * 
 * 특히 배열의 type을 지정하고 싶을 경우, number 또는 string 이라고 적은 다음 
 * 대괄호 []를 적으면 된다. 
 * 
 * week1은 이미 string type 배열로 지정되어 있기 때문에 push 메서드를 이용해
 * 뒤로 숫자형 1을 넣으려고 할경우 type이 일치하지 않아 할당 될수 없다.
 */


// 튜플 [Tuple]

let b:[string,number];

b = ['a',2];

// b = [5,'e'];

/**
 *  위의 let b:[string,number]은 배열의 요소의 type을 다르게 설정한 것이다. 
 * 그러므로 let b의 값으로 ['a',2]를 할당할수 있다. 
 * 왜냐하면 변수 b의 배열에서 첫번째 index는 문자형으로 두번째 index는 숫자형으로 
 * 지정되었기 때문이다. 
 * 
 * b=[5,'e']는 첫번째 index가 숫자형 두번째 index가 문자형 이기 때문에 위에서 설정된
 * type과 다르기 때문에 오류가 뜬다.
 */

b[0].toLowerCase();

// b[1].toLowerCase();

/**
 * b배열의 0번째 index(첫번째)는 문자형이므로 toLowerCase()가 사용가능하다.
 * 하지만 1번째 index(두번째)는 숫자형이므로 toLowerCase() 메서드 사용이 불가능 하다.
 * toLowerCase는 문자형에서만 사용가능한 메서드 이기 때문이다.
 */



// void, never 

function sayHello():void {
    console.log('hello');
}

/**
 * void type은 함수가 아무것도 retrun(반환)하지 않을 때 사용한다. 
 */

function showError():never {
    throw new Error();
}

function infLoop():never {
    while(true){

    }
}

/**
 * never type은 error을 반환 하거나 영원히 반복되는 함수 (무한루프)가 사용되는 
 * 함수의 type을 지정해 줄때 사용된다.
 * 
 * void 와 never 둘다 해당 조건에 부합하는 함수의 파라미터가 들어가는 일반 괄호 옆에
 * 작성해 준다!
 */


// enum

enum Os {
    Window = 3,
    Ios = 10,
    Android,
}

let myOs:Os

/**
 * enum은 비슷한 값들끼리 묶어 주는 것이다.
 * 
 * enum은 일종의 객체같이 작성이 되는데 각 값들에 숫자를 부여하지 않으면
 * 1,2.3...순으로 숫자가 부여가 되고 Window = 3 형식으로 숫자를 부여하면
 * 3,4,5.. 형식으로 숫자가 다시 부여가 된다. 
 * 
 * 원하는 값마다 숫자를 지정할수 있으며 console창을 확인시
 * 양방향 매핑이 되어있다. 
 * 
 * const Os () => {
 *  Os[Os["Window"]=3] = "Window";
 * }
 * 
 * 위와 같은 경우처럼 양방향 매핑이 되어있다면 
 * 
 * console.log(Os['Window']); 로 호출 했을시
 * 3이 출력 되고
 * console.log(3); 일경우 'Window'가 출력된다.
 * 
 * let myOs:Os 라고 선언시
 * 
 * myOs에는 Window,Ios,Android 만 입력할수 있다.
 * ex) myOs = Os.Window;
 * 
 * 특정 값들이 공통점이 있을때 enum을 사용해라!
 * 
 */


// null, undefined 

let c:null = null;
let d:undefined = undefined;
