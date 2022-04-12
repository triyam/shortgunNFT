import React from 'react'
import '../../Assets/css/Login.css';
import ShortGunlogo from '../../Assets/img/shotgun-removebg-preview.png';
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, FormFeedback, FormText,Row,Col ,Button,Collapse,Card,CardBody} from 'reactstrap'
const Signup = () => {
  return (
    <>
    
<div class="split left">
  <div class="centered">
{/* <div> */}
    <img src="https://static.wixstatic.com/media/ccc269_fef35fd3445e47099ff2ba432afd2ead~mv2.png/v1/fill/w_60,h_50,al_c,usm_0.66_1.00_0.01,enc_auto/Original_edited_edited_edited.png" alt="Shortgun"/>
    <h2>ShortGun</h2>
    <p>StrugEnd.</p>
  </div>
</div>

<div class="split right">
  {/* <div class="centered"> */}
  {/* <div> */}
  <div className="col-md-6 mb-md-0 mb-2 mx-auto">

  <img src={ShortGunlogo} alt="Shortgun"/>
<div className="form-group mb-3" >
      <h1>
        Signup Page
      </h1>
    </div>
    
    <Form inline>
      <FormGroup floating>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Email"
          type="email"
        />
        <Label for="exampleEmail">
          Email
        </Label>
      </FormGroup>
      {' '}
     
      <FormGroup floating>
        <Input
          id="firstname"
          name="firstname"
          placeholder="First Name"
          type="name"
        />
        <Label for="firstName">
          firstname
        </Label>
      </FormGroup>
      {' '}

      <FormGroup floating>
        <Input
          id="lastname"
          name="lastname"
          placeholder="Last Name"
          type="name"
        />
        <Label for="lastName">
          lastname
        </Label>
      </FormGroup>
      {' '}


      <FormGroup floating>
        <Input
          id="phonenum"
          name="phonenum"
          placeholder="Phone Number"
          type="number"
        />
        <Label for="phonenum">
          PhoneNumber
        </Label>
      </FormGroup>
      {' '}


      <FormGroup floating>
        <Input
          id="nationality"
          name="nationality"
          placeholder="nationality"
          type="name"
        />
        <Label for="nationality">
          Nationality
        </Label>
      </FormGroup>
      {' '}


      <FormGroup floating>
        <Input
          id="password"
          name="password"
          placeholder="Password"
          type="password"
        />
        <Label for="examplePassword">
          Password
        </Label>
      </FormGroup>
      {' '}


      <FormGroup floating>
        <Input
          id="confPassword"
          name="confpassword"
          placeholder="Confirm Password"
          type="password"
        />
        <Label for="confPassword">
          ConfPassword
        </Label>
      </FormGroup>
      {' '}
      <div>
      <Button>
        Submit
      </Button>
      </div>
    </Form>
    <div>
      <br />
      <div>
      <p>
            Already have an account?
            </p>
            <button>
              Login here.
            </button>
    </div>
    </div>
    </div>
  </div>
{/* </div> */}


  </>
  )
}
export default Signup;
