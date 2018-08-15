let queue = function(){
    this.collection = [];

    this.enqueue = function(element){
        this.collection.push(element);
    }
    this.dequeue = function(){
      return this.collection.shift();
    }
    this.front = function(){
        return this.collection[0];
    }
    this.size = function(){
        return this.collection.length;
    }
}

let queueInstance = new queue();

queueInstance.enqueue(12);
queueInstance.enqueue(13);
queueInstance.enqueue(14);
console.log(queueInstance.size());
console.log(queueInstance.dequeue());
console.log(queueInstance.front());