// import axios from 'axios'

export default{

    users:[
        {
          id:0,
          Summary: "Article About newspapar Templete",
          date: '2-1-2019',
          Editor: 'Shiv Kumar Btalvi',
          Title: 'NEWSPAPER TEMPLATES FOR STUDENTS',
          Description: 'students who need newspaper templates will enjoy using our Cloud Designer!We have hundreds of templates to use, and each template can be completely customized in our easy to use Cloud Designer. It has never been easier to design and print a school newspaper. No software to download, all you need is an internet connection and a computer.We have many categories and many different templates to choose from',
          NewsPic: require('../assets/downloa.jpg'),
        },
        {  id:1,
          Summary: "Article About newspapar Templete",
          date: '2-1-2019',
          Editor: 'Shiv Kumar Btalvi',
          Title: 'NEWS FOR Young Student',
          Description: 'students who need newspaper templates will enjoy using our Cloud Designer!We have hundreds of templates to use, and each template can be completely customized in our easy to use Cloud Designer. It has never been easier to design and print a school newspaper. No software to download, all you need is an internet connection and a computer.We have many categories and many different templates to choose from',
          NewsPic: require('../assets/downlo.jpg'),
        },
        {
          id:2,
          Summary: "Article About newspapar Templete",
          date: '2-1-2019',
          Editor: 'Bajinder rao',
          Title: 'NEWSPAPER TEMPLATES FOr Youth',
          Description: 'students who need newspaper templates will enjoy using our Cloud Designer!We have hundreds of templates to use, and each template can be completely customized in our easy to use Cloud Designer. It has never been easier to design and print a school newspaper. No software to download, all you need is an internet connection and a computer.We have many categories and many different templates to choose from',
          NewsPic: require('../assets/news1.jpg'),
        }, {
          id:3,
          Summary: "Article About newspapar Templete",
          date: '2-1-2019',
          Editor: 'Shiv Kumar Btalvi',
          Title: 'NEWSPAPER TEMPLATES FOR STUDENTS',
          Description: 'students who need newspaper templates will enjoy using our Cloud Designer!We have hundreds of templates to use, and each template can be completely customized in our easy to use Cloud Designer. It has never been easier to design and print a school newspaper. No software to download, all you need is an internet connection and a computer.We have many categories and many different templates to choose from',
          NewsPic: require('../assets/downlo.jpg'),
        },
        { id:4,
          Summary: "Article About newspapar Templete",
          date: '2-1-2019',
          Editor: 'Shiv Kumar Btalvi',
          Title: 'NEWSPAPER TEMPLATES FOR STUDENTS',
          Description: 'students who need newspaper templates will enjoy using our Cloud Designer!We have hundreds of templates to use, and each template can be completely customized in our easy to use Cloud Designer. It has never been easier to design and print a school newspaper. No software to download, all you need is an internet connection and a computer.We have many categories and many different templates to choose from',
          NewsPic:require('../assets/downloa.jpg'),
        },
        {
          id:5,
          Summary: "Article About newspapar Templete",
          date: '2-1-2019',
          Editor: 'Shiv Kumar Btalvi',
          Title: 'NEWSPAPER TEMPLATES FOR STUDENTS',
          Description: 'students who need newspaper templates will enjoy using our Cloud Designer!We have hundreds of templates to use, and each template can be completely customized in our easy to use Cloud Designer. It has never been easier to design and print a school newspaper. No software to download, all you need is an internet connection and a computer.We have many categories and many different templates to choose from',
          NewsPic: require('../assets/downlo.jpg'),
        }]
    ,
 fetchDatas(){
       alert("hi am api")
            return  this.users;
        }


}