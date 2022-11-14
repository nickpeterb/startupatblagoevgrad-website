import { useState, useRef } from "react";
import { GoogleSpreadsheet } from 'google-spreadsheet'
import styled from 'styled-components'


function App() {
  const [formData, setFormData] = useState({})
  const formRef = useRef(null)
  const scriptUrl = "get yours by practicing"
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(undefined);

  //Import environmental varialbles
  const {
    REACT_APP_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCxzRRwrh6Zh2z/\nGt7kodmzUFSUebzOT/jbPLnKMdFBJwg5QoPz0xE5AAaEYUnXAWahNUX7wjHcGJEn\npr7zeFyUksFiA23xYN/wrGuR/YHiQ6mjDX//TUNlv00YBfXaIjYoaL0O8kHd2sgj\nE/xj/KZXHPvLYHhYenGPDuueYCo6CwPTioOo48G3z6A7y1OCBzOBXK3ByWHN4RXM\nypZ812A4oInsVYeY+NGBo2t/s+SPJmcRf2h5+eVQKM2ZNNUU+dhv8vbZpnSRDyzp\nhOdGXrYAfyLSKSFx/g32WD3DyLMXWUer628SUs+CW0qsLIT0d+HWwCX57jkuP4NR\n4/Hm3py3AgMBAAECggEAFVL3RJxdZyRq2h2q5djTd0IHIteG4WeN/R1HWwymgB3i\nSpvDn5aM1j0+itnwNS0h1evBvPQJbtAzeIHzHNguolMHhm3K3cw0j3TeYd/5l91t\nlvSjiUcG8kkDQgJU/hhkTmxhYE2FwMngfvSCrKs8d+4t9LJZPKNSw0mS0KfP6K3+\nVfMnCVzAq6qRpKzzyldozxbozMNWU8dJr52Wh/AEDXQuk8QOhznbZZCaHu7Z8kcV\n7+JfZhJa8XgzaVz+4PKhIavsXM8OqjS9Ke2fNwg2zdZEfELCG//jflA/CwoJVn5q\n2jXLVXDdaAu3nLoB8Kv0TE3tAwVNPE6JYivXruVq4QKBgQDXh2z7gkWq0AoJ8QAJ\ncYVsn4icJf/3W5lrO0gqTbu8o4x6Z5Gs3TaVKUMHVl2M2gK+OsNe0RzmKMLiIGNN\n0o4j4EEfU6q5bvQmSP8qBD7PCWP6P8ma8064DDDrjd7gcR3ECtsAseOTYqRezF1F\ncsz1oaGbRexYVWPVMKsZyRzarQKBgQDTMA6EfHqWTjJUARn2k/xEhVa+PXWs6v8u\n1pTaOIkTDdcWr4qWOsTi3JxUiwP6ITztRPD0aNa1z+C+vCjwM6Zk0fkJ6vgZrN+C\nLQDyZCVxxt4cokq70d5iFtkb6Ds8SgCVdQIuLHJE0q65kl7cJV4n/18eJi/9Mht2\nWM/HOI8FcwKBgQChaFI9qLnzygk6mLmmWNXLG057YhnnbTngDG1nAP/vrauun5GB\nG8mcu2HvRMaajUownGFjyMcTtsL8BbVYuq6oP3GFvGrGpElDwrcVCEjhU+8DonGh\nEUWKn9ajEYQwIYZhIqAQTShZYC4osHPJZsgHzBvy5NKy9H/nUKNSlEJ/oQKBgG01\nMqysOjAzq67pCuYJzLAaS6sA2TNcKi2sZTkbdzbVN17R09av+VRfRLArWxkjyv/f\nYMLi2/UU1GGNp5Xe/7KvKhtI2JdeYA5O+2hdBUf60Kz59698bYVHz2mxA8C/e+HN\nqhz6evTABf6MhGVPJYuFcUiD8tj56l2eu4OH6d2lAoGBAKb/GHUs2uTmIyeHPcVP\nBcZXwhfp20x1BfXCY9r31xDP7XBB3G4AM+OJsryOvvQD9zCF6k9XctAILSxa41XN\nuTzS6NlZQ3wbxTIF9Hnupyv5pVq7Jdw8L0dK4mwcYFhUOiMNKnr5EiSyqTkSeNf1\nN6CPJUFK+bM97CwcuvkSaxdP\n-----END PRIVATE KEY-----\n",
    REACT_APP_CLIENT_EMAIL = "it-connect@it-form-362907.iam.gserviceaccount.com",
    REACT_APP_SPREADSHEET_ID = "1WkRVLu9iDDn5iYdSMI7z1w6FFUGuViUquegQGCLER9U",
    REACT_APP_SHEET_ID = "0"
  } = process.env

  //creating new object of google spreadsheet
  const doc = new GoogleSpreadsheet(REACT_APP_SPREADSHEET_ID);

  //Function append spreadsheet to add row into google sheet

  const appendSpreadsheet = async (row) => {
    console.log(REACT_APP_CLIENT_EMAIL);
    try {
      await doc.useServiceAccountAuth({
        client_email: REACT_APP_CLIENT_EMAIL,
        private_key: REACT_APP_PRIVATE_KEY,
      });
      await doc.loadInfo();
      console.log(doc.loadInfo());
      const sheet = doc.sheetsById[REACT_APP_SHEET_ID];
      const result = await sheet.addRow(row);
      return result;
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  //end

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    appendSpreadsheet(formData)

    fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),
    }).then(() => {
        setStatus({ type: 'SUCCESSFULY SUBMITTED' });
      })
      .catch((error) => {
        setStatus({ type: 'error', error });
      });
  };

  return (
    <FormStyle>
    <div className="container">
    <form  className="App" onSubmit={handleSubmit}>
    <h1><span style={{ color: "#FFFFFF" }}>IT Department</span></h1>
        <h2><a href={"https://www.startupatblagoevgrad.org/"}><span style={{ color: "#4B464D" }}>StartUP@Blagoevgrad</span></a></h2>
        <h1>Application Form</h1>
          <label>Important note: Applications with unanswered quiestions will not be accepted.</label> 
          <label>There will be no confirmation email after submitting the form.</label> 
          <div><span style={{ fontWeight: 'bold' }}>More about our department you can find <a href={"https://www.youtube.com/watch?v=7O0Up867JGI"}><span style={{ textDecorationLine: 'underline', color: "#000000" }}>here.</span></a></span></div>
          <div>Good luck!</div>
          <div className="input-style">
            <label htmlFor='name'>First and last name</label>
            <input type="text" name="q1" placeholder="Enter your answer..." onChange={handleInputChange} />
          </div>
          <div className="input-style">
            <label htmlFor='name'> AUBG Email (ex. abc123@aubg.edu)</label>
            <input type="text" name="q2" placeholder="Enter your answer..." onChange={handleInputChange} />
          </div>
          <div className="input-style">
            <label htmlFor='name'>Standing (Freshman, Sophomore, Junior, Senior)</label>
            <input type="text" name="q3" placeholder="Enter your answer..." onChange={handleInputChange} />
          </div>
          <div className="input-style">
            <label htmlFor='name'>What do you know about StartUP and from where?</label>
            <input type="text" name="q4" placeholder="Enter your answer..." onChange={handleInputChange} />
          </div>
          <div className="input-style">
            <label htmlFor='name'>Do you have any previous programming experience? If so, list some of the languages and technologies you've worked with</label>
            <input type="text" name="q5" placeholder="Enter your answer..." onChange={handleInputChange} />
          </div>
          <div className="input-style">
            <label htmlFor='name'>If you do have some experience, tell us about a project you enjoyed working on, whether it was a personal project or work related.</label>
            <input type="text" name="q6" placeholder="Enter your answer..." onChange={handleInputChange} />
          </div>
          <div className="input-style">
            <label htmlFor='name'>What do you enjoy more, working individually or as a team? Why?</label>
            <input type="text" name="q7" placeholder="Enter your answer..." onChange={handleInputChange} />
          </div>
          <div className="input-style">
            <label htmlFor='name'>Imagine you are given a task (programming or otherwise) which you have no idea how to complete. List some of the steps you would take to complete the task.</label>
            <input type="text" name="q8" placeholder="Enter your answer..." onChange={handleInputChange} />
          </div>
          <div className="input-style">
            <label htmlFor='name'>Would you be willing to learn React basics?</label>
            <input type="text" name="q9" placeholder="Enter your answer..." onChange={handleInputChange} />
          </div>
          <div className="input-style">
            <label htmlFor='name'>No project is perfect. If you could make any changes or additions to our current website, what would they be? Anything goes</label>
            <input type="text" name="q10" placeholder="Enter your answer..." onChange={handleInputChange} />
          </div>
          <div className="input-style">
            <label htmlFor='name'>Do you have any experience with statisitcs? Specify.</label>
            <input type="text" name="q11" placeholder="Enter your answer..." onChange={handleInputChange} />
          </div>
          <div className="input-style">
            <label htmlFor='name'>Write down a question that you think is relevant for an IT Application form and answer it!</label>
            <input type="text" name="q12" placeholder="Enter your answer..." onChange={handleInputChange} />
          </div>
    <div className="input-style">
  
        <input type="submit" value={loading ? "Successfully submitted" : "SUBMIT"} />
    </div> 
    </form>
    </div>
</FormStyle>  
)
}

export default App;

const FormStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .container{
        background-color: #60CB94;
        margin-top: 1%;
        padding: 10rem 10rem 10rem 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        @media(max-width: 610px){
            padding: 4rem 4rem 4rem 4rem;
        }

        .input-style{
            padding-top: 0.8em;
            display: flex;
            flex-direction: column;
            gap: 0.8em;

            label{
                font-family: 'Poppins', sans-serif;
                font-weight: bold;
            }

            input{
                outline: none;
                border: none;
                padding: 0.8em;
                border-radius: 2em;
            }
            input[type=submit]{
                background-color: #376F52;
                color: #FFFFFFFF;
                font-weight: bold;


            }
        }

    }
  `