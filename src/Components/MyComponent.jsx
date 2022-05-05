import React, { Component } from 'react'

export default class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
    }
   

    
    componentDidMount() {
        fetch("https://randomuser.me/api/")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.results
              });
            },
            (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )
        }
    componentDidUpdate(buttons){
      buttons=Array.from(document.getElementsByName('new'))
      
    
      
      fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.results
            });
          },
          (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
       
      
    
      
    }
    // reRender(){
    //   alert('asd')
      
    //   fetch("https://randomuser.me/api/")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         isLoaded: true,
    //         items: result.results
    //       });
    //     },
    //     (error) => {
    //         this.setState({
    //           isLoaded: true,
    //           error
    //         });
    //       }
    //     ) 
    // }
 
    render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
                {item.name.title}  {item.name.first} {item.name.last},{item.gender}<br/>
                {item.location.city}, {item.location.state}, {item.location.country} <br/>
                {item.location.timezone.offset}, {item.location.timezone.description} <br/>
                {item.email} <br/>
                date:{item.dob.date}, age:{item.dob.age} <br/>
                phone number {item.phone}
                <img  src={item.picture.large} alt="s"/>
                {/* <button className='new' value='Следуйщий' onClick={this.reRender}></button> */}
                {/* <input type="button" class="new" value="Следующий"   /> */}
            </li>
        
          ))}
        </ul>
      );
    }
  }
}
