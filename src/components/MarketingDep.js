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
    REACT_APP_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDK39vortBvA9/y\nxfctEW4wEU0WSHrzlQ2vtJNGEEbbPoaOeJ51BeQStBpCnf4AynlcthTHGlY13t5r\nZ05GSy4Yksxuc79lpHKs/piB2XKkNrOEdaBRkcNpZxrE4nvRBVKALKMYktfj77Yi\nEp51b2sUdpPESnlrqf6/o4cyspsmy6SQ4hC96bPtvo3VSwb9+liSUMk+hYOa5H8X\nVxifynyoDGlpPI0a6gffGHDI3RoX89J1EnT6X0aOysKyhGb7DeEC6tE/jBrsaWGl\n5a1IdYEr7a2qh3gZj/rzLme6RqwC8xpWhrKPxFYVLBFcfBlDe1mbgKuXGqE/WGHM\nHnmrbsmFAgMBAAECggEADI4+NfBbxgMfYQ8PdSKXBzKK6s4hjeGzryQl2Tg4qmj8\nOuUMKYHr05yB442TosjlKe+66XefzkW0zkDef0s31x1+uXdAaTH8Ruia1651geRA\nx/nfqiyzQ1q2NWku8Ii7ymL41RSBeAHl68XrOKlknyeXjZZuXVNwCLw+Kc0T/RqQ\n/6Po6f9YqTyXi5x0U7ylBkm6FknwGj7EFrLdnE8PHY115BuFbwUBx1iVJV9ia4gc\nlrbyAZGLABBNh+1ZiyYITaQSlGbPGgAvi/Y6VEgxD/ZMt6nnZ7hw6HFL2Q4A0Ho7\nehs2ib/vOjHy9pMBkVs/7BMQrMmA7rlG3WTtfHntAQKBgQD9FkCse8CWf0Wkd4vB\nBkND8NKvn2QsNPm411hGPxwk28Gb6+vtN1q/iUliVjWMaxIYn6E7MTza5CR0g5hc\nJJ7D/ic01toyemjGQvMnFgji5QmzVEXDhYY94dJkXTuhTD0KSR/LkMdSTt88vrqu\noMvj3ZAARfB3ms9jH7xogGJCiQKBgQDNNaZn7M+TCyyeHmDa6QLFrS9Oo2uq89/F\nZm+ngri6+nT/4jZFWIy1ICMYrPDIEDF/VfoEOwZcatHhm84omNv16DY3ZJFfDZDr\naKReJiWXMrvLAIFirUtXBBeToBUFwqMhc3sPE8lzOt1rjrxbt5ajOngyJJfgadLd\n783ww5NAHQKBgG+ueiujEIFY+GpzNoCfOt+oTdCiDZpUZj5jCNk20DyTnQQpP5sW\naj1LX869LDQiq4GiL4vnVmthcZTY3UsL/eOPK83tYawUyFd1A8ejuZgmaflwnriB\nG5QDKsyPN9kdw3HeguFZqhtwIqKzp72Xx2FuTDVSp6Kf9hRP1NxoivPBAoGBAK0x\napCrvUVNWQraeMRJhJ1x3UtxgZ121pW0Lugh2+dzGuwb79H3OkpkJTreOxmfESd3\nWNvZNTUqspjG9ugsmvigU6HMrySaPoVwe8k6SN+jYfujIZA20i9OtNdTdGq4KxZA\ncMv41zz5oYb1oOOHvwtkfa1UVRqCNgY6LoXViqHBAoGBAJxAYfBc4BH9GxJ9I6k0\nNQwoYUy61Eswh3FUop3JzXQFylguqCkUm1IF/6hq5Go25cND1UDJfwBp4yEpMy1y\nvonyQWQUNZAkJqbg+CziADNfMjcvd2gUNUUmfPyKkzHaw6fPpm3yrHrIHlf1CtcE\nQOJIv8wyvacdpe1moDCJ02el\n-----END PRIVATE KEY-----\n",
    REACT_APP_CLIENT_EMAIL = "marketing-connect@marketing-form-363014.iam.gserviceaccount.com",
    REACT_APP_SPREADSHEET_ID = "1b1dsh1NLjikYDTmf9lqDCJtPKJQrVPoMtstJIMVNKrw",
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
        <h1><span style={{ color: "#FFFFFF" }}>Marketing Department</span></h1>
        <h2><a href={"https://www.startupatblagoevgrad.org/"}><span style={{ color: "#4B464D" }}>StartUP@Blagoevgrad</span></a></h2>
        <h1>Application Form</h1>
          <label>Important note: Applications with unanswered quiestions will not be accepted.</label> 
          <label>There will be no confirmation email after submitting the form.</label> 
          <div><span style={{ fontWeight: 'bold' }}>More about our department you can find <a href={"https://youtu.be/kOsnX_ECq_0"}><span style={{ textDecorationLine: 'underline', color: "#000000" }}>here.</span></a></span></div>
          <div> Good luck!</div>
          <label></label>
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
            <label htmlFor='name'>Why do you want to join our marketing department?</label>
            <input type="text" name="q5" placeholder="Enter your answer..." onChange={handleInputChange} />
          </div>
          <div className="input-style">
            <label htmlFor='name'>Do you have previous experience related to social media marketing or design?</label>
            <input type="text" name="q6" placeholder="Enter your answer..." onChange={handleInputChange} />
          </div>
          <div className="input-style">
            <label htmlFor='name'>What would you suggest to us to change in our social media accounts in order to become more appealing to the eye?</label>
            <input type="text" name="q7" placeholder="Enter your answer..." onChange={handleInputChange} />
          </div>
          <div className="input-style">
            <label htmlFor='name'>Are you familiar with a creative software? If yes, please specify which one (example: Photoshop, Canva, etc.)? What have you used this software for?</label>
            <input type="text" name="q8" placeholder="Enter your answer..." onChange={handleInputChange} />
          </div>
          <div className="input-style">
            <label htmlFor='name'>We offer you three animals: a tiger, a giraffe and a frog. Which one will you take home and what will you do with it?</label>
            <input type="text" name="q9" placeholder="Enter your answer..." onChange={handleInputChange} />
          </div>
          <div className="input-style">
            <label htmlFor='name'>If you have to wear clothes in only two colors for the rest of your life what colors will you choose?</label>
            <input type="text" name="q10" placeholder="Enter your answer..." onChange={handleInputChange} />
          </div>
          <div className="input-style">
            <label htmlFor='name'>Write down a question that you think is relevant for a Marketing Application form and answer it!</label>
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
        background-color: #F16161;
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
                background-color: #A10909;
                color: #FFFFFFFF;
                font-weight: bold;


            }
        }

    }
  `