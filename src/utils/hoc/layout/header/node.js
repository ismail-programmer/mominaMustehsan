class App extends React.Component{

   constructor(){
      super();
      this.state = {value: ''}
   }
   
   unCheck(i){
      let ref = 'ref_' + i;
      this.refs[ref].checked = !this.refs[ref].checked;
   }
   
   render(){
     return (
       <div>
        {[1,2,3,4,5].map((item,i) => {
           return (
              <div>
                 <input type="checkbox" checked={true} ref={'ref_' + i}/>
                 <button onClick={()=>this.unCheck(i)}>Toggle</button>
              </div>
            )
        })}      
       </div>
     )
   }

}