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
    REACT_APP_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCoIaC/y3+txIN2\nxJlyB2pH2wae0S/Agm+xdteIJ/FQwqDVUVZ16vO/c2xAfX8zAZ4mH03GxskP8zyJ\nCRz4kIwzF9xBlHKDcjAmc9pZZ7Sj8b8BnuFNDZQRUZeyn7OhQIpzH3V0ZbvTi5WZ\n327jtdnOz3aJWTFbobesdyBtght0dSVv40g7FPPGHFzCvvN423Vw2C7x0Y2pW2Sr\nxnmL9eGWG0Yb9e2IGcN414m8LmlCxD2pr4RDWaPQf9e3YYWBDXlxn1Noe/MQQk6I\ndBZj4aGt8vsXpyHbOsqdtmg6A+1/fhrbCqCKUE2VWdrhch8aNiNt93yhHiB1OVg0\nWW7jb995AgMBAAECggEAD92whjjlcRf40fXmhxC1ElfUbZtO9ss4UBZna3Vde+IJ\n/GdjEdicrOXvArz1CnKuImnU1JvAsI0jGslt3vUBDfdD9TpVfhsB+Tb4lXRIYyo2\nfKgqGbPc06+P8a7JbD+jcQ64bkYFbgaflPg1Ri7MgYwpYve0RTHjG9bYDA15mskl\n/IIzj6P4kA0eFVOD8g4bNeNy3PXJLqbmZiEcbmqYpcyQSWtVBJBIOwx3LXe/vG1B\nZOynuVGTXrSZuUmGywwCh5BpVH/Fdw7ul4w7IRfRIMU8bDghN3couKrs1Kz+RUBt\n8Pi83q8bNhULLMCqrHqJHraCQpUKIbiKhO0srMmBQQKBgQDf8kLObcj5Ie65mhn4\n5P+EWYbddlUJu9oow7conAr6IwZ6rCrzU264Ygevk1APruDEbSR9hhB8UfIr5V0z\nuigUgCNNjDQCsApzje5vLd+qGpIPZH/soJ4tTtdHq/jryGB93ykyYXQWb9AK9sQJ\n6APxfkjw/RpKUJ1X6fxnqVTYkQKBgQDAMjhjX3+WtzuPj6YbHDVMzJ2t8HA8dsNm\nYBSslPlo9FMcB/joCcWQh2+0qNx6j6/8sh7BMuogggLRjjQVpj6YRMAkCk6FpiL3\nSvUj2uGma2XWrHH3wVVDt+b991Xen7hLPDhH9NRFqwXWjFRSyLdK8tKJ22My7+hs\nw6jwtdhMaQKBgQCyQZ4Xvp+IXxAswJMH4Q/ag4Csa3KJCvQ+GnuCYaMDNDoGD2Eo\nyjKJpc5EXVgPA7552/59w+b/biL7+dhUQkuA9fYj1gPYV9QZ4tH1wWgVeIzmn7KL\n4dXGbslBjYvX8mmMB8Q9DAFhkqLg90dYM0xgP4tD99Ojb8OupNt6j/ivYQKBgDQz\nb61N2tGMotizI2JpnvBlAs6jZ1iEyT2dCwB01ejzsz8By1D6lnZS0rw2wOto61uu\n5TuEIKMDrNBN10eqB4ZD5gvj4L/cB9MywLIkWPViZh6QZ8Pq9sWVxV9lNiVpLB0D\nFiY1ERJ7CPLk2mJBscbhfN2EgMTs9CvWWKRIP59BAoGAPKBrvhbSwImt7hk6i3xz\nzwlhVjVik7SPIxzBa7yi9i2FzOtSVLEPryiZFLwcxP0nmS9Q7Xf50GHcn2fZ1N4l\n+YflO0RMIPP+aP2buqGiDXmnEzmTanU9BRJMawy0S0GivhcJXf0UqDM6Gn8L5Ac4\nKHhNMW76sw/GVXDA1SU3WA0=\n-----END PRIVATE KEY-----\n",
    REACT_APP_CLIENT_EMAIL = "speakers-connect@speakers-form.iam.gserviceaccount.com",
    REACT_APP_SPREADSHEET_ID = "1L4JZnteREIAMncF0pvH41Sp7qazUfIUYdIkjqNHlsIQ",
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
            <form className="App" onSubmit={handleSubmit}>
            <h1><span style={{ color: "#FFFFFF" }}>Speakers Department</span></h1>
        <h2><a href={"https://www.startupatblagoevgrad.org/"}><span style={{ color: "#4B464D" }}>StartUP@Blagoevgrad</span></a></h2>
        <h1>Application Form</h1>
        <label>Important note: Applications with unanswered quiestions will not be accepted.</label> 
          <label>There will be no confirmation email after submitting the form.</label> 
          <div><span style={{ fontWeight: 'bold' }}>More about our department you can find <a href={"https://youtu.be/eR3enF5Rhkw"}><span style={{ textDecorationLine: 'underline', color: "#000000" }}>here.</span></a></span></div>
          <div> Good luck!</div>
              <div className="input-style">
                <label htmlFor='name'>First and last name</label>
                <input type="text" name="q1" placeholder="Enter your answer..." onChange={handleInputChange} />
              </div>
              <div className="input-style">
                <label htmlFor='name'>AUBG Email (ex. abc123@aubg.edu)</label>
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
                <label htmlFor='name'>Describe your personality and work ethic with 5 adjectives.</label>
                <input type="text" name="q5" placeholder="Enter your answer..." onChange={handleInputChange} />
              </div>
              <div className="input-style">
                <label htmlFor='name'>What challenges do you usually find when working in a team and how do you overcome them?</label>
                <input type="text" name="q6" placeholder="Enter your answer..." onChange={handleInputChange} />
              </div>
              <div className="input-style">
                <label htmlFor='name'>Is there a person you have started following recently (on any social media) or a book you have read that has changed your mindset and if so, in what way?</label>
                <input type="text" name="q7" placeholder="Enter your answer..." onChange={handleInputChange} />
              </div>
              <div className="input-style">
                <label htmlFor='name'>If you could invite any person in the world to a StartUP event, who would it be and why?</label>
                <input type="text" name="q8" placeholder="Enter your answer..." onChange={handleInputChange} />
              </div>
              <div className="input-style">
                <label htmlFor='name'>Hmm, maybe we missed asking you something important? Write down a question that you think is relevant for a Speakers’ application form and then answer it.</label>
                <input type="text" name="q9" placeholder="Enter your answer..." onChange={handleInputChange} />
              </div>
              <div className="input-style">
            <label htmlFor='name'>Write down a question that you think is relevant for a Speakers Application form and answer it!</label>
            <input type="text" name="q10" placeholder="Enter your answer..." onChange={handleInputChange} />
          </div>
              <div className="input-style">
                <label htmlFor='name'>Good job! You are all done with the application form; however, if you’re one of the brave ones, we dare you to do one more thing! Call one of the following numbers and ask the person what his/her name is and what his/her favorite nightclub in Blagoevgrad/ type of cocktail is. Then, write down what you found out. Good luck! (0884875729, 0895854977, 0884054935, 0885402280, 0884517405)</label>
                <input type="text" name="q11" placeholder="Enter your answer..." onChange={handleInputChange} />
              </div>
              <div className="input-style">

                <input type="submit" value={loading ? "Successfully submitted" : "SUBMIT"} />
              </div>
            </form>
          </div>
        </FormStyle>
);
}

export default App;

const FormStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .container{
        background-color: #9854B8;
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
                background-color: #4C2A5C;
                color: #FFFFFFFF;
                font-weight: bold;


            }
        }

    }
  `