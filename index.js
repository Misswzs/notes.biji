 Vue.component('note',{
     props:["note"],
   template:` <div class="alert alert-dark" role="alert">
        <h4 class="alert-heading">{{gittext}} </h4>
        <textarea class="form-control" aria-label="With textarea" placeholder="" v-model="note.text"></textarea><hr>
        <p class="mb-0"> {{gittime}} {{note.text.length}}</p>
        <i class="icon-0917" @click="del"></i>
        </div>`,

     computed: {
         gittext:function() {
             return _.truncate(this.note.text, {'length': 20});
         },
         gittime:function(){
             return moment(this.note.time).fromNow()
         }
     },
     methods:{
         del:function(){
              console.log(this._uid-1,1);
             a.notes.splice(this._uid-1,1);
         }
     }
 })


var a=new Vue({
    el: '#app',
    data: {
        notes: [
            {"text": "笔记内容", "time": 1537778713000},
            {"text": "笔记内容", "time": 1357778713000},
            {"text": "笔记内容", "time": 1538987153000}
        ]
    },
    methods:{
        add:function(){
            this.notes.unshift({"text": "笔记内容", "time": Date.parse(new Date())});
            //刷新光标在第一个
            document.querySelector('textarea').focus();

            localStorage.setItem('notes'.JSON.stringify(this.notes));
        }
    },
    created:function(){
        this.notes=JSON.parse(localStorage)
    }


})