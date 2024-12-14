import React, { useState } from "react";
import { useForm } from "react-hook-form";
import pic from "./Assests/register.png";

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [captcha, setCaptcha] = useState(generateCaptcha());
    const [captchaInput, setCaptchaInput] = useState("");
    //   const [formData, setFormData] = useState(null);
    const [aboutMeCount, setAboutMeCount] = useState(0);
    const [file, setFile] = useState(null);

    // Generate a simple CAPTCHA code
    function generateCaptcha() {
        return Math.random().toString(36).substring(2, 8).toUpperCase();
    }

    // Handle CAPTCHA change
    const handleCaptchaChange = (e) => {
        setCaptchaInput(e.target.value);
    };

    // Handle file upload
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    // Handle description character count
    const handleAboutMeChange = (e) => {
        setAboutMeCount(e.target.value.length);
    };

    // Submit form data
    const onSubmit = (data) => {
        console.log("This is form data");
        console.log(data);

        if (captchaInput !== captcha) {
            alert("CAPTCHA code is incorrect. Please try again.");
            setCaptcha(generateCaptcha());
            return;
        }
        alert("Registration completed");
    };

    return (
        <>
            <style>
                {`
          .container {
            background-color: rgb(254, 254, 254);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Roboto', sans-serif;
          }
          .form-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 80%;
          }
          .image-container {
            flex: 1;
            padding: 10px;
            text-align: center;
          }
          .image-container img {
            width: 100%;
            max-width: 400px;
            height: auto;
            border-radius: 8px;
          }
          .form-container {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
            width: 500px;
          }
          .form-header {
            text-align: center;
            color: #333;
            font-size: 1.8rem;
            margin-bottom: 25px;
            font-weight: 600;
          }
          .form-group {
            margin-bottom: 20px;
          }
          .form-input {
            width: 100%;
            padding: 12px;
            border-radius: 10px;
            border: 1px solid #ddd;
            transition: border 0.3s ease;
            box-sizing: border-box;
          }
          .form-input:focus {
            border-color: #6c5ce7;
            outline: none;
          }
          .error {
            border: 1px solid red;
          }
          .submit-button {
            width: 100%;
            padding: 15px;
            background-color: #6c5ce7;
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 1.1rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          .submit-button:hover {
            background-color: #5e54e5;
          }
          .captcha {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .captcha-box {
            background-color: #f3f3f3;
            font-size: 1.2rem;
            font-weight: bold;
            padding: 10px;
            letter-spacing: 3px;
          }
          .char-count {
            font-size: 0.9rem;
            color: #6c757d;
            text-align: right;
          }
        `}
            </style>
            <div className="container">
                <div className="form-wrapper">
                    <div className="image-container">
                        <img src={pic} alt="Registration illustration" />
                    </div>
                    <div className="form-container">
                        <h2 className="form-header">Create Account</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Name */}
                            <div className="form-group">
                                <label>Name:</label>
                                <input
                                    type="text"
                                    className={`form-input ${errors.name ? "error" : ""}`}
                                    {...register("name", { required: true, minLength: 3, maxLength: 10 })}
                                />
                                {errors.name?.type === 'required' && <p className='text-danger' style={{color:"red"}}>* Username required</p>}
                                {errors.name?.type === 'minLength' && <p className='text-danger' style={{color:"red"}}>* Min length should be 4</p>}
                                {errors.name?.type === 'maxLength' && <p className='text-danger' style={{color:"red"}}>* Max length should be 10</p>}
                            </div>

                            {/* Email */}
                            <div className="form-group">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    className={`form-input ${errors.email ? "error" : ""}`}
                                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                />
                                {errors.email && <p style={{ color: "red" }}>Please enter a valid email.</p>}
                            </div>

                            {/* Password */}
                            <div className="form-group">
                                <label>Password:</label>
                                <input
                                    type="password"
                                    className={`form-input ${errors.password ? "error" : ""}`}
                                    {...register("password", { required: true, minLength: 6 })}
                                />
                                {errors.password && (
                                    <p style={{ color: "red" }}>Password is required (min 6 characters).</p>
                                )}
                            </div>

                            {/* About Me */}
                            <div className="form-group">
                                <label>About Me:</label>
                                <textarea
                                    className="form-input"
                                    maxLength="150"
                                    onChange={handleAboutMeChange}
                                />
                                <div className="char-count">{aboutMeCount} / 150</div>
                            </div>

                            {/* File Upload */}
                            <div className="form-group">
                                <label>Upload Profile Picture:</label>
                                <input type="file" className="form-input" onChange={handleFileChange} />
                            </div>

                            {/* CAPTCHA */}
                            <div className="form-group captcha">
                                <span className="captcha-box">{captcha}</span>
                                <input
                                    type="text"
                                    placeholder="Enter CAPTCHA"
                                    className="form-input"
                                    value={captchaInput}
                                    onChange={handleCaptchaChange}
                                />
                            </div>

                            {/* Submit */}
                            <button type="submit" className="submit-button">
                                Register
                            </button>
                        </form>

                        {/* Form Summary */}
                        {/* {formData} */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
