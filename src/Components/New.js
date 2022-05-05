import React, { Component } from 'react'

export default class New extends Component {
  constructor(props){
      super(props);
      this.state={
       title:"ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ",
      textfirst:"Конфиденциальность",
      textsecond:"Условия",
      textthird:"Политика в отношении файлов Cookie",
      textfour:"Интеллектуальная Собственность"
      }
  }
    render() {
    return (
      <div className='end'>
          <h3>{this.state.title}</h3>
          <h5>{this.state.textfirst}</h5>
          <h5>{this.state.textsecond}</h5>
          <h5>{this.state.textthird}</h5>
          <h5>{this.state.textfour}</h5>

      </div>
    )
  }
}
