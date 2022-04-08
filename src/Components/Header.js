import "./Header.css"
function Header(){
    return(
        <div className="Header">
          <div className="line">
         
           <div className="picture">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_aHQmHh7mPmJwhiBTKqRs1P_Ze7-UD34cRg&usqp=CAU" alt="go"/>
             
           </div>
           
           <h2 className="text first">Продукты</h2>
           <h2 className="text second">О нас</h2>
           <h3 className="text third">Советы по безопасности</h3>
           <h2 className="text four">Поддержка</h2>
           <h2 className="text five">Установить</h2>
           <h2 className="text six">Русский</h2>
           <input className="but2" type="button" value="Создать аккаунт"/>
           <input className="but" type="button" value="Войдите"/>
           <h1 className="seven">Свайп вправа</h1>
           
          </div>
          
        </div>
    );
}
export default Header