const app=Vue.createApp({
    data(){
        return {
            title:"Contador App - Vue",
            count:0,
        };
    },
    methods: {
        modCount(instrucction="add",limit=1){
            if (instrucction==="dis") this.count -= limit; else this.count+=limit; 
        },
    },
});