import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CardElement from '../../component/CardElement'
// import SelectComponent from '../../component/SelectComponent'


const UserJobsHistory = () => {
    // eslint-disable-next-line no-sequences
    const { user } = useSelector(state => state.userProfile);
// const [status, setStatus] = React.useState('');
//   const handleChangeStatus = (e) => {
//         setStatus(e.target.value);
//     }

    return (
        <>
            <Box>
                <Typography variant="h4" sx={{ color: "#fafafa" }}> University Shortlist</Typography>
                <Box>
                    {
                        user && user.univShortlist.map((shortlist, index) => (
                         <>   <CardElement
                                key={index}
                                id={shortlist._id}
                                univName={shortlist.univName}
                                about={shortlist.about}
                                type={shortlist.type}
                                location={shortlist.location}
                                rank={shortlist.rank}
                               
                            />
                             </>
                        ))
                    }

                </Box>
            </Box>
        </>
    )
}

export default UserJobsHistory