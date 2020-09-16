Vue.component('task', {
    props: ['data'],
    data() {
        return {}
    },
    methods: {
        task_done() {
            this.$emit('task_done')
        }
    },
    template: `
    <div class="task">
    <div class="task__number">{{data.id}}</div>
      <h3 class="task__title">{{data.name}}</h3>
      <p class="task__date">{{data.date}}</p>
      <button class="task__done" @click="task_done()">✔️</button>
    </div>
    </div>`
})

var vue = new Vue({
    el: '#app',
    data: {
        name: '',
        new_task: {
            id: '',
            name: '',
            date: '',

        },
        tasks: [
            {
                id: '1',
                name: 'Прочитать книгу',
                date: '16.01.20',
            },
            {
                id: '1',
                name: 'Попробовать написать калькулятор',
                date: '15.09.20',
            }
        ]
    },
    methods: {

        add_task() {
            if (this.new_task.name != '') {
                this.tasks.push({
                    id: this.new_task.id,
                    name: this.new_task.name,
                    date: this.new_task.date,
                });
                this.new_task.id = '';
                this.new_task.name = '';
                this.new_task.date = '';
            }
        },
        delete_task(id) {
            this.tasks.splice(id, 1);
        }
    },
    computed:{
        filteredList: function(){
            let comp = this.name;
            return this.tasks.filter(function (elem) {

                if(comp==='') return true;
                else return elem.name.indexOf(comp) > -1;
            })
        }
    }
})
