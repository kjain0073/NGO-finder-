import React from 'react';
import Card from './Card';

const CardList=({ ngos })=>{
	return (
	<div>
		{
			ngos.map((user)=>
			{
				return (<Card
				 	key={user.id}
			 		name={ user.name} 
			 		email={user.email} 
			 		date={user.date}
			 		image={user.image}
			 		foreign_funding={user.foreign_funding}
			 		address_line1={user.address.line1}
			 		address_line2={user.address.line2}
			 		address_city={user.address.city}
			 		address_district={user.address.district}
			 		address_state={user.address.state}
			 		address_pincode={user.address.pincode}
			 		status={user.status}
			 		claim={user.claim}
			 		/>
			 	 );
			})
		}
	</div>
	);
}

export default CardList;