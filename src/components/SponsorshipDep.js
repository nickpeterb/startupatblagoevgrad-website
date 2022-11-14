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
    REACT_APP_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCd7/nfCXnZCZeA\nNIyeqMVWTbUHvbKEjpyJ0zUZ9QLMS0bGqAGsRmLI0TQ5F6nvwnfInsPOZ6sG8N3N\nEdF0HyHIQg/LBIydftUgyDBVTFfRCV5qbYFjfmvgrLENJiWRKY4eJ+QOJ9JPMQaD\nn/4UaxiqyZ+jWtoGb6DUoUh4p2tQPdQN7uPEXbqOs8zD22UADiyFlVbMYcTerG4o\n11XoTWirpX0n/nx0dfWbzUyW3+Q0sEdNJZEu7JWpe3mNaVu36GzV/cH6PMS9j/8U\nAX3WxWLbTMRbLYuAupf0z7mW24Kp5fgmnxAThpAa34cHrM6E0YBJE4KUKGDn7lAq\nstc1weRbAgMBAAECggEATGJTptseYymQbCD+IX3ecu8CLsxAGnwemUnc1MD6qXN+\nt3Vp2bfw7s6/Qx1+wsZ6yDyA1sKspJ65pwSHGHI2FHRezwFUQJem3EP1nEtf7Wlq\nkG6FtWjfI7phpspcQOioI02HrpDz1fkP/XjTmWxycacx3f+CkrpKPowCUNgnvpZl\n4Qu05dR/bnn25zRLr0ylDP7Nx5eLWVKnZpqOgtekgvCtV8wI6fG7HiIqtLt5os7T\neG4YlXDyf09qYXyfvdsIe2X8SrS8C+uteqSex5NdwH9dZaem+mx1PSZUv891MSVr\nm4VDfXVCYlu20bJx3q4tEXbjGH7OlaERR8a0bEc7AQKBgQDRSJm87eGGTR7SGVFt\nRQ1FPdvaxmHkIkvsNlUZVu2kuTxwPguN3P1tOmJS2cBxPu9dj9OM6/wjXME4uMQe\n4BETR0hMToJxj1s04CsgJl2gpmLWwjMU0HbFU6ZjEYMYCbDNSw+QIYLGL6XGtBd4\nMCpNCQ1JZwLKtZ7k/PHMbZGWcwKBgQDBMTmUBdX5kBOULd9+Ojm6fVKpVKf6tB9e\n+yazvJ2bJ5w46XxLllndadbwP9nwEPPHLVkdsNXC74n5Gh0FlAn0tTsl7oe+C+YD\nqGI+UUbDNZVNDmfRQqbxb/YmAsqdBQx8prMLnlV2Pz0qkpJWECl++vwbVGqqlCNs\n6p7T1g0YeQKBgQDF/Rj0U1d35p2xxaHy7dCQIOVNI0CYwplw7jWzszk/DL7QsOHd\nY6OdIg7Csp4MhK2OpfJM7zOpgKaLMsDXNMLyqg0Lo3pkVGrEqw4hbCpHQSFganhI\nyK6UH37ZWkfbBc/tZ4VhpVJCi/EY+mb5nRdnqZiYSIurmgaoO2PFMiL5YQKBgGqX\nPTx1Z9S08Ih+MuRTPcyuHrB8m93QCcr+6SCb/Z1AYopoEIMn5lcqcUPHBvjUcZxA\nYf3mtlpCja6aAM82GbQhVgwcqlpp+DOmcOYPM+q6orCMNS2ZB8EIVBguzBmMUpJn\n6zuK1X5Tb+0QR5siebKsyfJORjftWgpa/NzGKh2JAoGAPlrIcB+M8zWCVnIRQWxe\n7i8q1gWdISoGPtO6B5mwvq6boRgI0jYHs9Mz7WLNQFX60YlbmMk5iqeazDA+t3zV\n8svW+zxKTlj7BdIEKe8b1OYe3b294cFEJm8wsxdn7pSIH4TeQocOyz8P2lizwVvC\noZNRBBUZduPCFsanyc5VMFU=\n-----END PRIVATE KEY-----\n",
    REACT_APP_CLIENT_EMAIL = "sponsorship-connect@sponsorship-form.iam.gserviceaccount.com",
    REACT_APP_SPREADSHEET_ID = "1vdisk7bfsCt4yvtjtkfo5PI_ehLaTMeVcDD8h2GH6Ng",
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
    <h1><span style={{ color: "#FFFFFF" }}>Sponsorship Department</span></h1>
        <h2><a href={"https://www.startupatblagoevgrad.org/"}><span style={{ color: "#4B464D" }}>StartUP@Blagoevgrad</span></a></h2>
        <h1>Application Form</h1>
        <label>Important note: Applications with unanswered quiestions will not be accepted.</label> 
          <label>There will be no confirmation email after submitting the form.</label> 
        <div><span style={{ fontWeight: 'bold' }}>More about our department you can find <a href={"https://youtu.be/gDu27uXOyjI"}><span style={{ textDecorationLine: 'underline', color: "#000000" }}>here.</span></a></span></div>
        <div> Good luck!</div>
          
    <div className="input-style">
        <label htmlFor='name'>First and last name</label>
        <input type="text" name="q1" placeholder="Enter your answer..." onChange={handleInputChange}/>
    </div>  
    <div className="input-style">
        <label htmlFor='name'>AUBG Email (ex. abc123@aubg.edu)</label>
        <input type="text" name="q2" placeholder="Enter your answer..." onChange={handleInputChange}/>
    </div>
    <div className="input-style">
        <label htmlFor='name'>Standing (Freshman, Sophomore, Junior, Senior)</label>
        <input type="text" name="q3" placeholder="Enter your answer..." onChange={handleInputChange}/>
    </div>
    <div className="input-style">
        <label htmlFor='name'>What do you know about StartUP and from where?</label>
        <input type="text" name="q4" placeholder="Enter your answer..." onChange={handleInputChange}/>
    </div>
    <div className="input-style">
        <label htmlFor='name'>What is your biggest achievement?</label>
        <input type="text" name="q5" placeholder="Enter your answer..." onChange={handleInputChange}/>
    </div>
    <div className="input-style">
        <label htmlFor='name'>What do you dislike about teamwork?</label>
        <input type="text" name="q6" placeholder="Enter your answer..." onChange={handleInputChange}/>
    </div>
    <div className="input-style">
        <label htmlFor='name'>What about StartUP excites you the most?</label>
        <input type="text" name="q7" placeholder="Enter your answer..." onChange={handleInputChange}/>
    </div>
    <div className="input-style">
        <label htmlFor='name'>How would you approach a potential sponsor?</label>
        <input type="text" name="q8" placeholder="Enter your answer..." onChange={handleInputChange}/>
    </div>
    <div className="input-style">
        <label htmlFor='name'>Imagine that you are about to have a call with a company representative to offer them a sponsorship agreement, and you have the contacts of the following officials: Sales, Human Resources and Marketing managers; Whom would you call and why?</label>
        <input type="text" name="q9" placeholder="Enter your answer..." onChange={handleInputChange}/>
    </div>
    <div className="input-style">
        <label htmlFor='name'>If you could choose a sponsor for our next event, who would it be and why?</label>
        <input type="text" name="q10" placeholder="Enter your answer..." onChange={handleInputChange}/>
    </div>
    <div className="input-style">
        <label htmlFor='name'>Write down a question that you think is relevant for a Sponsorship Application form and answer it.</label>
        <input type="text" name="q11" placeholder="Enter your answer..." onChange={handleInputChange}/>
    </div>
    <div className="input-style">
        <label htmlFor='name'>Good job! You are almost done with the application form, however, if you are one of the brave ones, we dare you to do one more thing! Call one of the following numbers, tell your name and ask the person who picks up the phone, what their favorite summer cocktail is and write it down here: (+359882428798, +359882507626, +359888169933, +359895833850)</label>
        <input type="text" name="q12" placeholder="Enter your answer..." onChange={handleInputChange}/>
    </div>
    <div className="input-style">
            <label htmlFor='name'>Write down a question that you think is relevant for a Sponsorship Application form and answer it!</label>
            <input type="text" name="q13" placeholder="Enter your answer..." onChange={handleInputChange} />
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
        background-color: #4C9FCE;
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
                background-color: #3365B6;
                color: #FFFFFFFF;
                font-weight: bold;


            }
        }

    }
  `