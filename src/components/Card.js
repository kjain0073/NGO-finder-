import React from 'react';
import Button from '@material-ui/core/Button';

const Card=(ngos)=> {
	return (
		<div className='bg-light-pink dib br3 pa3 ma4 grow shadow-6'>
				<article class="mw5 ">
				  <div>
				   	<img class="br-100 h6 w6" src={ngos.image}  alt="NGO"/>
				    <h1 class="navy">{ngos.name}</h1>
				    <hr class="mw3 bb bw1 b--black-50"/>
				    <h4 class="b">Email:</h4> <p>{ngos.email}</p>
				    <h4 class="f5 b">Date of Registration: </h4><p>{ngos.date}</p>
				    <h4 class="f5 b">Can Recieve Foreign Funding:</h4><p>{ngos.foreign_funding +''}</p>
				    <h4 class="f5 b">Address: </h4><p>{ngos.address_line1}
				     <br/>{ngos.address_line2}
				    </p>
				     <h4 class="b">City: </h4> <p>{ngos.address_city}</p>
				     <h4 class="b">District: </h4><p>{ngos.address_district}</p>
				     <h4 class="b">State: </h4><p>{ngos.address_state}</p>
				     <h4 class="b">Pincode:</h4><p>{ngos.address_pincode}</p>
				     <Button variant="contained" color="primary" disabled= {ngos.status} >
					   {ngos.claim}
					 </Button>
				  </div>
				</article>
		</div>
	);
}

export default Card;

