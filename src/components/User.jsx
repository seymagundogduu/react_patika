import PropTypes from 'prop-types';

function User({name, surname, age, isLoggedIn, friends , address}) {
   // console.log(props);
return (
   
<>

   <h1>  {isLoggedIn ? `${name}  ${surname}  ${age} ` : "Giriş yapmadınız"  }</h1>  

{ address.title} {address.zip} 
<br/>
{
    friends.map((friends, index) => ( <div key={index}>  {friends} </div>))
}

 


</>
);
}

User.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number,
    })
}
 export default User;