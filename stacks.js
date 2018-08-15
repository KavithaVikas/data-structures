let stacks = function(){
    this.count = 0;
    this.storage = {};
    

    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
        
    }

    this.pop = function(){
        if(this.count === 0){
            return undefined;
        }

        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.peek = function(){
  
     let result = this.storage[this.count-1];
     return result;   
    }

    this.size = function(){
        return this.count;
    }

}

let stackInstance = new stacks();

stackInstance.push(1);
stackInstance.push("test");
stackInstance.push(true);
console.log(stackInstance.size());
console.log(stackInstance.pop());
console.log(stackInstance.peek());
console.log(stackInstance.pop());
console.log(stackInstance.pop());