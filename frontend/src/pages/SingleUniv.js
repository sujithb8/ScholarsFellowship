import { Card, CardContent, Stack, Typography } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Box, Container } from '@mui/system'
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Footer from '../component/Footer'
import LoadingBox from '../component/LoadingBox'
import Navbar from '../component/Navbar'
import { univLoadSingleAction } from '../redux/actions/jobAction'
import Button from '@mui/material/Button'
import { userApplyUnivAction } from '../redux/actions/userAction'
import { useTheme } from '@emotion/react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { date } from 'yup'


const SingleUniv = () => {
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const { singleUniv, loading } = useSelector(state => state.singleUniv)
    const { id } = useParams();
    useEffect(() => {
        dispatch(univLoadSingleAction(id));
    }, [dispatch, id]);

    const applyForAUniv = () => {
        dispatch(userApplyUnivAction({
            univName: singleUniv && singleUniv.univName,
            location: singleUniv &&singleUniv.location,
            state: singleUniv &&singleUniv.state,
            country: singleUniv &&singleUniv.country,
            type:  singleUniv &&singleUniv.type,
            gpa: singleUniv && singleUniv.gpa,
            gratio: singleUniv && singleUniv.gratio,
            rank: singleUniv && singleUniv.rank,
            approach: singleUniv && singleUniv.approach,
            acceptance: singleUniv && singleUniv.acceptance,
            gre:singleUniv && singleUniv.gre,
            ielts: singleUniv &&singleUniv.ielts,
            pte: singleUniv &&singleUniv.pte,
            toefl: singleUniv &&singleUniv.toefl,
            exams_accepted: singleUniv && singleUniv.exams_accepted,
            intakes: singleUniv && singleUniv.intakes,
            expenses: singleUniv && singleUniv.expenses,
            living_expenses: singleUniv && singleUniv.living_expenses,
            tuition_expenses: singleUniv && singleUniv.tuition_expenses,
            teaching_assistantships:singleUniv && singleUniv.teaching_assistantships,
            research_assistantships: singleUniv && singleUniv.research_assistantships,
            fellowships: singleUniv && singleUniv.fellowships,
            safety: singleUniv && singleUniv.safety,
            weather:singleUniv && singleUniv.weather,
            programs: singleUniv && singleUniv.programs,
            notes: singleUniv && singleUniv.notes,
            applicationStatus: singleUniv && singleUniv.applicationStatus,
            riskFactor: singleUniv && singleUniv.riskFactor,
            logo: singleUniv && singleUniv.logo,
            // image: singleUniv && singleUniv.image,
        }))
    }

  // Function to capitalize the first letter of a string
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  //display array list as separate points
// function StringList(props) {
//   return (
//      <ol>
//             {props.strings.map((str, index) => {
//                 // If the string is blank, skip rendering
//                 if (str.trim() === "") return null;

//                 return <li key={index}>{str}</li>;
//             })}
//         </ol>
//   );
// }


    return (
        <>

            <Box sx={{ bgcolor: "#fafafa" }}>

                <Navbar />
                <Box>
                    <Container sx={{ pt: '30px' }}>

                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={{ xs: 1, sm: 2, md: 4 }}
                        >
                            <Box sx={{ flex: 4, p: 2 }}>

                                {
                                    loading ? <LoadingBox />:

                                        <Card  >
                                            <CardContent>
                                                  <div>
                                         <Typography variant="h5" component="h3" sx={{color:palette.primary.text }}>
                                                    {singleUniv && capitalizeFirstLetter(singleUniv.univName)}
                                                </Typography>
                                                 <Typography variant="body2" sx={{ pt: 2 }}>
                                                    {/* <h3>Description:</h3> */}
                                                    {singleUniv && singleUniv.about }
                                                </Typography>
                                    </div>
    {/* Carousel */}
     <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    
            <div style={{backgroundColor:'#f0f0f0',padding:'0px 0px 20px 20px',display:'flex',flexDirection:'column',width:'40%',borderRadius:'20px'}}>
               <h3>General Info  </h3>
                                                <Typography variant="body1">
                                                    <b>Rank: </b>{singleUniv && singleUniv.rank} <br/>
                                                    <b>Type: </b> {singleUniv && singleUniv.type===false? 'Public':'Private'} <br/>

                                                 <b>Location: </b>{singleUniv && singleUniv.location} , {singleUniv && singleUniv.state} ,  {singleUniv && singleUniv.country}<br/>
                                                <b>Founded: </b> {singleUniv && singleUniv.founded_year}  {singleUniv && singleUniv.founded_date} <br/>
                                                 <b>Gender ratio: </b> {singleUniv && singleUniv.gratio} <br/>
                                                <b>Strength: </b> {singleUniv && singleUniv.strength} <br/>
                                                <b>Safety: </b>
                                                {singleUniv && singleUniv.safety}<br/>
                                                <b>Weather: </b>
                                                {singleUniv && singleUniv.weather}<br/>

                                                {/* Alumini */}
                                                 {singleUniv && singleUniv.aluminus.map((alumini, index) => {
                                                 return (
                                                  <div key={index}>
                                                   {alumini ? <h3><b>Alumini: </b> {alumini}</h3>: null}
                                                   </div>
                                                         );
                                                  })}

                                                   <b>Research positions: </b>{singleUniv && singleUniv.research_assistantships}<br/>
                                                   <b>Teaching positions: </b>{singleUniv && singleUniv.teaching_assistantships}<br/>
                                                   <b>Fellowships: </b>{singleUniv && singleUniv.fellowships}<br/>
                                                </Typography>
            </div>
            <div style={{backgroundColor:'#f0f0f0',padding:'10px',borderRadius:'20px'}}>
                <Carousel  renderThumbs={(children) => 
                children.map((slide, index) => 
                    <img key={index} src={slide.props.src} alt={`thumb-${index}`} />
                )
            } showThumbs={false} showStatus={true} showIndicators={false} showArrows={true}
            dynamicHeight={false} selectedItem={0} useKeyboardArrows={true} width={'350px'} 
            autoPlay={true} interval={5000}
            infiniteLoop={true}>
                                                         {singleUniv && singleUniv.images.map((eachimage, index) => (
                <div key={index}>
                    <img style={{ minWidth:'350px',maxWidth: '350px',minHeight:'250px',maxHeight:'250px' }} src={eachimage} alt={`carousel-item-${index}`} />
                </div>
            ))}
            </Carousel>
            </div> 
    </div>      
          
                                                 <h3>Admission requirements</h3>

    <div style={{backgroundColor:'#f0f0f0',padding:'20px',borderRadius:'20px'}}>

                                                <Typography variant="body1">
                                                    <b>GPA: </b>{singleUniv && singleUniv.gpa}<br/>
                                                    <b>Acceptance: </b>{singleUniv && singleUniv.acceptance}<br/>
                                                    <b>Approach: </b>{singleUniv && singleUniv.approach===false ? 'GPA':'Holistic'}<br/>
                                                    <b>Exams_accepted: </b>
                                                    {singleUniv && singleUniv.exams_accepted.join(', ')}<br/>
                                                    <b>Toefl: </b>{singleUniv && singleUniv.toefl}<br/>
                                                    <b>Duolingo: </b>{singleUniv && singleUniv.duolingo ? singleUniv && singleUniv.duolingo : "NA" }<br/>
                                                    <b>Pte: </b>
                                                    {singleUniv && singleUniv.pte}<br/>
                                                    <b>Ielts: </b>
                                                    {singleUniv && singleUniv.ielts}<br/>
                                                    <b>Gre: </b>
                                                    {singleUniv && singleUniv.gre}<br/>
                                                    <b>Intakes: </b>
                                                    {singleUniv && singleUniv.intakes.join(', ')}<br/>
                                                    <b>Expenses : </b>
                                                    ${singleUniv && singleUniv.expenses}<br/>
                                                    <b>Avg salary : </b>
                                                    ${singleUniv && singleUniv.average_salary}<br/>
                                                    <b>Application link: </b>
                                                    <a style={{ textDecoration: 'bold' }} href={singleUniv && singleUniv.general_application_link}>Apply  <OpenInNewIcon sx={{fontSize:15}}/></a><br/>
                                                    <b>General requirements: </b>
                                                     <div style={{backgroundColor:'#f0f0f0',padding:'10px'}}> 
                                                     {singleUniv && singleUniv.general_application_requirements.map((requirement,index) => (
       <ul> <div key={index}>
         <b> {index+1}. {requirement}</b>
        </div>
        </ul>
      ))}</div>     
                                                    <b>Application cost : </b>
                                                    ${singleUniv && singleUniv.general_application_cost}<br/>
                                                    <b>General deadline: </b>
                                                    <b>{Date(singleUniv && singleUniv.general_deadline).substring(3,15)}</b><br/> 
                                                    <b>Gre code: </b>
                                                    {singleUniv && singleUniv.gre_institution_code}<br/>
                                                    <b>Toefl code: </b>
                                                    {singleUniv && singleUniv.toefl_institution_code}<br/>
                                                    <b>Ielts code: </b>
                                                    {singleUniv && singleUniv.ielts_institution_code}<br/>
                                                    <b>Note: </b>
                                               <div>
                                                {singleUniv && singleUniv.notes.map((note, index) => {
                                                  return (
                                                    <ul>
                                                        <div key={index}  >
                                                            <b>{index+1}. {note}</b>
                                                        </div>
                                                    </ul>
                                                    );
                                                    })}  
                                                    </div>
                                                </Typography>
        
    </div>
              <h3>Programs</h3>
                                         {/* programs  listing nested array   */}
                                      <Typography variant="body2">
        
                                                        <hr/>
   <div  >
        {singleUniv && singleUniv.programs.map((program, index) => {
        return (
          <div key={index} >
            <h2>{program.program_name}</h2>
            <h3>program_description: {program.program_description}</h3>
            <h3>program_prerequisites: </h3>
            <b>{program.program_prerequisites.join('.')}</b>
            <h3>program_application_cost: $ {program.program_application_cost}</h3>
           <h3>program_application_requirements: </h3>
            <div style={{backgroundColor:'#f0f0f0',padding:'5px',borderRadius:'20px'}}>
              {program.program_application_requirements.map((requirement, index) => {
                 return (
                  <ul>
                  <div key={index}  >
                  <b>{index+1}. {requirement}</b>
                  </div>
                  </ul>
                   );
            })} 
            </div>
            <h3>program_degree: {program.program_degree}</h3>
            <h3>program_link:   <a style={{ textDecoration: 'bold' }} href={program.program_link}>Know more about program  <OpenInNewIcon style={{fontSize:15}} /></a> </h3>
            <h3>program_cost: $ {program.program_cost}</h3>
            <h3>program_notes:</h3>
            <div style={{backgroundColor:'#f0f0f0',padding:'5px',borderRadius:'20px'}} >
              {program.program_notes.map((note, index) => {
                 return (
                  <ul>
                  <div key={index}  >
                  <b>{index+1}. {note}</b>
                  </div>
                  </ul>
                   );
            })}  
            </div>

       <h3>Program application deadlines: </h3> 
       <div style={{ display:"flex", flexWrap:"wrap",width:"100%",backgroundColor:'#f0f0f0',margin:'0',borderRadius:'20px'}}>
        {program.program_intake_deadlines.map((intakes, index) => {
              return (
              <ul>
                <div key={index} style={{minHeight:'50px',maxHeight:'auto',minWidth:'160px',maxWidth:'auto',border:'1px solid #000000',padding:'5px',borderRadius:'10px'}} >
                    {/* <h4>{index+1}. Intake: {intakes.program_intake}</h4> */}
                    {/* OR */}
                {/* <h4> Intake:</h4> */}
                {/* <b> {intakes.program_intake}: {Date(intakes.program_intake_deadline).substring(3,15)}</b> */}
                   <b> {intakes.program_intake}: {(intakes.program_intake_deadline)}</b>
                  {/* <h4>program_notes:</h4> */}<br/>
                <b>  Note: {intakes.program_intake_notes}</b>
                </div>
               </ul>
              );
            })}  
</div>
<hr/>
          </div>
        );
      })}
      
</div>
                                                </Typography>
                                                
                                                <Typography variant="body2" sx={{ pt: 2 }}>
                                                    <h3>ApplicationDate: </h3>
                                                    {singleUniv && singleUniv.applicationDate}
                                                </Typography>
                                                <Typography variant="body2" sx={{ pt: 2 }}>
                                                    <h3>RiskFactor: </h3>
                                                    {singleUniv && singleUniv.riskFactor}
                                                </Typography>
                                                <Typography variant="body2" sx={{ pt: 2 }}>
                                                    <h3>ApplicationStatus: </h3>
                                                    {singleUniv && singleUniv.applicationStatus}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                }
                            </Box>
                     
                            <Box sx={{ flex: 1, p: 2,borderRadius:"10px" }}>
                                <Card sx={{ p: 2, bgcolor: palette.primary.main,borderRadius:"20px" }}>
                                    <Button onClick={applyForAUniv} sx={{ fontSize: "12px",borderRadius:"10px"}} variant='contained'>Shortlist</Button>
                                </Card>
                            </Box>
                        </Stack>

                    </Container>
                </Box>
                <Footer />
            </Box>
        </>
    )
}

export default SingleUniv