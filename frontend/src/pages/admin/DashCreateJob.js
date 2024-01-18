import { Box, MenuItem, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux'
import { registerUnivAction } from '../../redux/actions/jobAction';


const validationSchema = yup.object({
    univName : yup
        .string('Enter University Name ')
        .required('univName is required'),
    about: yup
        .string('Enter about the college')
        .min(32, 'about should be of minimum 32 characters length')
        .required('about is required'),
    rank: yup
        .number('Enter rank of college')
        .required('Rank is required'),
    location: yup
        .string('Enter a location')
        .required('Location is required'),
    type: yup
        .boolean('Enter a Type')
        .required('Type is required'),
});


const DashCreateJob = () => {
    const dispatch = useDispatch();



    const formik = useFormik({
        initialValues: {
            univName: '',
            about: '',
            rank: '',
            location: '',
            type:''
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            dispatch(registerUnivAction(values))
            // alert(JSON.stringify(values, null, 2));
            actions.resetForm();
        },
    });



    return (
        <>

            <Box sx={{ height: '100%', display: "flex", alignItems: "center", justifyContent: "center", pt: 4 }}>


                <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style' >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                        <Typography variant="h5" component="h2" sx={{ pb: 3 }}>
                            Add university
                        </Typography>
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="univName"
                            label="Univname"
                            name='univName'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="univName"
                            value={formik.values.univName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.univName && Boolean(formik.errors.univName)}
                            helperText={formik.touched.univName && formik.errors.univName}
                        />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="about"
                            name="about"
                            label="About"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="about"
                            value={formik.values.about}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.about && Boolean(formik.errors.about)}
                            helperText={formik.touched.about && formik.errors.about}
                        />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="rank"
                            name="rank"
                            label="Rank"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="rank"
                            value={formik.values.rank}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.rank && Boolean(formik.errors.rank)}
                            helperText={formik.touched.rank && formik.errors.rank}
                        />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="location"
                            name="location"
                            label="Location"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Location"
                            value={formik.values.location}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.location && Boolean(formik.errors.location)}
                            helperText={formik.touched.location && formik.errors.location}
                        />

                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            className="px-2 my-2"
                            variant="outlined"
                            name="type"
                            id="type"
                            select
                            label="Type"
                            value={formik.values.type}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.type && Boolean(formik.errors.type)}
                            helperText={formik.touched.type && formik.errors.type}
                        >
                            <MenuItem key={""} value={""}>

                            </MenuItem>

                        </TextField>

                        <Button fullWidth variant="contained" type='submit' >Create job</Button>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default DashCreateJob