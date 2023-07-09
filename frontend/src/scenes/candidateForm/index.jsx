import { Box, Button, TextField, FormControl, Radio, RadioGroup, FormControlLabel, FormLabel } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React, { useContext, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { adddata } from '../../components/context/ContextProvider';
import Stack from "@mui/material/Stack";

const CandidateForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const { udata, setUdata } = useContext(adddata);

  // const history = useHistory();

  const [inpval, setINP] = useState({
    candidatename: "",
    gender: "",
    currentorganisation: "",
    currentdesignation: "",
    overallexp: "",
    relevantexp: "",
    qualification: "",
    perferredlocation: "",
    currentsalary: "",
    expectedsalary: "",
    variable: "",
    fixed: "",
    other: "",
    age: "",
    noticeperiod: "",
    nationality: "",
    visatype: "",
    remarks: "",
    pannumber: "",
    linkedinurl: "",
    functionalarea: "",
    dob: "",
    joininglocation: "",
    reportinglocation: "",
    source: "",
    maritalstatus: "",
    resume: "",
  })

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value
      }
    })
  }


  const addinpdata = async (e) => {
    e.preventDefault();

    const { candidatename, gender, currentorganisation, currentdesignation, overallexp, relevantexp,
      qualification, perferredlocation, currentsalary, expectedsalary, variable,
      fixed, other, age, noticeperiod, nationality, visatype, remarks, pannumber,
      linkedinurl, functionalarea, dob, joininglocation, reportinglocation, source,
      maritalstatus, resume } = inpval;

    const res = await fetch("http://localhost:8001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        candidatename, gender, currentorganisation, currentdesignation, overallexp, relevantexp,
        qualification, perferredlocation, currentsalary, expectedsalary, variable,
        fixed, other, age, noticeperiod, nationality, visatype, remarks, pannumber,
        linkedinurl, functionalarea, dob, joininglocation, reportinglocation, source,
        maritalstatus, resume
      })
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
      alert("error");

    } else {
      // history.push("/")
      setUdata(data)
      console.log("data added");

    }
  }

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form className="mt-4">
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Candidate Name"
                onBlur={handleBlur}
                value={inpval.candidatename}
                onChange={setdata}
                name="candidatename"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  label="Gender"
                  onBlur={handleBlur}
                  value={inpval.gender}
                  onChange={setdata}
                  name="gender"
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />

                </RadioGroup>
              </FormControl>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Current Organisation"
                onBlur={handleBlur}
                value={inpval.currentorganisation}
                onChange={setdata}
                name="currentorganisation"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Current Designation"
                onBlur={handleBlur}
                value={inpval.currentdesignation}
                onChange={setdata}
                name="currentdesignation"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Overall Exp"
                onBlur={handleBlur}
                value={inpval.overallexp}
                onChange={setdata}
                name="overallexp"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Relevant Exp"
                onBlur={handleBlur}
                value={inpval.relevantexp}
                onChange={setdata}
                name="relevantexp"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Qualification"
                onBlur={handleBlur}
                value={inpval.qualification}
                onChange={setdata}
                name="qualification"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Perferred Location"
                onBlur={handleBlur}
                value={inpval.perferredlocation}
                onChange={setdata}
                name="perferredlocation"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Current Salary"
                onBlur={handleBlur}
                value={inpval.currentsalary}
                onChange={setdata}
                name="currentsalary"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Expected Salary"
                onBlur={handleBlur}
                value={inpval.expectedsalary}
                onChange={setdata}
                name="expectedsalary"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Variable"
                onBlur={handleBlur}
                value={inpval.variable}
                onChange={setdata}
                name="variable"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Fixed"
                onBlur={handleBlur}
                value={inpval.fixed}
                onChange={setdata}
                name="fixed"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Other"
                onBlur={handleBlur}
                value={inpval.other}
                onChange={setdata}
                name="other"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Age"
                onBlur={handleBlur}
                value={inpval.age}
                onChange={setdata}
                name="age"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Notice Period"
                onBlur={handleBlur}
                value={inpval.noticeperiod}
                onChange={setdata}
                name="noticeperiod"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nationality"
                onBlur={handleBlur}
                value={inpval.nationality}
                onChange={setdata}
                name="nationality"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Visa Type"
                onBlur={handleBlur}
                value={inpval.visatype}
                onChange={setdata}
                name="visatype"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Remarks"
                onBlur={handleBlur}
                value={inpval.remarks}
                onChange={setdata}
                name="remarks"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Pan Number"
                onBlur={handleBlur}
                value={inpval.pannumber}
                onChange={setdata}
                name="pannumber"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Linkedin Url"
                onBlur={handleBlur}
                value={inpval.linkedinurl}
                onChange={setdata}
                name="linkedinurl"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Functional Area"
                onBlur={handleBlur}
                value={inpval.functionalarea}
                onChange={setdata}
                name="functionalarea"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                label="Date of Birth"
                type="date"
                name="dob"
                defaultValue="2017-05-24"
                variant="filled"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={handleBlur}
                value={inpval.dob}
                onChange={setdata}
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />

              {/* <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Date of Birth"
                onBlur={handleBlur}
                value={inpval.dob}
                onChange={setdata}
                name="dob"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              /> */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Joining Location"
                onBlur={handleBlur}
                value={inpval.joininglocation}
                onChange={setdata}
                name="joininglocation"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Reporting Location"
                onBlur={handleBlur}
                value={inpval.reportinglocation}
                onChange={setdata}
                name="reportinglocation"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Source"
                onBlur={handleBlur}
                value={inpval.source}
                onChange={setdata}
                name="source"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Marital Status"
                onBlur={handleBlur}
                value={inpval.maritalstatus}
                onChange={setdata}
                name="maritalstatus"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Resume"
                onBlur={handleBlur}
                value={inpval.maritalstatus}
                onChange={setdata}
                name="maritalstatus"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              {/* <Stack direction="row" alignItems="center" spacing={2}>
                <Button variant="contained" component="label">
                  Resume Upload
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
              </Stack> */}
              
              



            </Box>
            <Box display="flex" justifyContent="center" mt="20px">
              <Button type="submit" onClick={addinpdata} color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  candidatename: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  candidatename: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default CandidateForm;
