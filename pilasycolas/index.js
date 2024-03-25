//COLA
class Queue{
    constructor(){
        this.items = {};
        this.front = 0;
        this.end = 0;
    };
    //Permite añadir valores a la fila
    enqueue(data){
        this.items[this.end] = data;
        this.end++;
    };
    //Quita valores de la fila y los muestra
    dequeue(){
        if(this.front === this.end){
        return null;
    };
    const data = this.items[this.front];
    this.front++;
    return data;

    };
    //OBTIENE LA LISTA 
    getSize(){
        return this.end - this.front;
    };
    // si la lista esta vacia
    isEmpty(){

        return !this.getSize();
      
    };
    //toma un elemento
    peek(){
        if (this.getSize === 0){
            return null;
        };
        return this.items[this.front];
    };
    //imprime los elementos de la lista
    print(){
        if (this.getSize === 0){
            return null;
        };
        let result = '';
        
        for(let i = 0; i < this.end; i++){
            //console.log(this.items[i])
            result += this.items[i] + " "
        };
        return result;
    };
    
};

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(30);
queue.enqueue("elpepe")
/*console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());*/
//console.log(queue.getSize());
//console.log(queue.isEmpty());
//console.log(queue.peek());
console.log(queue.print());
console.log(queue);


//Fila
class Stack{
    constructor(){
        this.items ={};
        this.top = 0;
    }
    //añade elementos
    push(data){
        this.top++;
        this.items[this.top] = data;
    }
    //elimina elementos
    pop(){
        let deletedData;
        if(this.top !== 0 ){
            deletedData = this.items[this.top];
            delete this.items[this.top];
            this.top--
            return deletedData;
        }
    }
    //Devuelve el tamaño de la lista
    getSize(){
        return this.top;
    }
    //evalua si la lista esta vacia
    isEmpty(){

        return !this.getSize();
      
    }
     //Nos devolvera el siguiente valor de la pila sin sacarlo
     peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.items[this.top];
     }
     print(){
        let result = '';
        for (let i = this.top; i > 0; i--){
            result += this.items[i] + ''
        }
        return result;
     }
}

const stack = new Stack();
stack.push('Plato #1');
stack.push('Plato #2');
stack.push('Plato #3');
stack.push('Plato #4');
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());


console.log(stack.peek());
//console.log(stack.pop());// llamada para eliminar elementos de la pila

console.log(stack.getSize()); // Muestra el tamaño de la lista

console.log(stack.isEmpty());




console.log(stack); // Imprime la lista

console.log(stack.print());
