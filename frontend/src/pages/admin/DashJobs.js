import React, { useEffect } from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'
import { DataGrid, gridClasses, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { univLoadAction } from '../../redux/actions/jobAction';
import LoadingBox from '../../component/LoadingBox';



const DashJobs = () => {


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(univLoadAction())
    }, [dispatch]);


    const { univs, loading } = useSelector(state => state.loadUnivs);
    let data = [];
    data = (univs !== undefined && univs.length > 0) ? univs : []


    //delete univ by Id
    const deleteUnivById = (e, id) => {
        console.log(id)
    }

    const columns = [

        {
            field: '_id',
            headerName: 'Univ ID',
            width: 150,
            editable: true,
        },
        {
            field: 'univName',
            headerName: 'Univ name',
            width: 150,
        },
        {
            field: 'type',
            headerName: 'Category',
            width: 150,
        },
        {
            field: "Actions",
            width: 200,
            renderCell: (values) => (
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "170px" }}>
                    <Button variant="contained"><Link style={{ color: "white", textDecoration: "none" }} to={`/admin/university/update/${values.row._id}`}>Update</Link></ Button>
                    < Button onClick={(e) => deleteUnivById(e, values.row._id)} variant="contained" color="error">Delete</ Button>
                </Box>
            )
        }
    ];


    return (
    <Box>  { loading ? <LoadingBox /> :
       <Box >
           
            <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
                All Universities
            </Typography>
            <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
                <Button variant='contained' color="success" startIcon={<AddIcon />}> <Link style={{ color: "white", textDecoration: "none" }} to="/admin/university/create">Create Univ</Link></Button>
            </Box>
            <Paper sx={{ bgcolor: "secondary.midNightBlue" }} >

                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        getRowId={(row) => row._id}
                        sx={{

                            '& .MuiTablePagination-displayedRows': {
                                color: 'white',
                            },
                            color: 'white',
                            [`& .${gridClasses.row}`]: {
                                bgcolor: (theme) =>
                                    // theme.palette.mode === 'light' ? grey[200] : grey[900],
                                    theme.palette.secondary.main
                            },
                            button: {
                                color: '#ffffff'
                            }

                        }}
                        rows={data}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        slots={{ toolbar: GridToolbar }}
                    />
                </Box>
            </Paper>

        </Box>
                    }</Box> 
        
    )
}

export default DashJobs