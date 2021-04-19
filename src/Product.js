import React from 'react'
import {connect} from 'react-redux';
import {updateUser} from './store/actions/userActions';

function Product(props) {
    console.log(props)
    return (
        <div>
            this is function component
        </div>
    )
}

const mapStateToProps =(state,props)=>{
    return{
      products:state.products,
      user:state.user
    }
  }
  const mapDispatchToProps= {
    onUpdateUser : updateUser
  }


export default connect(mapStateToProps,mapDispatchToProps)(Product);
