questApp.factory('dataService', function(){
    return{
        question:{
            text: 'Какой js-фреймворк лучше использовать?',
            author: 'Иван Иванов',
            date: '20/10/2013',
            answers:
                [{
                    text: 'AngularJS!',
                    author: 'Вова Сидоров',
                    date: '20/10/2013',
                    rate:2
                },{
                    text: 'AngularJS лучше всех',
                    author: 'Олег Кузнецов',
                    date: '21/10/2013',
                    rate:3
                }]
        }
    };
})
