import { Box, Button, TextField, FormControl, Radio, RadioGroup, FormControlLabel, FormLabel } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React, { useContext, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { adddata } from '../../components/context/ContextProvider';
import Stack from "@mui/material/Stack";


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const ClientForm = () => {
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
      <Header title="Create Client" subtitle="Create a New client Profile" />

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
                label="Client Logo"
                onBlur={handleBlur}
                value={inpval.candidatename}
                onChange={setdata}
                name="candidatename"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Client"
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
                label="Mobile"
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
                label="Email"
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
                label="LeadName"
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
                label="Address"
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
                label="Location"
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
                label="Phone No"
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
                label="Fax"
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
                label="WebSite"
                onBlur={handleBlur}
                value={inpval.variable}
                onChange={setdata}
                name="variable"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  fullWidth
                  value={inpval.age}
                  label="age"
                  name="age"
                  variant="filled"
                  type="text"
                  onBlur={handleBlur}
                  onChange={setdata}
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 2" }}
                >
                  <MenuItem value={10}>Goods</MenuItem>
                  <MenuItem value={20}>Accounting/Finance</MenuItem>
                  <MenuItem value={30}>Acting</MenuItem>
                  <MenuItem value={30}>Admin</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Functional Area:"
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
                label="Target Employers"
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
                label="No Poach Companies"
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
                label="Remark"
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
                label="Company Detail"
                onBlur={handleBlur}
                value={inpval.visatype}
                onChange={setdata}
                name="visatype"
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
                Create New client
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

export default ClientForm;
