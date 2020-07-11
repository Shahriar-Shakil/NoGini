import React from 'react'
import Card from "./UserInfoCard"
import Pagination from "material-ui-flat-pagination";
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';

const Results = (props) => {
    const [offset, setOffset] = React.useState(3);
    const handleClick=(offset)=> {
        setOffset(offset );
      }

    const { users} = props;
// console.log(props.users)
// if (Object.entries(users).length === 0 && users.constructor === Object)
//   return (<p> loading ...</p>);
// else
    return (
      <React.Fragment>
       <Grid container spacing={3}>
        
    
        {users.map(user => (
          <Grid item xs={12} sm={6} md={4} lg={4} >
              <Card key={user._id} userData={user} showDetails={false} /> 
              </Grid>
            ))} 

        
       </Grid>


            <Box
          display="flex"
          justifyContent="center"
          m={1}
          p={1}
         
        >
        
        
            <Pagination
          limit={10}
          offset={offset}
          total={100}
          onClick={(e, offset) => handleClick(offset)}
        /> 
        </Box>  
        </React.Fragment>
    )
}

export default Results
